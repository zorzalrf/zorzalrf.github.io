---
title: "Introducción a VDL Mode 2"
description: "Aprendé qué es VDL Mode 2, en qué se diferencia del ACARS original y qué frecuencias debés sintonizar."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "vdl2", "vhf", "dumpvdl2"]
category: "Tecnología Aeronáutica"
difficulty: "Principiante"
readingTime: 5
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

El Enlace de Datos VHF (VDL, por sus siglas en inglés) es un sistema de comunicación digital utilizado para el intercambio de datos aire-tierra y tierra-aire en la aviación. Opera en el rango de frecuencia VHF (118–136.975 MHz) y representa una mejora significativa con respecto al sistema analógico original de ACARS.

## VDL Mode 2

El VDL Mode 2 (VDL2) es la variante más ampliamente desplegada. Utiliza un esquema de modulación digital (D8PSK) que proporciona un mayor rendimiento de datos que el ACARS original (POA), lo que permite transmitir más mensajes en menos tiempo y con mayor fiabilidad.

VDL2 transporta los mismos tipos de mensajes ACARS que POA (reportes OOOI, de posición, datos meteorológicos, mensajes de texto, CPDLC), pero a través de un enlace digital mucho más eficiente.

## Diferencias entre POA y VDL2

| Característica | ACARS Original (POA) | VDL Mode 2 |
| --- | --- | --- |
| Modulación | AM-MSK (analógica) | D8PSK (digital) |
| Tasa de datos | 2,400 bps | 31,500 bps |
| Época | 1978 | Finales de los 90s |
| Eficiencia | Baja (un mensaje por vez) | Alta (mejor uso del canal) |
| Corrección de errores | Básica | Más robusta |
| Decodificador | `acarsdec` | `dumpvdl2` |

En la práctica, muchas aerolíneas y aeronaves usan ambos simultáneamente. VDL2 es cada vez más el enlace principal para aviones nuevos.

## Frecuencias de VDL2

VDL2 opera en canales dedicados dentro de la banda de aviación VHF. El Canal Común de Señalización (CSC) en **136.975 MHz** se usa a nivel mundial para el establecimiento inicial del enlace.

| Frecuencia | Región | Proveedor |
| --- | --- | --- |
| 136.650 MHz | Norteamérica | ARINC |
| 136.700 MHz | Norteamérica | ARINC |
| 136.725 MHz | Europa | ARINC |
| 136.775 MHz | Europa | SITA |
| 136.800 MHz | Norteamérica | SITA |
| 136.825 MHz | Europa | ARINC |
| 136.875 MHz | Europa | SITA |
| 136.975 MHz | Mundial | CSC (ARINC & SITA) |

## Recibiendo VDL2

La recepción de VDL2 utiliza la misma antena VHF y el mismo hardware [RTL-SDR](/catalogo/sdr/) que el ACARS tradicional. El decodificador recomendado es `dumpvdl2`, que puede procesar múltiples canales simultáneamente.
