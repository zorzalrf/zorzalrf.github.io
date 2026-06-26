---
title: "Instalar y Configurar dumpvdl2"
description: "Guía de instalación de dumpvdl2 para la decodificación de mensajes VDL Mode 2 y conexión a Airframes."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "dumpvdl2", "instalación", "linux", "vdl2"]
category: "Decodificación"
difficulty: "Avanzado"
readingTime: 9
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

`dumpvdl2` es un decodificador de mensajes VDL Mode 2 y analizador de protocolos. Es el decodificador recomendado para VDL2 y admite múltiples canales simultáneos con opciones de salida flexibles.

## Instalación en Debian/Ubuntu

### Instalar dependencias

```bash
sudo apt-get install build-essential cmake git pkg-config libglib2.0-dev librtlsdr-dev
```

### Instalar libacars (requerido)

```bash
git clone https://github.com/szpajder/libacars.git
cd libacars
mkdir build && cd build
cmake ../
make
sudo make install
sudo ldconfig
```

### Compilar dumpvdl2

```bash
git clone https://github.com/szpajder/dumpvdl2.git
cd dumpvdl2
mkdir build && cd build
cmake ../
make
sudo make install
```

Opciones opcionales de compilación (flags):
*   `-DRTLSDR=TRUE` — Soporte [RTL-SDR](/catalogo/sdr) (habilitado por defecto si se encuentra librtlsdr)
*   `-DMIRISDR=TRUE` — Soporte Mirics SDR
*   `-DSDRPLAY=TRUE` — Soporte SDRplay
*   `-DSOAPYSDR=TRUE` — Soporte SoapySDR
*   `-DSQLITE=TRUE` — Enriquecimiento con base de datos de aeronaves
*   `-DZMQ=TRUE` — Soporte para salida ZeroMQ (instalar `libzmq3-dev` antes)

### Instalación rápida mediante script

Una alternativa a compilar desde el código fuente es el script de instalación de wiedehopf:
```bash
bash -c "$(wget -q -O - https://raw.githubusercontent.com/wiedehopf/adsb-wiki/main/dumpvdl2-install.sh)"
```

## Configuración

### Uso básico

```bash
dumpvdl2 --rtlsdr 0 --gain 40 --correction 0 \
  --output decoded:json:udp:address=feed.airframes.io,port=5552 \
  --station-id MI-ESTACION-VDL2 \
  136975000
```

### Opciones clave de la línea de comandos

| Opción | Descripción |
| --- | --- |
| `--rtlsdr <dispositivo>` | Usa el dispositivo RTL-SDR (por índice o número de serie) |
| `--sdrplay <dispositivo>` | Usa el dispositivo SDRplay |
| `--soapysdr <dispositivo>` | Usa el dispositivo SoapySDR |
| `--gain <dB>` | Ganancia del sintonizador en dB |
| `--correction <ppm>` | Corrección de frecuencia en PPM |
| `--centerfreq <freq>` | Establece la frecuencia central (útil para evitar el pico de DC) |
| `--station-id <id>` | Identificador de la estación para los mensajes de salida |
| `--output <spec>` | Configuración de la salida (ver más abajo) |

Las frecuencias se especifican como últimos argumentos en Hz (ej., `136975000`) o con sufijos (`136.975M`).

### Configuración de la salida

`dumpvdl2` usa un sistema de salida flexible con la siguiente sintaxis:

`--output <qué>:<formato>:<transporte>:<parámetros>`

**Formatos:**
*   `text` — Texto legible por humanos
*   `json` — Formato JSON (requerido para Airframes)

**Transportes:**
*   `file:path=/ruta/al/archivo` — Escribe en un archivo
*   `udp:address=<host>,port=<puerto>` — Envía vía UDP
*   `tcp:address=<host>,port=<puerto>` — Envía vía TCP
*   `zmq:mode=<client|server>,endpoint=<endpoint>` — ZeroMQ pub/sub

Podés usar múltiples banderas `--output` simultáneamente.

### Compartir datos con Airframes

```bash
dumpvdl2 --rtlsdr 0 --gain 40 \
  --output decoded:json:udp:address=feed.airframes.io,port=5552 \
  --station-id MI-ESTACION-VDL2 \
  136650000 136700000 136800000 136975000
```

*(El canal de señalización mundial CSC de VDL2 es `136975000` y siempre debería incluirse).*

## Ejecutando como un Servicio

```bash
sudo tee /etc/systemd/system/dumpvdl2.service << 'EOF'
[Unit]
Description=dumpvdl2 VDL2 decoder
After=network.target

[Service]
Type=simple
ExecStart=/usr/local/bin/dumpvdl2 --rtlsdr 0 --gain 40 --output decoded:json:udp:address=feed.airframes.io,port=5552 --station-id MI-ESTACION-VDL2 136650000 136700000 136800000 136975000
Restart=always
RestartSec=5

[Install]
WantedBy=multi-user.target
EOF

sudo systemctl daemon-reload
sudo systemctl enable dumpvdl2
sudo systemctl start dumpvdl2
```
