---
title: "Introducción a AoA (ACARS sobre AERO)"
description: "Aprendé cómo el sistema ACARS se transmite a través de satélites Inmarsat para dar cobertura oceánica."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "aero", "inmarsat", "satcom", "jaero"]
category: "Tecnología Aeronáutica"
difficulty: "Intermedio"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

ACARS sobre AERO se refiere a los datos ACARS transmitidos a través de los servicios aeronáuticos de la constelación de satélites Inmarsat. Esto proporciona comunicación aire-tierra para aeronaves que vuelan sobre océanos y áreas remotas más allá de la cobertura de VHF o incluso HF.

## Cómo Funciona

La constelación de Inmarsat consiste en satélites geoestacionarios que brindan cobertura sobre las regiones del Océano Atlántico, Pacífico e Índico. Los aviones equipados con aviónica SATCOM se conectan a estos satélites para enviar y recibir mensajes ACARS, informes de posición ADS-C y CPDLC.

Se utilizan dos bandas principales:

*   **Banda L**: Las señales de Banda L provenientes de los satélites Inmarsat pueden recibirse con una antena tipo parche relativamente modesta. Aún mejor es usar una antena helicoidal de 7 a 10 vueltas con un amplificador LNA (ej. Nooelec). El software `JAERO` decodifica estas señales.
*   **Banda C**: Se utiliza para los enlaces de alimentación entre el satélite y la estación en tierra. La recepción en Banda C requiere un plato más grande (típicamente 1.8 metros o más) pero puede producir un conjunto de datos más rico. El plato requerirá un LNB con GPSDO.

## Satélites Inmarsat

| Satélite | Posición | Área de Cobertura |
| --- | --- | --- |
| I-3 F5 / IOR | 25.0° E | Región del Océano Índico |
| I-4 F1 / AOR-E | 63.9° W | Región del Océano Atlántico - Este |
| I-4 F3 / POR | 97.6° W | Región del Océano Pacífico |
| I-3 F4 / WOR | 54.0° W | Región del Océano Atlántico - Oeste |
| I-6 F1 | 63.5° E | Región del Océano Índico |
| I-6 F2 | 107.5° E | Asia-Pacífico |

Tu ubicación geográfica determina qué satélites podés recibir. En general, necesitás una línea de visión clara al satélite en su posición geoestacionaria.

## Recibiendo AERO SATCOM

Recibir señales AERO de Inmarsat es más complejo que la recepción de VHF o HFDL.

### Configuración Banda L

| Componente | Recomendación | Notas |
| --- | --- | --- |
| Antena | Antena parche, helicoidal de 7-10 vueltas o plato pequeño | Una hélice emparejada con un LNA da buenos resultados. |
| LNA | Nooelec SAWbird+ IR | LNA filtrado para Banda L. Esencial para sacar señales débiles del ruido. |
| SDR | [RTL-SDR](/catalogo/?type=SDR) Blog V3 o similar | Bias-tee es conveniente para alimentar el [LNA](/catalogo/?type=Accesorios). |
| Decodificador | `JAERO` | Decodificador AERO con interfaz gráfica. |
