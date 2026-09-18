---
title: "SDR en tu Celular: Convirtiendo tu Android en un Escáner Portátil"
description: "Usá tu SDR desde el celular sin adaptadores OTG. Guía completa para instalar el driver y SDR Touch en Android, y qué antena llevar en la mochila para escuchar aviones, radioaficionados y satélites en cualquier lugar."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["android", "sdr-touch", "usb-c", "portatil", "app", "celular"]
category: "Software y Servidores"
difficulty: "Principiante"
readingTime: 6
---

Una de las grandes ventajas de la Radio Definida por Software es que no estás atado a un escritorio. La mejor recepción suele estar en el campo, en la cima de un cerro o en la costa —lejos del ruido eléctrico de la ciudad— donde ninguna notebook llega cómodamente.

La solución: **convertir tu celular o tablet Android en la pantalla y el cerebro de tu SDR**. Con el hardware correcto, tenés una estación de radioescucha completa que entra en el bolsillo.

## El Problema Histórico: La Pesadilla del Adaptador OTG

Durante años, conectar un SDR al celular implicaba un **cable adaptador OTG** (On-The-Go), que convertía el conector USB-A del SDR al puerto de carga del teléfono.

El resultado era un bloque rígido y pesado colgando del teléfono. Con el más mínimo movimiento, el adaptador se movía, el sistema operativo desconectaba el SDR y el programa se cerraba. Era frustrante hasta para el más paciente.

## La Solución Definitiva: RTL-SDR Blog V3 USB-C

El [Receptor RTL-SDR Blog V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original) resuelve esto de raíz. Tiene **exactamente la misma electrónica** que el V3 clásico (mismo chip, mismo TCXO de 1 PPM, mismo Bias-Tee), pero la carcasa termina en un **conector USB-C hembra nativo**.

Con este equipo usás un cable USB-C a USB-C normal (el mismo de carga del celular), directo desde el SDR al teléfono. El cable es flexible, no hace palanca y no se desconecta al mover la mano.

> **Nota sobre iOS:** El sistema operativo de iPhone e iPad es muy restrictivo con los dispositivos USB externos. Por el momento, el uso portátil de SDR está casi exclusivamente en el ecosistema Android. En iOS no existe una solución equivalente a SDR Touch.

## Configuración en Android: Paso a Paso

### Paso 1: Instalar el driver (SDR Driver)

A diferencia de Windows (donde usás Zadig), en Android el proceso es más simple:

1. Abrí la **Play Store** y buscá **"SDR Driver"** (desarrollador: Martin Marinov).
2. Instalalo. Esta app corre en segundo plano y actúa como intermediario entre el hardware USB y las apps de SDR.
3. No hace falta configurar nada. Solo tenerla instalada es suficiente.

### Paso 2: Instalar SDR Touch

En la Play Store, buscá e instalá **"SDR Touch"**. Es la aplicación de radioescucha más completa para Android:
- Waterfall en tiempo real (visualización del espectro en colores)
- Modos de demodulación: AM, FM, NFM, USB, LSB, DSB, RAW
- Squelch configurable
- Grabación de audio
- Interfaz táctil optimizada para pantallas de celular

SDR Touch es de pago (precio módico), pero existe una versión de prueba gratuita de 10 minutos.

### Paso 3: Conectar y Escuchar

1. Enchufá el [RTL-SDR USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original) al celular con un cable USB-C a USB-C.
2. Android mostrará una ventana emergente: *"¿Permitir que SDR Driver acceda al dispositivo USB?"* → tocá **Aceptar** y marcá "Recordar siempre".
3. Abrí **SDR Touch** y tocá el botón de encendido (▶).
4. La pantalla del waterfall aparecerá con el espectro de radio en tiempo real.

### Paso 4: Sintonizar tu primera señal

Para la primera prueba, sintonizá la **banda FM comercial** (88-108 MHz) en modo **WFM** (Wide FM). Deberías escuchar emisoras de radio claramente. Una vez confirmado que funciona, explorá:

- **118-136 MHz en AM** → Torre de control y pilotos de tu aeropuerto local
- **144.930 MHz en NFM** → Red APRS de radioaficionados (paquetes de datos)
- **162 MHz en NFM** → AIS de barcos (si vivís cerca del agua)

## La Antena Portátil: Qué llevar en la Mochila

Para salir a explorar no podés llevar las antenas grandes. El compañero perfecto es el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil):

- Las varillas telescópicas se achican a pocos centímetros y entran en cualquier bolsillo.
- El pequeño trípode flexible se dobla completamente.
- La ventosa te permite pegarlo a la ventana del auto mientras manejás.
- Con las varillas extendidas a la longitud correcta, sintonizás cualquier banda.

**Longitudes de referencia para la mochila:**
| Frecuencia | Longitud de cada brazo |
|---|---|
| Aviación AM (125 MHz) | 57 cm |
| APRS/VHF (145 MHz) | 51 cm |
| AIS marítimo (162 MHz) | 46 cm |
| NOAA satélites (137 MHz) | 53 cm |
| ADS-B aviones (1090 MHz) | 6.5 cm |

---

## Preguntas Frecuentes

**¿Funciona con cualquier celular Android?**
Necesitás Android 5.0 o superior con soporte para USB-Host (la mayoría de los celulares modernos lo tienen). Algunos celulares Android de gama muy baja limitan la corriente USB-Host, lo que puede causar que el SDR no tenga suficiente energía. Si el SDR no es reconocido, probá conectar el celular a un cargador al mismo tiempo.

**¿Puedo usar auriculares mientras uso el SDR?**
Si tu celular tiene jack de 3.5mm y el puerto USB-C está ocupado por el SDR, podés usar auriculares bluetooth. Si no tenés jack y querés audio por cable, necesitarías un hub USB-C con DAC de audio integrado.

**¿Consume mucha batería?**
El RTL-SDR consume aproximadamente 300-400 mA desde el USB. Sumado al procesamiento de SDR Touch, la batería dura entre 2 y 4 horas según el celular. Si vas a una excursión larga, llevá una batería portátil (power bank).

---

### 🛍️ ¿Listo para la estación portátil?
- **[Receptor RTL-SDR Blog V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original)** — Conexión directa a cualquier celular moderno
- **[Kit Antena Dipolo Multipropósito para SDR](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)** — La antena que entra en la mochila
