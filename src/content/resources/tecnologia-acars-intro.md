---
title: "Introducción a ACARS"
description: "Comprende qué es ACARS, qué datos transmite y las frecuencias que utiliza."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tecnología", "acars", "vhf", "poa"]
category: "Tecnología Aeronáutica"
difficulty: "Principiante"
readingTime: 5
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

ACARS (Aircraft Communications Addressing and Reporting System) es un sistema de comunicación digital utilizado para transmitir y recibir mensajes cortos entre aeronaves y sistemas terrestres. Desarrollado en 1978 por ARINC, se diseñó para automatizar las comunicaciones rutinarias, reduciendo la carga de trabajo de las tripulaciones y los despachadores.

## Plain Old ACARS (POA)

El sistema original (POA) transmite por radio VHF (Very High Frequency), principalmente en frecuencias como 131.550 MHz y 131.725 MHz. POA utiliza un esquema de modulación relativamente simple (AM MSK) con bajas velocidades de datos, pero su fiabilidad lo mantiene en uso generalizado.

POA funciona con línea de visión, lo que limita su cobertura a áreas continentales y zonas costeras cercanas.

## Qué Transporta ACARS

Algunos de los tipos de mensajes más comunes incluyen:
*   **Reportes OOOI**: (Out, Off, On, In) Eventos que registran automáticamente los tiempos de salida y llegada a la puerta de embarque, así como el despegue y aterrizaje.
*   **Reportes de Posición**: Datos periódicos de latitud, longitud y altitud.
*   **Datos Meteorológicos**: METARs, TAFs, NOTAMs y PIREPs entregados a la cabina.
*   **Autorizaciones Previas al Vuelo (PDC)**: Autorizaciones ATC (Control de Tráfico Aéreo) antes de retroceder (pushback).
*   **Mensajes de Texto Libre**: Operaciones de la aerolínea, horarios de tripulación, cambios de puerta.
*   **Reportes de Mantenimiento**: Parámetros de motores, códigos de fallas, fatiga del fuselaje, etc.

## Frecuencias de ACARS

VHF ACARS opera en frecuencias dedicadas dentro de la banda de aviación VHF.

| Frecuencia | Notas |
| --- |  --- |
| 130.025 MHz |  |
| 130.825 MHz |  |
| 130.850 MHz |  |
| 131.375 MHz |  |
| 131.450 MHz |  |
| 131.475 MHz | |
| 131.525 MHz | |
| 131.550 MHz |  Frecuencia principal a nivel mundial |
| 131.725 MHz | Frecuencia con mayor tráfico en Argentina|
| 131.825 MHz |  |
| 131.850 MHz |  |

> **Consejo:** No necesitás monitorear todas las frecuencias. Empezá con 131.550 y 131.725. Estas dos transportan la mayoría del tráfico a nivel mundial.

## Recibiendo ACARS

ACARS VHF es el punto de entrada más sencillo. Solo necesitás un dongle SDR básico y una [antena](/catalog/?type=Antena) VHF junto con el software `acarsdec`.
