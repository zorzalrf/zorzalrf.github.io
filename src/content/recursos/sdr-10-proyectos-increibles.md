---
title: "¿Para qué sirve un RTL-SDR? 10 proyectos increíbles para empezar"
description: "Descubrí qué podés hacer con un SDR desde el primer día: escuchar pilotos en la torre de control, armar tu propio radar de aviones, recibir imágenes satelitales y mucho más. Proyectos concretos para Argentina."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["sdr", "rtl-sdr", "principiantes", "proyectos", "ideas", "argentina"]
category: "Iniciación"
difficulty: "Principiante"
readingTime: 7
---

Un pequeño dongle USB del tamaño de un encendedor, conectado a tu computadora, te da acceso a todo el espectro de radio: desde las bandas AM hasta los satélites a 1.7 GHz. **La pregunta no es qué podés hacer con un SDR, sino por dónde empezar.**

Acá te mostramos 10 proyectos concretos que podés hacer en Argentina con un [Kit RTL-SDR Blog V3 + Antena Dipolo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo) (el equipo más completo para empezar).

---

## 1. 🎙️ Escuchar a los Pilotos en la Torre de Control

**Dificultad:** ★☆☆☆☆ | **Frecuencia:** 118-136 MHz | **Modo:** AM

Sintonizá la banda aérea VHF en modo AM y escuchá las conversaciones sin encriptación entre pilotos y controladores del aeropuerto más cercano. En Buenos Aires: Torre de Ezeiza en **118.100 MHz**, Torre de Aeroparque en **118.900 MHz**.

Es el primer experimento que recomendamos a todos. Resultados en menos de 5 minutos.

[Ver guía completa →](/recursos/sdr-escuchar-torre-control-aviacion)

---

## 2. ✈️ Armar tu Propio Radar de Aviones (ADS-B)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 1090 MHz | **Software:** ADSB.im

Los aviones modernos transmiten su posición GPS, altitud y velocidad en 1090 MHz. Con una Raspberry Pi y tu SDR, construís una estación permanente que muestra todos los aviones sobre Argentina en tiempo real. Bonus: FlightAware y Flightradar24 te dan cuentas premium gratis a cambio de compartir tus datos.

[Ver guía completa →](/recursos/ads-b)

---

## 3. 🌦️ Descargar Imágenes Satelitales del Clima en Vivo (NOAA)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 137 MHz | **Software:** NOAA-APT

Los satélites NOAA 18 y 19 pasan sobre Argentina varias veces al día transmitiendo fotografías del planeta en 137 MHz. Con la antena dipolo configurada en V-Dipole (brazos a 53 cm), podés capturar estas imágenes y decodificarlas con software gratuito. Cada imagen es única y tomada literalmente minutos antes.

[Ver guía completa →](/recursos/sdr-satelites-noaa-clima)

---

## 4. 🚢 Rastrear Barcos y Buques (AIS)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 162 MHz | **Software:** AIS-catcher + OpenCPN

Igual que los aviones, los barcos comerciales transmiten su posición en la banda VHF marítima. Si vivís en Buenos Aires, Mar del Plata, Rosario o cualquier ciudad costera, vas a ver el tráfico del Río de la Plata, la costa atlántica o el corredor granelero del Paraná en tu mapa.

[Ver guía completa →](/recursos/sdr-ais-radar-maritimo-tutorial)

---

## 5. 📻 Escuchar Radioaficionados de Todo el Mundo (HF)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 7-28 MHz | **Función:** Muestreo Directo

El RTL-SDR Blog V3 original tiene una función llamada "Muestreo Directo" que lo habilita para recibir Onda Corta (HF). Con un trozo de 15 metros de cable de cobre como antena, podés escuchar radioaficionados de Japón, España y EE.UU. hablando en la banda de 20 metros (14 MHz) cualquier tarde.

[Ver guía completa →](/recursos/onda-corta-hf)

---

## 6. 📡 Decodificar Mensajes de Texto de Aviones (ACARS / VDL2)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 131.725 MHz | **Software:** acarsdec

Los aviones no solo hablan por voz: también envían mensajes de texto con telemetría, reportes de posición y datos meteorológicos. En 131.725 MHz podés decodificar estos mensajes en tiempo real con `acarsdec`. Podés integrar tus datos a la red global de Airframes.io.

[Ver guía completa →](/recursos/acars)

---

## 7. 🌌 Escuchar la Estación Espacial Internacional (ISS)

**Dificultad:** ★★☆☆☆ | **Frecuencia:** 145.800 MHz | **Software:** SDR# + MMSSTV

La ISS tiene equipos de radioaficionado a bordo y pasa sobre Argentina varias veces al día. Podés escuchar a los astronautas durante eventos especiales, o decodificar las imágenes SSTV que transmiten desde el espacio durante eventos periódicos del programa ARISS.

[Ver guía completa →](/recursos/sdr-escuchar-iss-estacion-espacial)

---

## 8. 🌡️ Escanear Sensores IoT, Termómetros y Controles Remotos (433 MHz)

**Dificultad:** ★☆☆☆☆ | **Frecuencia:** 433.92 MHz | **Software:** rtl_433

La banda ISM de 433 MHz está llena de dispositivos del vecindario transmitiendo sin encriptación: estaciones meteorológicas, sensores de temperatura de heladeras inteligentes, válvulas TPMS de autos y alarmas. Con el comando `rtl_433` empezás a ver los datos en segundos.

[Ver guía completa →](/recursos/sdr-433mhz-iot-sensores)

---

## 9. 🎈 Rastrear Globos Meteorológicos del SMN (Radiosondas)

**Dificultad:** ★★★☆☆ | **Frecuencia:** 400-406 MHz | **Software:** radiosonde_auto_rx

Todos los días a las 9 AM y 9 PM, el Servicio Meteorológico Nacional lanza globos desde varias ciudades de Argentina. Con tu SDR y una Raspberry Pi podés seguirlos en tiempo real en SondeHub y hasta predecir dónde van a caer para recuperarlos.

[Ver guía completa →](/recursos/recepcion-radiosondas-smn)

---

## 10. 🔭 Detectar la Emisión de Hidrógeno Galáctico (1420 MHz)

**Dificultad:** ★★★★★ | **Frecuencia:** 1420.405 MHz | **Software:** Virgo / GNU Radio

El proyecto más avanzado de la lista. Con un LNA de baja figura de ruido y una antena parabólica apuntando al cielo, podés detectar la Línea del Hidrógeno de la Vía Láctea. Estás literalmente "viendo" los brazos espirales de nuestra galaxia con equipos de menos de 200 dólares.

[Ver guía completa →](/recursos/sdr-radioastronomia-amateur-lna)

---

## ¿Por Dónde Empezar?

Todos estos proyectos son posibles con el mismo equipo base. El orden que recomendamos:

**Semana 1:** Proyectos 1, 6 y 8 (solo SDR + antena, software gratuito)
**Semana 2:** Proyectos 2, 3 y 4 (configuración adicional de software)
**Semana 3 en adelante:** Proyectos 5, 7, 9 y 10 (requieren más paciencia o hardware adicional)

### 🛍️ El kit para empezar con los 10 proyectos
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)** — Todo lo necesario para los primeros 8 proyectos
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)** — Para proyectos 9 y 10
