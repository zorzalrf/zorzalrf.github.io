---
title: "Recepción de Radiosondas del SMN con RTL-SDR: guía completa"
description: "Seguí en tiempo real los globos meteorológicos del Servicio Meteorológico Nacional (SMN) con un RTL-SDR. Instalación de radiosonde_auto_rx, frecuencias de 400-406 MHz y cómo aparecer en el mapa mundial SondeHub."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["tutorial", "radiosondas", "smn", "sondehub", "rtl-sdr", "rs41", "argentina"]
category: "Satelital y Avanzado"
difficulty: "Intermedio"
readingTime: 12
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de projecthorus/radiosonde_auto_rx.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

Todos los días, a las 9 AM y a las 9 PM hora argentina, el **Servicio Meteorológico Nacional (SMN)** lanza globos meteorológicos equipados con pequeños transmisores de radio llamados **radiosondas**. Estos globos ascienden hasta 30.000 metros de altura midiendo temperatura, humedad y presión atmosférica en cada capa, mientras transmiten su posición GPS y telemetría por radio en la banda de **400-406 MHz**.

Con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original), una antena VHF/UHF y el software correcto, podés interceptar esa señal, decodificarla y seguir el vuelo del globo en tiempo real en un mapa. Muchos entusiastas van un paso más allá: **salen a buscar y recuperar la sonda cuando el globo explota**.

## ¿Cómo funciona el sistema?

A medida que el globo asciende:
1. La sonda mide datos atmosféricos (temperatura, presión, humedad relativa)
2. El GPS integrado reporta la posición con precisión de metros
3. Un transmisor de baja potencia (unos 60 mW) emite estos datos continuamente
4. Desde tierra, receptores como el tuyo decodifican la señal y publican los datos

Gracias a que los globos suben a más de 30.000 metros, tienen **línea de visión directa** con un radio enorme. Podés recibir la señal de un globo lanzado en Córdoba estando en Rosario, o un globo de Ezeiza estando en Mar del Plata.

## Radiosondas en Argentina: Datos para comenzar

### Estaciones de lanzamiento del SMN
El SMN lanza globos desde varias estaciones distribuidas en el país:

| Estación | Provincia | Coordenadas aprox. |
|---|---|---|
| Ezeiza | Buenos Aires | 34.8°S, 58.5°W |
| Córdoba | Córdoba | 31.3°S, 64.2°W |
| Mendoza | Mendoza | 32.8°S, 68.8°W |
| Resistencia | Chaco | 27.4°S, 59.0°W |
| Comodoro Rivadavia | Chubut | 45.8°S, 67.5°W |
| Santa Rosa | La Pampa | 36.6°S, 64.3°W |

### Horarios de lanzamiento
- **00:00 UTC (21:00 hs ARG en verano / 21:00 hs ARG en invierno)**
- **12:00 UTC (09:00 hs ARG en verano / 09:00 hs ARG en invierno)**

Estos horarios están sincronizados con la red meteorológica mundial (WMO). Hay días en que se hacen lanzamientos adicionales en situaciones meteorológicas especiales.

### Frecuencias de operación
Las radiosondas transmiten en la **banda UHF meteorológica** entre **400 y 406 MHz**. El modelo más usado actualmente en Argentina es la **Vaisala RS41**, que típicamente usa frecuencias entre 402 y 406 MHz.

Dado que la frecuencia exacta varía entre lanzamientos, el software `radiosonde_auto_rx` escanea toda la banda automáticamente para encontrar la señal.

## Hardware necesario

- **[Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original):** El TCXO de 1 PPM es importante acá. Las radiosondas usan modulación GFSK con canales estrechos, y la precisión de frecuencia importa para una demodulación correcta.
- **Antena para 400 MHz:** Una antena dipolo con brazos de **37 cm** (resonancia a 403 MHz) es suficiente. El Kit Dipolo ajustado a esa longitud funciona bien. Para mayor alcance, una antena vertical colineal de 400 MHz instalada en el techo da resultados notablemente mejores.
- **Computadora:** Una **Raspberry Pi 3 o superior** es ideal para dejar el sistema corriendo 24/7. También funciona en cualquier PC Linux o en Windows con WSL2.

