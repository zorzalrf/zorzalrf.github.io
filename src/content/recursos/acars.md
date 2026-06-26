---
title: "Decodificación de ACARS con SDR"
description: "Guía básica para recibir y decodificar mensajes de texto y telemetría de aviones en tiempo real."
publishDate: 2026-06-16
author: "Equipo Zorzal RF"
tags: ["sdr", "acars", "aviacion", "vhf", "tutorial"]
category: "SDR Avanzado"
difficulty: "Intermedio"
readingTime: 5
---

El sistema **ACARS** (Aircraft Communications Addressing and Reporting System) es un sistema de enlace de datos digital utilizado para transmitir mensajes cortos entre las aeronaves y las estaciones terrestres a través de radio (o satélite).

Los mensajes ACARS contienen información valiosa, como el plan de vuelo, datos meteorológicos, reportes de mantenimiento y telemetría de los motores. Con un simple receptor SDR podés interceptar y leer estos mensajes mientras los aviones sobrevuelan tu zona.

## Requisitos de Hardware

1. **Receptor SDR**: Cualquier RTL-SDR estándar es más que suficiente para esto.
2. **Antena VHF**: Una antena dipolo vertical ajustada a unos 131 MHz o una antena telescópica básica funcionará bien.
3. **Cables y adaptadores**: Para conectar la antena a tu receptor.

## Frecuencias Principales

La banda de operación de ACARS está dentro del espectro de aviación civil (VHF). Las frecuencias más comunes dependiendo de tu región son:

- **131.550 MHz** (Frecuencia principal global)
- **131.725 MHz** (Frecuencia primaria en Europa)
- **131.450 MHz** (Frecuencia secundaria en Japón y América)

## Software de Decodificación

A diferencia del audio analógico de los pilotos, ACARS suena como un chillido digital rápido (similar a los viejos módems de internet). Para convertir este chillido en texto legible, vas a necesitar un software específico:

### 1. SDR# (SDRSharp) + MultiPSK / PDW
Podés usar un cable de audio virtual (Virtual Audio Cable) para enviar el audio desde SDR# a un decodificador genérico.

### 2. AcarsDeco2 / RTL_ACARS
Estos son programas por línea de comandos diseñados específicamente para RTL-SDR. Tienen la ventaja de decodificar múltiples frecuencias al mismo tiempo de manera ultra eficiente, y te permiten ver los mensajes directamente en tu navegador o en una terminal.

## Primeros Pasos

1. Sintonizá tu software en `131.550 MHz` en modo **AM**.
2. Ajustá el ancho de banda a unos `10 kHz`.
3. Desactivá el "Squelch" o ajustalo muy bajo para no perder el inicio de la transmisión.
4. Cuando escuches una ráfaga corta de estática digital, tu software de decodificación debería mostrar un nuevo mensaje en pantalla con la matrícula del avión y el contenido del reporte.

¡Es un excelente proyecto para empezar a explorar la interceptación de telemetría aeronáutica!


---

### 🛒 ¿Necesitás el hardware para este proyecto?
Recibí los mensajes de los aviones con claridad usando el equipo adecuado:
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](/catalogo/?type=SDR)**
- **[Filtro Rechazo Banda FM (88-108 MHz)](/catalogo/?type=Filtros)**