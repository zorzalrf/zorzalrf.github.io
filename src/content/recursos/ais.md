---
title: "Monitoreo de Tráfico Marítimo (AIS)"
description: "Cómo utilizar tu receptor SDR para rastrear barcos y embarcaciones comerciales a lo largo de la costa."
publishDate: 2026-06-18
author: "Equipo Zorzal RF"
tags: ["sdr", "ais", "barcos", "vhf", "tutorial"]
category: "SDR Avanzado"
difficulty: "Intermedio"
readingTime: 5
---

Así como los aviones utilizan ADS-B para evitar colisiones aéreas, la industria marítima utiliza un sistema casi idéntico llamado **AIS** (Automatic Identification System).

Si vivís cerca de la costa, puertos, o ríos navegables de gran tamaño, podés utilizar un SDR para capturar los datos de identificación, posición, rumbo y velocidad de todo el tráfico naval comercial y recreativo a tu alrededor.

## Frecuencias de Operación

El AIS funciona en la banda marítima de VHF utilizando dos canales principales simultáneamente:

- **Canal 87B:** `161.975 MHz`
- **Canal 88B:** `162.025 MHz`

Al estar en el rango de los 162 MHz, las ondas se propagan un poco mejor que las de ADS-B, pero siguen dependiendo fuertemente de tener una línea de visión clara hacia el agua. 

## Requisitos para el Monitoreo

### 1. Antena
Dado que las señales marinas utilizan **polarización vertical**, es crucial que tu antena esté montada de forma estrictamente vertical. Una antena dipolo o una antena vertical de plano de tierra (ground plane) con brazos de aproximadamente **46 centímetros** es ideal para resonar en 162 MHz.

### 2. Receptor SDR
Cualquier SDR genérico (RTL-SDR) funcionará de manera excelente. Al igual que con los aviones, instalar un LNA (Amplificador de Bajo Ruido) cerca de la antena te ayudará a recuperar señales de barcos que estén más allá del horizonte.

### 3. Software
Hay varios programas dedicados a decodificar las ráfagas GMSK del sistema AIS:

- **AIS-catcher**: Uno de los decodificadores modernos más potentes y versátiles para Windows, Linux y Raspberry Pi.
- **RTL-AIS**: Un decodificador clásico y ligero por consola.
- **OpenCPN**: Un software de navegación marítima completo (estilo mapa náutico) que puede ingerir los datos decodificados de los programas anteriores y graficar a los barcos en la pantalla de tu computadora.

## El Alcance

Bajo condiciones normales, y con una antena instalada en el techo de tu casa, podés esperar ver embarcaciones a unas 20 a 40 millas náuticas. Sin embargo, bajo ciertas condiciones atmosféricas (como las inversiones térmicas), ocurre un fenómeno de "ducto troposférico" que permite que la señal VHF viaje por cientos de kilómetros sobre el mar, trayéndote datos de barcos desde distancias increíbles.


---

### 🛒 ¿Necesitás el hardware para este proyecto?
Monitoreá el tráfico marítimo configurando nuestra antena dipolo a 162 MHz:
- **[Kit Antena Dipolo Multipropósito para SDR - Portátil y Versátil](/catalogo/antenas/)**
- **[Receptor RTL-SDR Blog V3 USB-C](/catalogo/sdr/)**