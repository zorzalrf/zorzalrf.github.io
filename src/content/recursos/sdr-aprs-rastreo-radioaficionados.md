---
title: "Rastreando autos y globos con APRS (Red de Radioaficionados)"
description: "Cómo ver vehículos, estaciones repetidoras y telemetría en tiempo real sobre un mapa usando la banda de VHF de radioaficionados."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["aprs", "radioaficionados", "rastreo", "vhf", "sdr"]
category: "Guías de Dispositivos"
difficulty: "Intermedio"
readingTime: 6
---

Mucho antes de que existieran los celulares con 4G o WhatsApp, los radioaficionados ya compartían su ubicación, clima y mensajes de texto cortos a través de la radio mediante un sistema digital llamado **APRS** (Automatic Packet Reporting System).

Aún hoy, el APRS es extremadamente popular. Los aficionados instalan pequeños transmisores en sus autos, conectan estaciones meteorológicas en sus techos e incluso los servicios de emergencia lo usan en áreas remotas. 

Con tu SDR, podés sintonizar el canal local de APRS, decodificar el chillido digital de los paquetes y graficar todo el movimiento en un mapa de tu zona.

## La frecuencia mágica

A diferencia del ADS-B de los aviones, el APRS opera en la banda de VHF de radioaficionados (2 metros). La frecuencia exacta varía un poco según el continente:
* **Norteamérica:** 144.390 MHz
* **Europa:** 144.800 MHz
* **Argentina y resto de Sudamérica:** Usualmente **144.930 MHz**

## Armá tu estación receptora

El hardware requerido es extremadamente sencillo, idéntico al que usarías para escuchar la torre de control de un aeropuerto:

1. **Receptor:** El [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) es el dispositivo por defecto para esta tarea.
2. **Antena:** La señal de los vehículos usa polarización vertical (como las antenas de techo de los autos). Ajustá las varillas de tu [Kit Antena Dipolo](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) a aproximadamente **49 centímetros** cada una, colocalas de forma recta y **pará la antena en vertical**. Cuanto más alta la ubiques, más kilómetros a la redonda vas a cubrir.

## Cómo decodificar los datos

Existen múltiples formas de decodificar APRS, pero el camino moderno más rápido en Windows y Linux es usar un software tipo **SDRangel** o **Direwolf**.

*Direwolf* es considerado el estándar de oro. Opera "escuchando" el audio estático de 144.930 MHz (que podés pasarle desde SDR# usando Virtual Audio Cable). Cada vez que suena un chirrido agudo rápido (eso es un paquete AFSK de 1200 baudios), Direwolf lo convierte en texto y lo envía a un programa de mapas, como **PinPoint APRS** o **Xastir**.

Al conectarlo, verás cómo se dibuja en tu mapa local un auto moviéndose por la ruta, un club de radioaficionados transmitiendo un boletín en el centro, y quizás hasta el rastreo de algún globo estratosférico lanzado por una universidad local. ¡Toda una red social de datos operando de manera independiente de internet!
