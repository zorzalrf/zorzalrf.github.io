---
title: "Instalar y Configurar acarsdec"
description: "Guía completa de instalación, compilación y configuración de acarsdec para decodificar ACARS VHF y compartir los datos."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "acarsdec", "instalación", "linux", "rtl-sdr"]
category: "Decodificación"
difficulty: "Avanzado"
readingTime: 10
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

`acarsdec` es un decodificador ACARS VHF multicanal. Esta guía cubre la instalación, configuración y envío de datos (feeding) a Airframes.

## Instalación en Debian/Ubuntu

### Instalar dependencias

```bash
sudo apt-get install build-essential cmake git libusb-1.0-0-dev librtlsdr-dev libxml2-dev zlib1g-dev pkg-config
```

### Instalar libacars (requerido para decodificar mensajes)

```bash
git clone https://github.com/szpajder/libacars.git
cd libacars
mkdir build && cd build
cmake ../
make
sudo make install
sudo ldconfig
```

### Compilar acarsdec

```bash
git clone https://github.com/TLeconte/acarsdec.git
cd acarsdec
mkdir build && cd build
cmake .. -Drtl=ON
make
sudo make install
```

Opciones de compilación para otro hardware SDR:
*   Airspy: `cmake .. -Dairspy=ON`
*   SDRplay: `cmake .. -Dsdrplay=ON`
*   SoapySDR: `cmake .. -Dsoapy=ON`

## Configuración

### Uso básico

```bash
acarsdec -o 4 -j feed.airframes.io:5550 -i MI-ESTACION-ACARS -r 0 130.025 130.450 131.125 131.550
```

### Opciones clave de la línea de comandos

| Opción | Descripción |
| --- | --- |
| `-r <dispositivo> f1 f2 ...` | Número del dispositivo [RTL-SDR](/catalogo/?type=SDR) seguido de las frecuencias (en MHz) |
| `-s <dispositivo> f1 f2 ...` | Número del dispositivo Airspy seguido de las frecuencias |
| `-o <nivel>` | Formato de salida: `0` ninguno, `1` una-linea, `2` completo (por defecto), `3` monitor, `4` JSON, `5` ruta JSON |
| `-j <host:puerto>` | Envía mensajes JSON mediante UDP al destino especificado |
| `-i <station_id>` | Identificador de estación incluido en los mensajes de salida |
| `-g <ganancia>` | Ganancia del sintonizador en dB (usá `-10` o valores sobre `52` para AGC) |
| `-p <ppm>` | Corrección de frecuencia en PPM |
| `-A` | Solo mostrar mensajes de aeronaves (enlace descendente/downlink), omitir enlace ascendente (uplink) |
| `-e` | Excluir mensajes vacíos |
| `-l <archivo_log>` | Guardar registro en un archivo en vez de mostrar en consola (stdout) |
| `-H` | Rotar el archivo de registro cada hora |
| `-D` | Rotar el archivo de registro cada día |

### Compartir datos con Airframes

Para enviar datos ACARS VHF a Airframes, usá la bandera `-j` combinada con la salida JSON (`-o 4`):

```bash
acarsdec -o 4 -j feed.airframes.io:5550 -i MI-ESTACION-ACARS -g 42 -r 0 130.025 130.450 131.125 131.550
```

**Parámetros importantes para alimentar a la red:**
*   `-o 4` habilita la salida JSON (requerida por Airframes).
*   `-j feed.airframes.io:5550` envía los datos a la ingesta ACARS de Airframes (puerto UDP 5550).
*   `-i MI-ESTACION-ACARS` identifica a tu estación.

### Formato de ID de la estación

La identificación de tu estación (Station ID) ayuda a identificar tu señal en Airframes. El formato recomendado es:

`XX-YYYY-ACARS`

Donde:
*   `XX` — Tus iniciales o un identificador personal (ej. `KE`)
*   `YYYY` — El código ICAO del aeropuerto más cercano (ej. `KSEA` o `SABE`)
*   `ACARS` — El tipo de decodificador

Ejemplo: `KE-KSEA-ACARS`

## Frecuencias ACARS Comunes

Todas las frecuencias deben estar dentro del mismo ancho de banda de 2 MHz. Se pueden decodificar hasta 8 canales a la vez.

*Revisá la tabla original según la región en la que te encuentres, por ejemplo en América suele usarse 129.125, 130.025, 130.450, 131.125 y 131.550 MHz.*

## Ejecutando como un Servicio

Para ejecutar `acarsdec` automáticamente al arrancar, crea un servicio systemd:

```bash
sudo tee /etc/systemd/system/acarsdec.service << 'EOF'
[Unit]
Description=acarsdec ACARS decoder
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/acarsdec -o 4 -j feed.airframes.io:5550 -i MI-ESTACION-ACARS -g 42 -r 0 130.025 130.450 131.125 131.550
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable acarsdec
sudo systemctl start acarsdec
```

## Solución de Problemas

**No se reciben mensajes:**
*   Verificá que se detecta tu SDR: `rtl_test`.
*   Revisá tu configuración de ganancia (intentá valores entre 20–48).
*   Asegurate de estar utilizando frecuencias activas en tu región.
*   Comprueba que otro software no esté usando el dispositivo.

**Errores de permisos:**
*   Crea una regla udev para tu RTL-SDR.
*   Bloquea el módulo del kernel de DVB-T: `echo "blacklist dvb_usb_rtl28xxu" > /etc/modprobe.d/blacklist-rtlsdr.conf` y reinicia.
