---
title: "Guía de configuración para satélites meteorológicos"
description: "Paso a paso para recibir imágenes espectaculares de la Tierra desde los satélites NOAA y Meteor-M."
publishDate: 2026-06-24
author: "Equipo Zorzal RF"
tags: ["proyectos", "satelites", "noaa", "meteor", "clima"]
category: "Satélites y Espacio"
difficulty: "Intermedio"
readingTime: 7
---

Recibir tus propias imágenes del clima directamente desde satélites en el espacio es uno de los proyectos más gratificantes del hobby del SDR.

Hay dos familias principales de satélites fáciles de recibir: los **NOAA** (estadounidenses, analógicos) y los **Meteor-M** (rusos, digitales).

## Frecuencias de Operación

- **NOAA 15:** 137.620 MHz
- **NOAA 18:** 137.9125 MHz
- **NOAA 19:** 137.100 MHz
- **Meteor-M N2-x:** Generalmente en 137.100 o 137.900 MHz (digital QPSK)

## Hardware Necesario

- **SDR:** RTL-SDR V3 o similar.
- **Antena:** Lo más importante es la antena. Necesitás una antena con polarización circular. Las mejores opciones son:
  - Antena V-Dipole (la más simple, se puede hacer en 10 minutos).
  - Antena QFH (Quadrifilar Helix - excelente rendimiento pero difícil de armar).
  - Antena Turnstile.
- *(Opcional)*: Un filtro de 137 MHz y un LNA si tenés mucha interferencia de FM comercial.

## Cómo predecir cuándo pasan

Los satélites de órbita polar pasan por encima de tu ciudad unas pocas veces al día. Para saber cuándo, usá aplicaciones como:
- **Orbitron** (PC)
- **Gpredict** (Linux/Mac/PC)
- **Look4Sat** (Android)

## Recibiendo NOAA (Analógico - APT)

1. En SDR#, sintonizá la frecuencia exacta, modo WFM, y un ancho de banda de **38 kHz**.
2. Desactivá los filtros de audio que distorsionen la señal.
3. Grabá el audio directamente en tu PC usando el plugin de grabación de audio (formato WAV, 11025 Hz, 16 bit, Mono).
4. Abrí ese archivo WAV en un programa como **NOAA-APT** o **WXtoImg**. El programa "escuchará" el pitido clásico del satélite y lo convertirá en un mapa espectacular de la Tierra.

## Recibiendo Meteor-M (Digital - LRPT)

Es un poco más complejo pero las imágenes tienen mucha mejor resolución y colores reales.
1. Necesitás usar un plugin demodulador QPSK en SDR# (como el Meteor Demodulator de *happysat*).
2. Este plugin toma la señal en vivo y se la envía a un decodificador como **MeteorGIS** o **SatDump**.
3. *Alternativa recomendada:* **SatDump** es hoy en día el software "todo en uno" líder. Podés abrirlo, elegir tu SDR, buscar Meteor-M y él mismo grabará, decodificará y procesará la imagen automáticamente.


---

### 🛒 ¿Necesitás el hardware para este proyecto?
El kit ideal para iniciarse en la recepción de satélites meteorológicos:
- **[Kit Antena Dipolo Multipropósito para SDR - Portátil y Versátil](/catalogo/?type=Antena)**
- **[Receptor SDR RTL-SDR Blog V3 - HF/VHF/UHF](/catalogo/?type=SDR)**