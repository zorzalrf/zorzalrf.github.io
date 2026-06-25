---
title: "Instalar y Configurar dumphfdl"
description: "Aprendé a compilar y ejecutar dumphfdl para rastrear aviones utilizando la tecnología HFDL a nivel mundial."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "dumphfdl", "instalación", "linux", "hfdl"]
category: "Decodificación"
difficulty: "Avanzado"
readingTime: 7
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

`dumphfdl` es un decodificador HFDL multicanal que recibe mensajes ACARS, informes de posición ADS-C y comunicaciones CPDLC de aeronaves por radio de alta frecuencia (HF). El HFDL ofrece cobertura sobre océanos y zonas remotas donde no llegan las señales VHF.

## Instalación en Debian/Ubuntu

### Instalar dependencias

```bash
sudo apt-get install build-essential cmake git pkg-config libglib2.0-dev libconfig++-dev libliquid-dev libfftw3-dev
```

Para soporte SoapySDR:
```bash
sudo apt-get install libsoapysdr-dev
```

Para salida ZeroMQ:
```bash
sudo apt-get install libzmq3-dev
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

### Compilar dumphfdl

```bash
git clone https://github.com/szpajder/dumphfdl.git
cd dumphfdl
mkdir build && cd build
cmake ../
make
sudo make install
```

## Configuración

### Uso básico

Las frecuencias de HFDL se especifican en kHz:

```bash
dumphfdl --soapysdr driver=rtlsdr --sample-rate 250000 \
  --output decoded:json:udp:address=feed.airframes.io,port=5556 \
  --station-id MI-ESTACION-HFDL \
  8927 8912 8894 8885 8834
```

### Opciones clave de la línea de comandos

| Opción | Descripción |
| --- | --- |
| `--soapysdr <driver>` | Cadena de dispositivo SoapySDR (ej. `driver=rtlsdr`) |
| `--sample-rate <rate>` | Tasa de muestreo en Hz (requerido) |
| `--gain <dB>` | Ganancia del sintonizador en dB |
| `--gain-elements <spec>` | Ganancia por etapa (ej. `IFGR=54,RFGR=0`) |
| `--freq-correction <ppm>` | Corrección de frecuencia en PPM |
| `--centerfreq <freq>` | Frecuencia central en Hz (auto-calculada si se omite) |
| `--station-id <id>` | Identificador de estación |
| `--output <spec>` | Configuración de salida (misma sintaxis que dumpvdl2) |

*(El resto del proceso para compartir hacia Airframes usando `feed.airframes.io:5556` y para crear un servicio Systemd es idéntico a dumpvdl2).*

### Consejos para la selección de frecuencias

El HFDL utiliza una red mundial de estaciones en tierra y las frecuencias cambian durante el día según la propagación ionosférica. Por lo general, las frecuencias bajas funcionan mejor de noche y las altas de día.

Usá [hfdl.observer](https://hfdl.observer/) para ver qué estaciones y frecuencias están activas en tiempo real.
