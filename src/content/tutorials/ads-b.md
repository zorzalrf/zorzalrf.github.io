---
title: "Rastreo de Vuelos con ADS-B (Radar Casero)"
description: "Armá tu propio radar interceptando señales ADS-B en 1090 MHz y visualizá los vuelos en un mapa interactivo."
publishDate: 2026-06-17
author: "Equipo Zorzal RF"
tags: ["ads-b", "aviacion", "sdr", "radar"]
---

El sistema **ADS-B** (Automatic Dependent Surveillance-Broadcast) es una tecnología mediante la cual las aeronaves determinan su posición a través de satélites GPS y la transmiten periódicamente a las estaciones terrestres y a otros aviones. 

Gracias a la Radio Definida por Software (SDR), es extremadamente fácil interceptar estas señales y graficarlas en tiempo real, creando **tu propio radar aéreo personal**.

## ¿Cómo Funciona?

Los aviones comerciales transmiten esta información (que incluye altitud, velocidad, rumbo y número de vuelo) en la frecuencia de **1090 MHz**.

Dado que es una frecuencia relativamente alta (UHF), las señales operan bajo línea de visión. Esto significa que cuanto más alta esté tu antena y más despejado esté el horizonte, más lejos vas a poder "ver" los aviones (¡a veces hasta 400 km de distancia!).

## El Problema de las Interferencias

Un desafío gigantesco en la frecuencia de 1090 MHz es que está extremadamente cerca de las bandas de telefonía celular (GSM/LTE/4G). 

Si vivís en una ciudad o cerca de torres de telefonía, la señal fortísima de los celulares va a "cegar" a tu SDR, disminuyendo drásticamente tu rango de recepción de aviones.

> **Recomendación Profesional:** Para solucionar esto, es casi obligatorio usar un Filtro de Cavidad o un Filtro SAW. Podés visitar nuestro **[Catálogo de Productos](/zorzalRF/catalog/)** para comprar nuestro filtro optimizado específicamente para 1090 MHz, que bloquea la interferencia celular y triplica la cantidad de vuelos que vas a poder ver.

## Software Requerido

El estándar de oro para el rastreo de ADS-B es el software de código abierto **dump1090** (y sus variantes modernas como *tar1090* o *readsb*).

Si tenés una Raspberry Pi, el proyecto más sencillo es instalar la imagen de **PiAware** (de FlightAware) o **Flightradar24**. Estos sistemas vienen preconfigurados:
1. Conectás tu antena y tu SDR al puerto USB.
2. Encendés el equipo.
3. Entrás a la dirección IP de tu Raspberry Pi desde el navegador y vas a ver un mapa interactivo estilo Google Maps con los avioncitos moviéndose en vivo.

¡Incluso podés alimentar tus datos a estas redes globales a cambio de cuentas Premium gratuitas en sus plataformas!
