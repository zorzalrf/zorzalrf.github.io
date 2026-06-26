---
title: "Sistemas Receptores para Aviación"
description: "Guía sobre cómo elegir y combinar dispositivos SDR para recibir diferentes señales y frecuencias de forma simultánea."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["hardware", "receptores", "sdr", "configuración"]
category: "Tecnología Aeronáutica"
difficulty: "Principiante"
readingTime: 5
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

A la hora de construir un sistema receptor de seguimiento de aeronaves, primero debés saber qué tipo de datos estás intentando recibir y cuáles son tus objetivos generales.

## Eligiendo un punto de partida

Si sos nuevo en este pasatiempo, comenzá con **VHF ACARS o VDL2**. Éstos requieren la menor inversión en hardware (un solo [RTL-SDR](/catalogo/?type=SDR) y una [antena](/catalogo/?type=Antena) VHF básica) y producirán resultados rápidamente si estás cerca de un aeropuerto o ruta de vuelo.

Si deseás rastrear vuelos transoceánicos, el **HFDL** es la opción más accesible — también usa un solo SDR pero con una antena de HF (alta frecuencia).

El **SATCOM** (Inmarsat AERO e Iridium) requiere hardware mucho más especializado (antenas parabólicas, [LNA](/catalogo/?type=Accesorios) de Banda L) y es mejor abordarlo después de tener experiencia con los modos más sencillos.

## Sistemas de Iniciación / Exploratorios

Configuraciones de bajo costo y bajo compromiso para empezar.

### Un Solo SDR

Requiere que elijas una única red.

| Red | Qué vas a recibir | Decodificador | Antena |
| --- | --- | --- | --- |
| ACARS | Mensajes VHF de aviones cercanos | `acarsdec` | Antena látigo o colineal VHF |
| VDL2 | Mensajes digitales VDL Mode 2 | `dumpvdl2` | Antena látigo o colineal VHF |
| HFDL | Enlace de datos HF oceánicos/remotos | `dumphfdl` | Antena de hilo (cable) o loop HF |
| AERO | ACARS vía satélite Inmarsat | `JAERO` | Parche Banda-L + LNA |
| AoI | ACARS vía Iridium | `iridium-toolkit` | Antena HC610/Helicoidal Banda-L + LNA |

### Doble SDR

Dos SDRs te permiten recibir dos redes simultáneamente. Combinaciones populares:

*   **ACARS + VDL2**: Máxima cobertura VHF. El combo inicial más popular.
*   **ACARS + HFDL**: Mensajes VHF locales más cobertura oceánica.
*   **VDL2 + HFDL**: VHF digital de alto volumen y oceánico.
*   **HFDL + HFDL**: Monitorea dos estaciones terrestres de HFDL simultáneamente para una cobertura de HF más amplia.

## Sistemas para Aficionados Experimentados

Para expandir la cobertura y contribuir con más datos.

### Triple SDR

La mayoría de las computadoras pueden manejar tres SDRs, pero una Raspberry Pi 3 podría tener dificultades. Se recomienda una Pi 4/5 o un Mini PC (N100 o similar).

*   **ACARS + VDL2 + HFDL**: La configuración "Completa VHF + HF" — captura todo dentro del alcance visual y transoceánico.

### Cuatro SDRs y más allá

Cuatro o más SDR requieren de un sistema capaz, como una Raspberry Pi 4/5 con refrigeración activa o un Mini PC x86. El ancho de banda USB y los requisitos de CPU aumentan con cada receptor.

En este nivel, considera ejecutar tu configuración usando **Docker y ACARS Hub** para un manejo más fácil de los múltiples procesos de decodificación.
