---
title: "Cómo rastrear barcos con SDR: recepción AIS en Argentina"
description: "Guía paso a paso para rastrear buques y embarcaciones en tiempo real con un RTL-SDR. Frecuencias, antena a 162 MHz, AIS-catcher y OpenCPN para el Río de la Plata y costas argentinas."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["sdr", "ais", "barcos", "vhf", "tutorial", "argentina", "maritimo", "rio-de-la-plata"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 7
---

Así como los aviones utilizan [ADS-B](/recursos/ads-b) para evitar colisiones aéreas, la industria marítima tiene su propio sistema de identificación automática: el **AIS** (Automatic Identification System). Los buques de pasajeros, cargueros y grandes pesqueros transmiten continuamente su posición GPS, rumbo, velocidad, nombre e indicativo en dos canales de radio VHF.

Si vivís cerca del Río de la Plata, la costa atlántica, un puerto fluvial o cualquier río navegable de gran calado en Argentina, podés construir tu propio radar marítimo con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y software gratuito.

## Frecuencias de Operación del AIS

El AIS opera simultáneamente en **dos canales VHF** dedicados:

| Canal | Frecuencia | Nombre |
|---|---|---|
| Canal 87B | **161.975 MHz** | AIS 1 |
| Canal 88B | **162.025 MHz** | AIS 2 |

El software moderno (como AIS-catcher) puede recibir ambos canales en simultáneo con un único SDR, capturando el doble de información.

## Hardware Necesario

### Antena: El Factor Más Importante
Las señales AIS viajan en **polarización vertical** (antenas verticales o verticalmente polarizadas). La longitud de onda a 162 MHz requiere brazos de antena de **46 centímetros** para la resonancia óptima.

Con el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil):
1. Enroscá las dos varillas largas en la base.
2. Extendé cada una hasta **46 cm**.
3. Ubicá el dipolo completamente **vertical** (una varilla apuntando al cielo, la otra al suelo).
4. Instalala lo más alto posible, con vista al horizonte acuático.

> **Consejo clave:** Los barcos navegan al nivel del mar. La curvatura terrestre limita el alcance a unas 20-40 millas náuticas con antena en el techo. Cada metro de altura extra agrega kilómetros de alcance. Priorizá la altura sobre cualquier otra mejora.

### LNA para señales lejanas
Para capturar barcos más allá del horizonte visible (especialmente importantes en el Río de la Plata y la costa bonaerense), un [LNA Wideband 50-4000 MHz](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) instalado en la base de la antena (alimentado por el Bias-Tee del RTL-SDR V3) puede recuperar señales que de otro modo se perderían. [Ver cómo activar el Bias-Tee →](/recursos/bias-tee)

## Software: AIS-catcher + OpenCPN

### Paso 1: AIS-catcher (el decodificador)

**[AIS-catcher](https://github.com/jvde-github/AIS-catcher)** es el decodificador de referencia de la comunidad. Es gratuito, multiplataforma (Windows, Linux, Raspberry Pi) y decodifica ambos canales AIS simultáneamente.

Instalación básica en Windows:
1. Descargá el ejecutable desde la sección Releases del repositorio de GitHub.
2. Ejecutalo en la consola con:
```bash
AIS-catcher -d 0 -u 127.0.0.1 10110
```
Esto le dice que use el RTL-SDR #0 y envíe los datos decodificados a OpenCPN por UDP en el puerto 10110.

### Paso 2: OpenCPN (el mapa marítimo)

**[OpenCPN](https://opencpn.org/)** es un software de navegación marítima de código abierto, usado incluso por navegantes profesionales. Para configurarlo como visualizador AIS:

1. Instalá OpenCPN y abrilo.
2. Andá a **Opciones → Conexiones** (el ícono de engranaje).
3. Añadí una nueva conexión:
   - Tipo: **Red**
   - Protocolo: **UDP**
   - Puerto: **10110**
4. Guardá y cerrá.
5. Iniciá AIS-catcher y luego abrí la carta náutica de tu zona en OpenCPN.

En pocos segundos aparecerán triángulos de colores sobre el mapa. Haciendo clic en cada uno verás:
- **Nombre del barco** y bandera
- **Tipo de embarcación** (carguero, tanquero, pesquero, ferry)
- **Velocidad** y **rumbo**
- **Puerto de origen y destino**
- Foto del barco (si está en la base de datos)

### Alternativa online: MarineTraffic.com
Sin configurar nada, podés ver el tráfico AIS en tiempo real en **[MarineTraffic](https://www.marinetraffic.com/)**. Si configurás tu receptor AIS para alimentar datos a esta plataforma, te dan una cuenta con funciones premium gratuita.

## Qué Podés Ver desde Argentina

Dependiendo de tu ubicación, el panorama varía mucho:

- **Buenos Aires / Río de la Plata:** Enorme tráfico marítimo. Cargueros de ultramar, ferries a Uruguay (Buquebus), barcazas fluviales y embarcaciones deportivas. Es una de las vías navegables más activas de Sudamérica.
- **Costa Atlántica (Mar del Plata, Bahía Blanca):** Buques pesqueros, carga y embarcaciones de la Armada Argentina.
- **Rosario y Paraná (Fluvial):** El corredor de granos más activo del hemisferio sur. Miles de barcazas de cereal en movimiento.
- **Ushuaia:** Cruceros antárticos y barcos de investigación científica.

---

## Preguntas Frecuentes

**¿Todos los barcos aparecen en AIS?**
No. La obligatoriedad del AIS está regulada por convenios de la IMO y aplica a buques comerciales de más de 300 toneladas GT en viajes internacionales, más de 500 toneladas GT en cualquier viaje, y todos los buques de pasajeros. Los botes pequeños, kayaks y lanchas privadas no están obligados, aunque muchos lo instalan voluntariamente.

**¿Los submarinos de la Armada aparecen?**
No. Los submarinos militares no transmiten AIS por razones de seguridad táctica.

**¿Puedo alimentar datos a MarineTraffic o similares?**
Sí. AIS-catcher tiene opciones de salida para enviar datos a varios agregadores simultáneamente. MarineTraffic, ShipFinder y VesselFinder recompensan a los feeders con cuentas premium.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Armá tu estación AIS y empezá a ver el tráfico del Río de la Plata:
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)**
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)**
