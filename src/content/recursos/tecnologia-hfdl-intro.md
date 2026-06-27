---
title: "Introducción a HFDL"
description: "Comprende cómo funciona el Enlace de Datos de Alta Frecuencia (HFDL) para rastrear aviones transoceánicos."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "hfdl", "hf", "océanos"]
category: "Tecnología Aeronáutica"
difficulty: "Intermedio"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

El HFDL (High Frequency Data Link) es un sistema de comunicación que transmite mensajes ACARS a través de ondas de radio HF (Alta Frecuencia), proporcionando comunicación de datos aire-tierra a largo alcance donde no hay cobertura VHF (principalmente sobre océanos, regiones polares y zonas continentales remotas).

## Cómo Funciona el HFDL

A diferencia del ACARS basado en VHF, cuyas señales están limitadas al campo visual, las señales de radio HF pueden rebotar en la ionosfera y viajar miles de kilómetros. HFDL aprovecha esta propiedad mediante una red mundial de estaciones terrestres. Los aviones se conectan a la estación disponible más cercana.

## Qué Transporta HFDL

HFDL transporta mensajes ACARS estándar, informes de posición ADS-C y mensajes CPDLC. Esto hace que sea especialmente valioso para el seguimiento de aeronaves sobre los océanos, donde no hay cobertura de radar.

## Estaciones Terrestres HFDL

La red HFDL es operada por estaciones distribuidas en todo el mundo. Cada estación opera en múltiples frecuencias que rotan a lo largo del día a medida que cambian las condiciones de propagación ionosférica.

| ID | Ubicación | Región |
| --- | --- | --- |
| 1 | San Francisco, EE.UU. | Norteamérica |
| 2 | Molokai, Hawaii, EE.UU. | Pacífico |
| 3 | Reykjavik, Islandia | Atlántico Norte |
| 4 | Riverhead, Nueva York, EE.UU. | Norteamérica |
| 5 | Auckland, Nueva Zelanda | Pacífico Sur |
| 6 | Hat Yai, Tailandia | Sudeste Asiático |
| 7 | Shannon, Irlanda | Atlántico Norte / Europa |
| 8 | Johannesburgo, Sudáfrica | África |
| 9 | Barrow, Alaska, EE.UU. | Ártico / Pacífico Norte |
| 10 | Muan, Corea del Sur | Este de Asia |
| 11 | Albrook, Panamá | Centroamérica |
| 13 | Santa Cruz, Bolivia | Sudamérica |
| 14 | Krasnoyarsk, Rusia | Asia Central |
| 15 | Al Muharraq, Bahréin | Medio Oriente |
| 16 | Agana, Guam | Pacífico Occidental |
| 17 | Canarias, España | Atlántico Oriental |

Utilizá [hfdl.observer](https://hfdl.observer/) para ver qué estaciones y frecuencias están activas en tiempo real.

## Recibiendo HFDL

La recepción requiere un SDR capaz de sintonizar HF (con soporte nativo de HF o mediante upconverter) y una antena apropiada para HF. El software utilizado es `dumphfdl`. Una antena de hilo de al menos 10 metros, colocada lo más alto posible, es ideal para comenzar.
