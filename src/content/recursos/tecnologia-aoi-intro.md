---
title: "Introducción a AoI (ACARS sobre Iridium)"
description: "Cómo la constelación de satélites Iridium proporciona conectividad ACARS global y cómo podés decodificarla."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "iridium", "aoi", "satcom"]
category: "Tecnología Aeronáutica"
difficulty: "Experto"
readingTime: 5
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

ACARS sobre Iridium (AoI) transmite datos ACARS a través de la constelación de satélites Iridium, una red de satélites de órbita terrestre baja (LEO) que proporciona una verdadera cobertura global, incluyendo las regiones polares que los satélites geoestacionarios como Inmarsat no pueden alcanzar.

## Cómo Funciona

La constelación Iridium consta de 66 satélites LEO activos orbitando a aproximadamente 780 km de altitud. A diferencia de los satélites geoestacionarios que permanecen fijos sobre el ecuador, los satélites Iridium orbitan la Tierra y transfieren las conexiones a medida que pasan por encima, proporcionando una cobertura ininterrumpida en cualquier lugar del planeta.

## Qué Transporta

AoI transporta mensajes ACARS estándar y comunicaciones de seguridad de vuelo. Es de vital importancia para aeronaves que operan en rutas transpolares, donde el VHF, HFDL e Inmarsat no proporcionan una cobertura fiable.

## Recibiendo Iridium

Las señales de Iridium operan en Banda L (alrededor de 1616–1626.5 MHz). Debido a que los satélites se mueven constantemente, la recepción requiere una antena omnidireccional o de haz ancho con visibilidad clara al cielo.

### Requisitos de Hardware

*   **SDR**: [Airspy R2](/catalogo/sdr)
*   **Antena**: [Calian HC610](/catalogo/sdr)

### Flujo de Software

La decodificación de Iridium es un proceso de dos etapas:
1.  **Demodulación**: `iridium-sniffer` (o gr-iridium) captura las ráfagas Iridium sin procesar desde el SDR y extrae los marcos (frames).
2.  **Decodificación**: `iridium-toolkit` analiza los marcos demodulados y extrae los mensajes ACARS.

### Consejos para la Recepción

*   **Visibilidad del cielo**: Colocá tu antena en techos, balcones y campos abiertos.
*   **Las pasadas de los satélites son constantes**: Los satélites orbitan cada ~100 minutos. Siempre hay satélites por encima, por lo que la recepción es continua.
*   **Cobertura polar**: Iridium es el único medio ACARS que cubre los polos. Si te encontrás en latitudes altas, tu alimentación de datos Iridium es especialmente valiosa para la red.