## SondeHub: El FlightRadar24 de las Radiosondas

Antes de configurar tu receptor, vale la pena conocer **[SondeHub](https://sondehub.org/)**: el mapa global en tiempo real de todas las radiosondas en vuelo. Cuando tu estación esté activa, tu nombre aparecerá en el mapa y verás exactamente qué globos estás recibiendo.

SondeHub también tiene una función de **predicción de aterrizaje**: usa los datos de posición y viento para estimar dónde va a caer la sonda cuando el globo explote a gran altura. ¡Muchos aficionados argentinos usan esto para salir a recuperar las sondas, que a veces tienen GPS incorporado y otros componentes reutilizables!

## Instalación con Docker (Raspberry Pi)

La forma más recomendada de instalar `radiosonde_auto_rx` en una Raspberry Pi es usando Docker:

### Paso 1: Clonar el repositorio

```bash
git clone https://github.com/projecthorus/radiosonde_auto_rx.git
cd radiosonde_auto_rx/auto_rx/
cp station.cfg.example station.cfg
```

### Paso 2: Editar la configuración

Abrí el archivo de configuración con `nano station.cfg` y configurá los siguientes campos obligatorios:

```ini
[station]
# Tu nombre o indicativo de radioaficionado (aparecerá en SondeHub)
callsign = LU1ABC-SONDEHUB

# Tus coordenadas exactas (podés obtenerlas con Google Maps)
station_lat = -34.60
station_lon = -58.45
station_alt = 15  # Altura sobre el nivel del mar en metros

[sdr]
sdr_quantity = 1  # Número de RTL-SDRs conectados
```

### Paso 3: Iniciar los contenedores

```bash
docker-compose up -d
```

Esto descarga las imágenes necesarias y arranca el sistema en segundo plano.

### Paso 4: Verificar el funcionamiento

Abrí el navegador y andá a `http://IP_DE_TU_PI:5000` para ver la interfaz web local de `radiosonde_auto_rx`. Vas a ver:
- El espectro de radio en la banda 400-406 MHz en tiempo real
- El log de eventos (qué frecuencias está escaneando)
- El mapa local con la trayectoria de las sondas que recibís

## ¿Cuándo aparecerá mi primera sonda?

Después de configurar todo, la clave es la **paciencia y el timing**. Aproximadamente 30 minutos antes del horario de lanzamiento (9 AM o 9 PM hora argentina), tu sistema debería empezar a detectar la señal de la sonda más cercana subiendo en el espectro.

El sonido característico de una RS41 es un tono de audio digital que cambia lentamente de frecuencia — muy diferente al ACARS o ADS-B. Si tenés auriculares conectados a la Pi, podés escucharlo.

---

## Preguntas Frecuentes

**¿Necesito una licencia de radioaficionado para hacer esto?**
No. La radioescucha pasiva de señales de telemetría meteorológica es completamente legal en Argentina y no requiere ninguna habilitación.

**¿Puedo recuperar una radiosonda caída?**
Sí, y es una actividad popular entre los entusiastas. Las sondas modernas como la RS41 son recuperables y hay comunidades online que documentan recuperaciones. El punto de aterrizaje predicho en SondeHub suele ser bastante preciso (error de 1-5 km con buen viento).

**¿Puedo recibir globos de países vecinos?**
Sí, especialmente desde Uruguay, Chile y Brasil. Sus frecuencias están en la misma banda (400-406 MHz) y si tenés buena antena y altura, a veces podés recibir globos a más de 400 km de distancia cuando están en la parte alta de su trayectoria.

**¿Qué pasa si mi internet se cae? ¿Sigo recibiendo?**
El sistema `radiosonde_auto_rx` sigue funcionando localmente sin internet. Los datos se guardan y se suben a SondeHub automáticamente cuando vuelve la conexión.

---

### 🛍️ Hardware recomendado para esta guía
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Kit Antena Dipolo Multipropósito para SDR](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)** — Ajustá los brazos a 37 cm para 400 MHz
