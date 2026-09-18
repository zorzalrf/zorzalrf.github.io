---
title: "Rastreando autos y globos con APRS (Red de Radioaficionados)"
description: "Decodificá paquetes APRS en 144.930 MHz con tu RTL-SDR y veé autos, globos estratosféricos y estaciones de radioaficionados moverse en un mapa en vivo. Guía para la red APRS de Argentina."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["aprs", "radioaficionados", "rastreo", "vhf", "sdr", "argentina", "144mhz"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 7
---

El **APRS** (Automatic Packet Reporting System) es una red digital de radioaficionados que funciona como un Twitter de baja tecnología montado sobre radio VHF. Cualquier estación (fija, móvil o en globo) puede transmitir su posición GPS, mensajes de texto cortos, reportes meteorológicos o telemetría, y toda esta información se coloca en un mapa en tiempo real visible a nivel mundial.

Usando un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) como receptor, podés decodificar estos paquetes de datos y ver en tu pantalla exactamente qué radioaficionados, vehículos y globos estratosféricos están activos en tu región de Argentina ahora mismo.

## La Frecuencia Universal de APRS en Argentina

APRS opera en una única frecuencia estándar en toda América del Sur:

**144.930 MHz (modo FM de banda estrecha / NFM)**

Esta frecuencia está coordinada para toda la región y es la que usás tanto para escuchar como para transmitir (si tenés licencia de radioaficionado). En algunas regiones de Argentina también hay actividad en 144.390 MHz (el canal americano estándar), pero 144.930 MHz es el principal en Sudamérica.

## Cómo Funciona el Sistema

Las estaciones APRS transmiten **paquetes AX.25** en 1200 baudios usando modulación **AFSK** (Audio Frequency Shift Keying). El sonido es inconfundible: una ráfaga de "chirping" de aproximadamente 1 segundo de duración.

El sistema tiene una red de **digi-repetidores** (iGates) distribuidos en las ciudades. Cuando tu estación o la de otro radioaficionado transmite un paquete, los iGates lo retransmiten y lo suben a internet, publicándolo en **aprs.fi** (el mapa global de APRS). Desde ahí podés ver la posición de cualquier estación APRS del mundo.

## Software para Decodificar APRS

### Paso 1: SDR# o SDR++ como fuente de audio
1. Sintonizá `144.930 MHz` en modo **NFM** (FM de banda estrecha, ancho de banda de 12-15 kHz).
2. Ajustá la ganancia para que el piso de ruido sea bajo pero los paquetes APRS sean claramente audibles.

### Paso 2: Cable de Audio Virtual
Como el decodificador APRS es un programa separado del SDR, necesitás "conectarlos" virtualmente:
- **Windows:** Descargá **VB-Cable** (gratuito) o **Virtual Audio Cable**. Configurá SDR# para enviar el audio a este dispositivo virtual.
- **Linux:** Usá PulseAudio o pipewire para crear un sink virtual.

### Paso 3: Direwolf — El decodificador de referencia
**[Direwolf](https://github.com/wb2osz/direwolf)** es el software más robusto y preciso para decodificar paquetes APRS desde un SDR. Es gratuito, multiplataforma (Windows, Linux, Raspberry Pi) y fue desarrollado por un ingeniero de la NASA jubilado.

Configuración básica en Direwolf:
```
# direwolf.conf
ADEVICE VB-Cable       # Nombre del dispositivo de audio virtual
CHANNEL 0
MYCALL NOCALL          # Si sos oyente pasivo, dejá esto
MODEM 1200
AGWPORT 8000           # Puerto para conectar aplicaciones de mapas
KISSPORT 8001
```

### Paso 4: PinPoint APRS o Xastir para el Mapa
Conectá Direwolf a un programa de mapas:
- **PinPoint APRS (Windows):** La opción más visual y fácil. Se conecta por AGWPE al puerto 8000 de Direwolf.
- **Xastir (Linux):** El cliente APRS más completo del ecosistema de código abierto.
- **APRSISCE/32 (Windows):** Liviano y con mapas integrados.

## ¿Qué vas a ver en el mapa de Argentina?

Cuando tengas todo configurado, el mapa empezará a llenarse de estaciones:

- 🚗 **Vehículos móviles:** Radioaficionados con GPS en su auto. Podés ver la trayectoria de un viaje completo.
- 🌦️ **Estaciones meteorológicas personales:** Reportan temperatura, lluvia y viento desde sus casas.
- 🏠 **Estaciones fijas (repetidores e iGates):** Los "nodos" de la red que retransmiten los paquetes.
- 🎈 **Globos estratosféricos:** Lanzamientos experimentales de universidades y clubes de radioaficionados. Los ves subir hasta 30 km de altura y podés predecir dónde van a aterrizar.
- 🚢 **Embarcaciones:** Algunos buques y veleros también usan APRS.

## APRS.fi: El Mapa Online de APRS

Sin necesidad de instalar nada, podés ver la red APRS en tiempo real en **[aprs.fi](https://aprs.fi)**. Buscá tu ciudad y explorá las estaciones activas. Si configurás tu receptor para actuar como un **iGate** (que sube los datos de tus paquetes locales a internet), podés aparecer en este mapa como contribuidor de la red.

---

## Preguntas Frecuentes

**¿Necesito licencia de radioaficionado para hacer esto?**
Para **escuchar** APRS: No, es solo radioescucha pasiva. Para **transmitir** paquetes APRS o actuar como iGate que retransmite paquetes: Sí, necesitás la licencia de radioaficionado de ENACOM Argentina.

**¿Puedo ver el APRS de todo el mundo sin antena?**
Sí, directamente desde **[aprs.fi](https://aprs.fi)**. Pero escuchar localmente con tu SDR te permite ver estaciones que no tienen iGate cercano y que por lo tanto no aparecen en el mapa online.

**¿Hay mucha actividad APRS en Argentina?**
Depende de la región. En Buenos Aires, Córdoba y Rosario la actividad es constante. En provincias más remotas puede ser escasa. Pero durante eventos como rally de autos, maratones o lanzamientos de globos, la actividad se dispara.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Rastrear APRS no requiere más que un buen SDR y una antena VHF:
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Kit Antena Dipolo Multipropósito para SDR](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)**
