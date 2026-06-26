---
title: "Compartir Datos con Docker"
description: "Aprendé cómo usar Docker y ACARS Hub para ejecutar múltiples decodificadores y alimentar los servicios de Airframes en una sola máquina."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["docker", "acars", "hub", "tutorial", "airframes", "feed"]
category: "Airframes"
difficulty: "Avanzado"
readingTime: 8
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

Docker es el método recomendado para ejecutar múltiples decodificadores en una sola máquina. Esta guía cubre dos enfoques: la configuración moderna de **ACARS Hub** (recomendada) y una configuración manual de Docker Compose.

## ACARS Hub (Recomendado)

[ACARS Hub](https://github.com/sdr-enthusiasts/docker-acarshub) es una solución en Docker "todo en uno" que decodifica ACARS, VDL2, HFDL y mensajes satelitales, proporciona un panel web local (dashboard) y alimenta automáticamente a servicios de agregación como Airframes.

La arquitectura utiliza `acars_router` como un centro unificador (hub):

```text
acarsdec ──UDP──► ┐
dumpvdl2 ──ZMQ──► │ acars_router ──ZMQ──► ACARS Hub (panel web)
dumphfdl ──UDP──► ┘       │
                          └──UDP/TCP──► feed.airframes.io
```

### Configuración con Docker Compose

Crea un archivo `docker-compose.yml`:

```yaml
services:
  acarshub:
    image: ghcr.io/sdr-enthusiasts/docker-acarshub:latest
    container_name: acarshub
    restart: always
    ports:
      - 8080:80
    volumes:
      - ./acars_data:/run/acars
    tmpfs:
      - /database:exec,size=64M
      - /run:exec,size=64M
      - /var/log:size=64M
    environment:
      - TZ=Etc/UTC
      - ENABLE_ACARS=true
      - ENABLE_VDLM=true
      - ACARS_CONNECTIONS=zmq://acars_router:45550
      - VDLM_CONNECTIONS=zmq://acars_router:45555

  acars_router:
    image: ghcr.io/sdr-enthusiasts/acars_router:latest
    container_name: acars_router
    restart: always
    tmpfs:
      - /run:exec,size=64M
      - /var/log:size=64M
    environment:
      - TZ=Etc/UTC
      - AR_OVERRIDE_STATION_NAME=MI-ESTACION
      - AR_ENABLE_DEDUPE=true
      - AR_RECV_ZMQ_VDLM2=dumpvdl2:45555
      # Compartir datos con Airframes (descomenta las líneas de tus decodificadores)
      - AR_SEND_UDP_ACARS=feed.airframes.io:5550
      - AR_SEND_TCP_VDLM2=feed.airframes.io:5553
      # - AR_SEND_TCP_HFDL=feed.airframes.io:5556

  acarsdec:
    image: ghcr.io/sdr-enthusiasts/docker-acarsdec:latest
    container_name: acarsdec
    restart: always
    environment:
      - TZ=Etc/UTC
      - SERIAL=               # Número de serie de tu [RTL-SDR](/catalog/?type=SDR)
      - GAIN=-10
      - PPM=0
      - FREQUENCIES=130.025;130.450;131.125;131.550
      - FEED_ID=MI-ESTACION
      - OUTPUT_SERVER=acars_router
      - OUTPUT_SERVER_MODE=udp
    tmpfs:
      - /run:exec,size=64M
      - /var/log:size=64M
    device_cgroup_rules:
      - "c 189:* rwm"
    volumes:
      - /dev/bus/usb:/dev/bus/usb:ro

  dumpvdl2:
    image: ghcr.io/sdr-enthusiasts/docker-dumpvdl2:latest
    container_name: dumpvdl2
    restart: always
    environment:
      - TZ=Etc/UTC
      - SERIAL=               # Número de serie de tu RTL-SDR
      - GAIN=40.0
      - PPM=0
      - FREQUENCIES=136650000;136700000;136800000;136975000
      - FEED_ID=MI-ESTACION
      - ZMQ_MODE=server
      - ZMQ_ENDPOINT=tcp://0.0.0.0:45555
    tmpfs:
      - /run:exec,size=64M
      - /var/log:size=64M
    device_cgroup_rules:
      - "c 189:* rwm"
    volumes:
      - /dev/bus/usb:/dev/bus/usb:ro
```

### Pasos de Configuración

1.  **Configurá el nombre de tu estación:** Cambia `AR_OVERRIDE_STATION_NAME` y `FEED_ID` por tu identificador de estación.
2.  **Configurá los números de serie de tu SDR:** Cada SDR necesita un número de serie único. Configurá el campo `SERIAL` para cada decodificador. Podés asignar números de serie a los dispositivos RTL-SDR con `rtl_eeprom -s MINUMEROSERIE`.
3.  **Configurá tus frecuencias:** Actualiza el campo `FREQUENCIES` de cada decodificador para que coincida con tu región.
4.  **Configurá tu zona horaria:** Cambia `TZ` por tu zona horaria local.
5.  **Habilita el envío a Airframes:** Las líneas que comienzan con `AR_SEND_*` en `acars_router` controlan a dónde se envía la información. Descomenta las líneas correspondientes a cada tipo de decodificador que estés ejecutando.

### Puertos de envío de acars_router

| Variable | Destino | Protocolo |
| --- | --- | --- |
| `AR_SEND_UDP_ACARS` | feed.airframes.io:5550 | UDP |
| `AR_SEND_TCP_VDLM2` | feed.airframes.io:5553 | TCP |
| `AR_SEND_TCP_HFDL` | feed.airframes.io:5556 | TCP |

### Iniciar y Detener

```bash
# Iniciar todos los contenedores
docker compose up -d

# Ver registros (logs)
docker compose logs -f

# Detener todos los contenedores
docker compose down
```

### Acceder al panel de control (Dashboard)

Una vez que se esté ejecutando, abrí `http://localhost:8080` (o la IP de tu máquina) en un navegador para ver el panel de ACARS Hub con los mensajes decodificados en tiempo real.

## Docker Compose Manual (Sin ACARS Hub)

Si prefieres una configuración más simple sin el panel de ACARS Hub, podés ejecutar los decodificadores directamente en contenedores Docker que alimenten a Airframes de manera independiente.

*(El documento original detalla extractos equivalentes del archivo `docker-compose.yml` donde se configuran los puertos directos de Airframes. Ver guía original para el archivo completo).*

## Validando tu Feeder

Una vez que tu feeder esté funcionando, visita la [página de estaciones de Airframes](https://app.airframes.io/stations) para ver tu estación y el contador de mensajes.

> **Nota:** Es posible que no recibas ningún mensaje de inmediato. El volumen de mensajes depende del tráfico aéreo en tu área y de la hora del día.

## Configuración de Sincronización de Tiempo

Tener marcas de tiempo (timestamps) precisas es importante para los mensajes ACARS. Si tu sistema (especialmente una Raspberry Pi sin un reloj en tiempo real o RTC) no tiene una hora confiable, podés configurarlo mediante NTP (`systemd-timesyncd`).

## Solución de Problemas

**Los contenedores no arrancan / No se encuentra el SDR:**
*   Verificá el acceso al dispositivo USB ejecutando `lsusb`. Debería mostrar tu SDR.
*   Asegurate de que ninguna otra pieza de software esté ocupando el SDR.

**No se reciben mensajes:**
*   Revisá los logs de los contenedores usando `docker compose logs acarsdec` o `docker compose logs dumpvdl2`.
*   Verificá que las frecuencias sean las correctas para tu región.
*   Intentá ajustar la ganancia (GAIN).
