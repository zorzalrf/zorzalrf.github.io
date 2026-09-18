---
title: "Guía de Iniciación a la Onda Corta (HF): Escuchando al Mundo"
description: "Escuchá radioaficionados de todo el mundo en Onda Corta (HF) con tu RTL-SDR. Diferencias entre Muestreo Directo y Upconverters, antenas tipo hilo largo y las bandas de 40m (7 MHz) y 20m (14 MHz) activas en Argentina."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["hf", "onda-corta", "spyverter", "radioaficionados", "sdr", "argentina", "ssb"]
category: "Satelital y Avanzado"
difficulty: "Intermedio"
readingTime: 8
---

La **Onda Corta** (High Frequency o HF, frecuencias entre 3 y 30 MHz) es la única parte del espectro donde la física te permite comunicarte con el planeta entero sin infraestructura: las ondas rebotan en la ionosfera y vuelven a tierra a miles de kilómetros de distancia. Un radioaficionado en Japón puede estar hablando con alguien en Argentina usando apenas 100 Watts y una antena de alambre.

Desde Argentina, podés escuchar en Onda Corta: radioaficionados del hemisferio norte en tiempo real, emisoras internacionales (China, Cuba, BBC), servicios de comunicación aeronáutica transoceánica (HFDL), mapas meteorológicos de la armada (WEFAX), y mucho más.

## El Problema: ¿Puede un RTL-SDR recibir Onda Corta?

El chip RTL2832U fue diseñado para TV digital UHF. Su rango nativo es aproximadamente **24 MHz a 1766 MHz**. La Onda Corta está mayormente **por debajo** de ese límite. Entonces, ¿cómo hacemos?

Hay dos soluciones, con características muy diferentes:

### Opción 1: Muestreo Directo (Q-Branch) — Incluida en el RTL-SDR V3

El [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) tiene un circuito adicional que, cuando lo activás desde el software, "cortocircuita" el chip sintonizador principal y conecta la señal de antena directamente al convertidor analógico-digital (ADC) del chip. Esto le permite recibir señales de **500 kHz hasta ~28 MHz**.

**Cómo activarlo en SDR#:**
1. Abrí SDR# y elegí tu RTL-SDR.
2. Hacé clic en el ícono de engranaje (configuración del dispositivo).
3. En el menú "Sampling Mode", elegí **"Direct Sampling (Q branch)"**.
4. Sintonizá cualquier frecuencia de HF (ej. 7.100 MHz para la banda de 40 metros).

**Ventajas del Muestreo Directo:**
- Sin costo adicional (ya lo tenés incluido en el V3)
- Funciona para exploración inicial de HF

**Limitaciones reales:**
- Presencia de imágenes especulares (alias de frecuencias)
- Interferencia de la banda AM comercial que "colorea" el espectro
- Menor sensibilidad que un receptor HF dedicado
- No recibe por debajo de ~500 kHz

### Opción 2: Upconverter — Para recepción HF seria

Un **Upconverter** (como el SpyVerter o similares) es un dispositivo que va entre tu antena y tu SDR. Su función es tomar todas las señales de HF (0 a 30 MHz) y "subirlas" (up-convert) sumándoles una frecuencia de conversión fija (generalmente 120 MHz).

Así, una señal en 7 MHz llega al SDR como si fuera una señal en **127 MHz**, donde el chip del RTL-SDR funciona perfectamente y con toda su sensibilidad.

**Ventajas del Upconverter:**
- Recepción de HF de calidad comparable a receptores dedicados
- Sin imágenes ni interferencias de AM broadcast
- Permite recibir desde 0 Hz (ondas largas, VLF)
- La relación señal-ruido es notablemente mejor para DX (contactos a larga distancia)

## La Antena en HF: El Factor Más Importante

En HF, las longitudes de onda son enormes: la banda de 40 metros tiene una longitud de onda de ~40 metros. Eso hace que las antenas necesiten ser físicamente grandes para ser eficientes.

### La Antena de Hilo Largo (Random Wire) — La opción del principiante

La antena más simple y efectiva para iniciarse en HF es literalmente un trozo de **cable de cobre de entre 10 y 20 metros** extendido en el jardín, balcón, o a lo largo de la pared.

