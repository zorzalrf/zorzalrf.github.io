---
title: "Cómo descargar imágenes del clima en vivo desde satélites NOAA"
description: "Aprende a interceptar satélites meteorológicos y descargar fotos de la Tierra en tiempo real desde tu casa usando un dipolo en V."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["noaa", "satelites", "clima", "dipolo", "sdr"]
category: "Guías de Dispositivos"
difficulty: "Intermedio"
readingTime: 7
---

¿Sabías que podés descargar fotografías satelitales de tu ciudad directamente desde el espacio, en vivo, y gratis? 

Los satélites meteorológicos del sistema NOAA de Estados Unidos (NOAA 15, NOAA 18 y NOAA 19) orbitan la Tierra transmitiendo continuamente la imagen del clima que ven a través del sistema APT (Automatic Picture Transmission) alrededor de los **137 MHz**.

Capturarlas es uno de los proyectos más gratificantes del mundo SDR. Todo lo que necesitás es tu computadora, paciencia, y el equipo adecuado.

## El Hardware: La importancia de la V-Dipole

La señal de estos satélites utiliza una polarización circular. Si bien existen antenas complejas y enormes para esto (como la Quadrifilar Helix), hay un truco maravilloso descubierto por la comunidad amateur: **La antena Dipolo en V**.

Si tenés el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) que viene con nuestro [Kit SDR Completo](https://zorzalrf.empretienda.com.ar/antenas/kit-rtl-sdr-blog-v3-antena-dipolo-sdr-completo), ya tenés la antena perfecta. 

Para configurarla:
1. Enroscá las dos varillas largas en la base.
2. Extendé ambas varillas hasta que midan exactamente **53 centímetros** cada una (esto la sintoniza matemáticamente para la frecuencia de 137 MHz).
3. Separá las varillas formando un **ángulo de 120 grados** (forma de "V" abierta).
4. Colocá la antena afuera, completamente paralela al piso (acostada horizontalmente) apuntando el vértice de la "V" hacia el Norte o el Sur.

## El Software

Necesitarás tres herramientas gratuitas para hacer magia:
1. **Un software de rastreo (como WXtoImg o Orbitron):** Te dirá a qué hora exacta pasará el satélite por encima de tu casa.
2. **Tu sintonizador (SDR# o SDR++):** Para grabar el audio del satélite. Se sintoniza en modo WFM (FM ancho), grabando la señal de 137 MHz en formato de audio estándar (WAV).
3. **El decodificador:** Herramientas como NOAA-APT o el propio WXtoImg tomarán ese archivo de audio lleno de "pitidos" y lo transformarán línea por línea en una imagen fotográfica espectacular de tu país.

## Consejos para la primera imagen

El mayor desafío no es el software, sino la vista al cielo. El satélite emite a muy baja potencia desde 800 kilómetros de altura. 
Si tenés árboles o edificios bloqueando el horizonte, tu señal tendrá ruido (franjas blancas o negras en la imagen). Para obtener la mítica "imagen libre de ruido de punta a punta", buscá un campo abierto o el techo más alto posible, enchufá tu [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) a tu notebook, y preparate para ver la Tierra como nunca antes.
