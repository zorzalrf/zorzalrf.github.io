---
title: "Tecnología Aeronáutica: Resumen"
description: "Una visión general del panorama tecnológico de ACARS, los diferentes medios de transmisión y cómo Airframes los captura."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "acars", "vdl2", "hfdl", "satcom", "airframes"]
category: "Tecnología Aeronáutica"
difficulty: "Intermedio"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

## El panorama de ACARS

ACARS (Aircraft Communications Addressing and Reporting System) ha sido la columna vertebral de la comunicación digital aire-tierra desde 1978. Originalmente desarrollado por ARINC como una manera simple de automatizar las comunicaciones de rutina entre el piloto y la aerolínea, ACARS ha evolucionado hasta convertirse en un ecosistema diverso de medios de transmisión, protocolos y aplicaciones que tocan casi todos los aspectos de las operaciones de aviación modernas.

### Medios de Transmisión en un Vistazo

| Medio | Frecuencia | Alcance | Decodificador | Dificultad |
| --- | --- | --- | --- | --- |
| VHF ACARS (POA) | 129–131 MHz | Línea de visión (~200 nm) | `acarsdec` | Principiante |
| VDL Mode 2 | 136–137 MHz | Línea de visión (~200 nm) | `dumpvdl2` | Principiante |
| HFDL | 2–22 MHz | Miles de kilómetros | `dumphfdl` | Intermedio |
| Inmarsat AERO (Banda-L) | ~1.5 GHz | Cobertura geoestacionaria | `JAERO` | Avanzado |
| Inmarsat AERO (Banda-C) | ~3.4–4.2 GHz | Cobertura geoestacionaria | `JAERO` | Experto |
| Iridium (AoI) | ~1.6 GHz | Global (incluyendo polos) | `iridium-toolkit`| Avanzado |

### Medios de Transmisión

Los datos de ACARS no viajan a través de un único enlace de radio. Abarcan múltiples medios, cada uno con características, áreas de cobertura y casos de uso diferentes:

*   **VHF ACARS (Plain Old ACARS / POA)**: La forma original y más común. Opera en frecuencias VHF (principalmente 131.550 MHz y 131.725 MHz) con un alcance de línea de visión directa. Acá es donde la mayoría de los aficionados comienza.
*   **VDL (VHF Data Link)**: Una evolución digital del VHF ACARS con un mayor rendimiento y eficiencia. VDL Mode 2 es el más desplegado, operando en el rango de 118 a 136.975 MHz.
*   **HFDL (HF Data Link)**: Usa radio de alta frecuencia (HF) para comunicaciones de largo alcance, especialmente sobre océanos y regiones polares donde la cobertura VHF no llega.
*   **SATCOM (Comunicaciones por Satélite)**: Abarca varios sistemas:
    *   **Inmarsat AERO (Banda-L y Banda-C)**: Basado en satélites geoestacionarios.
    *   **Iridium (ACARS over Iridium / AoI)**: Usa la constelación de satélites LEO de Iridium para una verdadera cobertura global.

### Evolución Moderna

El paisaje de ACARS continúa evolucionando:
*   **ACARS sobre IP (AoIP)**: La opción de transporte más nueva, aprovechando la conectividad celular de banda ancha.
*   **FANS (Future Air Navigation System)**: Permite comunicaciones de enlace de datos piloto-controlador (CPDLC) directamente.
*   **Integración con NextGen/SESAR**: Se está integrando con sistemas de gestión de tráfico aéreo de nueva generación.

## Qué Captura Airframes

Airframes agrega datos a través de todos estos medios de transmisión. Nuestra red de *feeders* usa radios definidas por software (SDRs) para recibir las señales, que luego son decodificadas y enviadas al servidor agregador de Airframes para su procesamiento.
