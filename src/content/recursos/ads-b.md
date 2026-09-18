---
title: "Cómo montar tu primera estación ADS-B en Argentina"
description: "Guía completa para armar tu propio radar ADS-B en Argentina con un RTL-SDR y Raspberry Pi. Veé aviones en tiempo real desde tu casa usando software gratuito y contribuí a redes como FlightAware."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["proyectos", "ads-b", "aviacion", "sdr", "radar", "argentina", "raspberry-pi"]
category: "Iniciación"
difficulty: "Principiante"
readingTime: 7
featured: true
---

El **ADS-B** (Automatic Dependent Surveillance-Broadcast) es el sistema que usan los aviones modernos para transmitir continuamente su posición GPS, altitud, velocidad e identificación a **1090 MHz**. A diferencia del radar clásico, la aeronave "anuncia" ella sola dónde está, sin necesidad de ser interrogada.

Con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y una Raspberry Pi podés armar tu propio receptor ADS-B permanente que muestre todos los aviones sobre Argentina en un mapa local, y además compartilos con redes globales como FlightAware o Flightradar24 a cambio de una cuenta Premium gratuita.

## 1. El Hardware que necesitás

### Receptor SDR
El [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) es el receptor ideal para ADS-B. Su TCXO de 1 PPM garantiza que se mantenga en los 1090 MHz exactos sin "derivar" de frecuencia aunque el equipo se caliente luego de horas funcionando.

### Antena para 1090 MHz
La antena es el factor más crítico para el alcance de tu estación. Tenés tres opciones:

1. **Antena dipolo del kit** (opción inicial): Usá el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) ajustando los brazos telescópicos pequeños a **6.5 cm** cada uno. Funciona, aunque el alcance es limitado (30-60 km).
2. **Antena comercial para ADS-B** (opción recomendada): Antenas de fibra de vidrio omnidireccionales sintonizadas a 1090 MHz dan alcances de 150-300+ km.
3. **[Kit ADS-B completo](https://zorzalrf.empretienda.com.ar/antenas/estacion-ads-b-zorzal-rf-antena-cable-filtro)** (opción óptima): Incluye antena + filtro SAW 1090 MHz + cable KMR de baja pérdida. La diferencia en alcance vs una antena genérica es enorme.

### Filtro SAW 1090 MHz (muy recomendado en Argentina)
Las torres de telefonía 4G/LTE que abundan en las ciudades argentinas transmiten en bandas cercanas a los 1090 MHz y pueden sobrecargar ("saturar") el chip del RTL-SDR, haciendo que deje de ver aviones aunque la antena esté perfecta. Un filtro SAW de paso de banda centrado en 1090 MHz elimina este problema completamente.

### Computadora
Lo ideal es una **Raspberry Pi 3B+ o superior** para dejar tu estación prendida las 24 horas sin preocuparte por el consumo eléctrico. Si solo querés explorar, funciona perfectamente en tu PC Windows o Linux.

## 2. La Ubicación de la Antena: El Factor Decisivo

Los aviones transmiten ADS-B en línea de visión directa. No rebota en la ionosfera ni traspasa colinas o edificios. Esto significa que **cuanto más arriba esté tu antena, más aviones vas a ver**.

Reglas de instalación:
- **Techo o terrazas:** El lugar ideal. Un solo metro de altura extra puede agregar decenas de kilómetros de alcance.
- **Cable corto y de calidad:** Cada metro de cable RG-58 barato te roba ~0.5 dB a 1090 MHz. Usá KMR-240 o KMR-400 para tiradas largas.
- **Orientación:** Una antena omnidireccional vertical, sin nada que la tape en el horizonte. No la pongas al lado de estructuras metálicas grandes.

Con una antena en el techo de Buenos Aires, es normal ver a unos 400 kilómetros de distancia, en condiciones normales.

## 3. Instalando el Software con ADSB.im (Raspberry Pi)

La forma más moderna, simple y potente de armar tu estación es usando **[ADSB.im](https://adsb.im/)**, una imagen de sistema operativo que trae todo preconfigurado y se administra desde una interfaz web, sin necesidad de abrir una terminal.

### Proceso de instalación paso a paso

1. **Descargá la imagen:** Ingresá a [adsb.im/download](https://adsb.im/download) y elegí la imagen para tu hardware (Raspberry Pi 3, 4, 5 o placa x86).
2. **Grabá en la MicroSD:** Usá **Raspberry Pi Imager** o **BalenaEtcher** para escribir la imagen en una tarjeta MicroSD de al menos 8 GB.
3. **Armá el hardware:** Insertá la MicroSD en la Raspberry Pi, conectá el RTL-SDR (con su antena) y el cable de red. Encendé la placa.
4. **Abrí el panel web:** Desde cualquier dispositivo en tu red, ingresá a `http://adsb.local` en el navegador.
5. **Configuración inicial:** En la pestaña "Location/Config", ingresá tus coordenadas (latitud y longitud) y el nombre de tu estación. Esto es crucial para que el software calcule bien la altitud y distancia de los aviones.

### ¿Por qué ADSB.im y no otras opciones?

A diferencia de imágenes más antiguas como **FlightAware PiAware** (que solo reporta a FlightAware) o **FR24 Feed** (que solo reporta a Flightradar24), ADSB.im te permite alimentar **todas las redes simultáneamente** desde una sola interfaz web. Con un clic podés activar FlightAware, Flightradar24, ADSBExchange, RadarBox, OpenSky y muchas más.

## 4. Visualizando los Aviones

Desde el panel web de ADSB.im, hacé clic en **tar1090** para ver tu mapa en vivo. Verás:

- Triángulos de colores representando cada aeronave
- Al hacer clic: matrícula, altitud, velocidad, ruta y aerolínea
- El rastro de la trayectoria de vuelo de los últimos minutos

También podés ver estadísticas de tu estación: mensajes por segundo, aviones únicos captados por día y el registro histórico.

## 5. Cuenta Premium de FlightAware y Flightradar24 GRATIS

Este es el bonus más tentador para muchos usuarios:

**FlightAware:** Al registrarte como feeder y verificar que tu estación esté activa, obtenés una cuenta **Enterprise de por vida** ($90/mes de valor comercial). Te da acceso a historial extendido, alertas de vuelo y sin límites en la API.

**Flightradar24:** Alimentar con datos activos te otorga una cuenta **Business** gratuita. El proceso es igual de sencillo y también se activa desde el panel de ADSB.im.

---

## Preguntas Frecuentes

**¿Funciona en Windows sin Raspberry Pi?**
Sí. Podés usar **Dump1090** o **readsb** directamente en Windows o Linux. Pero para una estación permanente y eficiente en energía, la Raspberry Pi es la opción ideal.

**¿Cuántos aviones voy a ver?**
Depende de tu ubicación y la altura de tu antena. En Buenos Aires con una antena en el techo, es común ver entre 30 y 50 aviones simultáneos en hora pico. En provincias más alejadas puede ser menos, pero igual vas a captar vuelos regionales y de cabotaje.

**¿Los aviones militares aparecen?**
La mayoría de las aeronaves militares tienen el ADS-B desactivado o limitado por razones de seguridad. Sí aparecen algunos aviones de entrenamiento y transporte militar no clasificados.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
En Zorzal RF tenemos los componentes exactos para que armes tu estación ADS-B sin problemas de interferencias:
- **[Kit ADS-B 1090 MHz Profesional: Antena + Filtro + Cable](https://zorzalrf.empretienda.com.ar/antenas/estacion-ads-b-zorzal-rf-antena-cable-filtro)**
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**