Materiales:
- 10-20 metros de cable de cobre eléctrico monohilar (el de instalaciones domésticas de 1.5 mm² es perfecto)
- Un adaptador SMA macho a bornera
- Opcionalmente: un transformador de impedancia (un simple choke de ferrita mejora la recepción)

Procedimiento:
1. Pelá un extremo del cable y conectalo al conductor central del conector SMA de tu SDR.
2. Extendé el resto del cable tan horizontal como puedas: por el balcón, sobre la terraza, entre dos árboles.
3. El otro extremo puede quedar "suelto" en el aire (es una antena de extremo libre o "end-fed").
4. Sintonizá en la banda que te interese.

Contra todo pronóstico, una antena de alambre de 10 metros colgada del balcón **funciona sorprendentemente bien** para escuchar radioaficionados de Europa y Norteamérica en la banda de 20 metros.

## Las Bandas Más Activas para Escuchar desde Argentina

| Banda | Frecuencia | Mejor Horario | Qué Escuchar |
|---|---|---|---|
| 40 metros | 7.000 - 7.200 MHz | Noche (20:00-02:00 ARG) | Radioaficionados de Sudamérica, AM broadcasting de onda corta |
| 20 metros | 14.000 - 14.350 MHz | Día y tarde (10:00-20:00 ARG) | Radioaficionados de EE.UU., Europa, Japón |
| 17 metros | 18.068 - 18.168 MHz | Día | DX lejano, tráfico transoceánico |
| 15 metros | 21.000 - 21.450 MHz | Tarde y noche | Radioaficionados de Europa y África |
| 11 metros (CB) | 26.965 - 27.405 MHz | Variable | Camioneros y radioafición informal |

> **Consejo:** En la banda de 40 metros (7 MHz), cada noche podés escuchar redes de radioaficionados argentinos y latinoamericanos hablando entre sí. Sintonizá en modo **USB (Upper Side Band)** entre 7.100 y 7.200 MHz alrededor de las 21:00 ARG y muy probablemente escuches conversaciones en español.

## Modos de Emisión en HF: SSB, CW y Digital

A diferencia de la radio FM o AM convencional, en HF se usan varios modos de emisión:

- **USB (Upper Side Band) y LSB (Lower Side Band):** La "voz" estándar de los radioaficionados en HF. En VHF/UHF usan FM, pero en HF usan SSB porque ocupa menos ancho de banda. Sintonizá en **USB por encima de los 10 MHz** y **LSB por debajo de los 10 MHz**.
- **CW (Morse):** El código Morse sigue siendo muy usado en HF. Suena como una serie de "beeps" cortos y largos.
- **FT8 y otros modos digitales:** Señales digitales de altísima eficiencia que permiten comunicaciones intercontinentales con señales que el oído humano ni puede escuchar. [Ver guía de FT8 →](/recursos/sdr-ft8-onda-corta-internacional)

---

## Preguntas Frecuentes

**¿Puedo recibir emisoras de noticias internacionales en onda corta?**
Sí, aunque el panorama ha cambiado mucho. La BBC World Service dejó de usar HF mayoritariamente, pero la **Radio China Internacional (CRI)**, **Radio Habana Cuba**, **Voice of America** y varias emisoras gubernamentales asiáticas y africanas siguen transmitiendo en onda corta con potencias enormes. Sintonizá la banda de 49 metros (5.9-6.2 MHz) de noche para escucharlas.

**¿El Muestreo Directo es suficiente o necesito un upconverter?**
Depende de tus objetivos. Para explorar y divertirte, el Muestreo Directo es más que suficiente y te cuesta cero. Si querés hacer DX serio (escuchar señales muy lejanas o débiles), el upconverter hace una diferencia real y notable.

**¿A qué distancia puedo escuchar señales HF desde Argentina?**
Con buenas condiciones de propagación ionosférica (que varían con el ciclo solar de 11 años), es posible escuchar señales de Japón, Europa y el sur de África con bastante facilidad en la banda de 20 metros durante el día. De noche, la banda de 40 metros conecta muy bien con el resto de Sudamérica y América del Norte.

---

### 🛍️ ¿Necesitás el hardware para Onda Corta?
Para recibir HF con el RTL-SDR V3, solo activás el Muestreo Directo:
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)** — Con Muestreo Directo Q-Branch incluido
- **[Receptor RTL-SDR Blog V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original)** — Ideal si lo usás también en el celular
