---
title: "Recepción de Radiosondas del SMN"
description: "Aprendé a rastrear y decodificar automáticamente globos meteorológicos del Servicio Meteorológico Nacional usando radiosonde_auto_rx y SondeHub."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "radiosondas", "smn", "sondehub", "rtl-sdr", "rs41"]
category: "Decodificación"
difficulty: "Intermedio"
readingTime: 10
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de projecthorus/radiosonde_auto_rx.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

¿Alguna vez miraste al cielo y te preguntaste cómo se obtienen los datos para el pronóstico del clima? Todos los días, el **Servicio Meteorológico Nacional (SMN)** y otros organismos de la región lanzan globos meteorológicos equipados con pequeños transmisores de radio llamados **radiosondas**. 

Estos dispositivos ascienden hasta 30 kilómetros de altura midiendo temperatura, humedad y presión, mientras transmiten su posición GPS y telemetría por radio. Con un simple RTL-SDR, ¡podés interceptar esa señal, decodificarla y seguir el vuelo en tiempo real!

## ¿Qué vas a necesitar?

*   **Receptor:** Un RTL-SDR V3.
*   **Antena:** Una antena sintonizada cerca de los **403 MHz** (la banda meteorológica). Un dipolo en V cortado a medida o una antena colineal básica funcionarán perfecto.
*   **Computadora:** Una Raspberry Pi o cualquier PC con Linux (ideal si querés dejarla encendida 24/7).

## Las Radiosondas en Argentina (SMN)

En Argentina, el SMN realiza lanzamientos desde varias estaciones distribuidas por el país (como Ezeiza, Córdoba, Mendoza, Comodoro Rivadavia, entre otras). 

*   **Horarios:** Por lo general, los lanzamientos globales sincronizados se realizan cerca de las **12:00 UTC** (09:00 AM hora local) y a veces a las **00:00 UTC** (09:00 PM hora local).
*   **Modelo:** El modelo más utilizado actualmente es la **Vaisala RS41**, una sonda moderna y muy fácil de decodificar.
*   **Frecuencias:** Transmiten en la banda UHF, estrictamente entre **400 MHz y 406 MHz**.

Dado que los globos suben a más de 30.000 metros de altura, tienen línea de visión directa. ¡Podés recibir la señal de una radiosonda que está a más de 300 o 400 kilómetros de distancia de tu casa!

## SondeHub: El "FlightRadar" de los Globos

Así como alimentás datos de aviones a Airframes o FlightAware, la comunidad de radioaficionados usa [SondeHub](https://sondehub.org/). Es un mapa global en tiempo real donde podés ver todas las radiosondas en vuelo. 

Tu objetivo al configurar tu estación será recibir los datos del SMN y enviarlos automáticamente a SondeHub para que todos puedan ver el trayecto y predecir dónde va a caer la sonda una vez que el globo explote. (¡Sí, mucha gente las sale a cazar o recuperar al campo!).

## La Magia de `radiosonde_auto_rx`

El proyecto de código abierto [radiosonde_auto_rx](https://github.com/projecthorus/radiosonde_auto_rx) (creado por el Project Horus) automatiza absolutamente todo el proceso. Ya no necesitás sintonizar manualmente la frecuencia ni usar decodificadores de audio complejos.

**¿Qué hace este software?**
1. **Escanea:** Barre automáticamente la banda de 400-406 MHz buscando picos de señal característicos.
2. **Identifica:** Reconoce si es una sonda RS41, RS92, M10, etc.
3. **Decodifica:** Extrae la telemetría y el GPS en tiempo real.
4. **Sube:** Envía los datos directamente a SondeHub a tu nombre.

### Instalación Rápida con Docker

La forma más limpia y recomendada de instalar `radiosonde_auto_rx` en tu Raspberry Pi o servidor Linux es usando Docker. Asegurate de tener Docker y Docker Compose instalados, y luego ejecutá:

```bash
# Descargá el repositorio oficial
git clone https://github.com/projecthorus/radiosonde_auto_rx.git
cd radiosonde_auto_rx/auto_rx/

# Copiá el archivo de configuración base
cp station.cfg.example station.cfg
```

Ahora tenés que editar el archivo `station.cfg` (podés usar `nano station.cfg`). Es **muy importante** que completes estos datos:

*   `[station]` -> `callsign = TU_NOMBRE_O_LICENCIA` (El nombre que aparecerá en SondeHub).
*   `[station]` -> `station_lat` y `station_lon` (Tus coordenadas para que el sistema calcule distancias).
*   `[sdr]` -> `sdr_quantity = 1` (Si usás un solo [RTL-SDR](/catalogo/?type=SDR)).

Una vez configurado, simplemente levantá el contenedor de Docker:

```bash
# Para arquitecturas x86 (PC) o ARM (Raspberry Pi) modernas
docker-compose up -d
```

### Monitoreo Local

Una vez que el sistema esté corriendo, `radiosonde_auto_rx` levantará una interfaz web local. Podés acceder abriendo el navegador en tu red y yendo a:
`http://IP_DE_TU_RASPBERRY:5000`

Desde ahí podrás ver un mapa en vivo (solo para tu red local), el espectro de radio, y un registro (log) que te indicará qué frecuencias está escaneando actualmente.

## ¡A Cazar!

Con tu estación lista, solo tenés que esperar a la mañana siguiente cerca de las 09:00 AM. Verás cómo tu SDR detecta automáticamente la señal, se ancla a la frecuencia, y en cuestión de segundos tu usuario comenzará a brillar en el mapa mundial de SondeHub colaborando con la comunidad meteorológica. 

¡Animate a configurar tu estación y sumate a la red de rastreo de Argentina!
