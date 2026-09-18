---
title: "El mundo en tu pantalla: Decodificando señales FT8 en Onda Corta"
description: "Decodificá señales FT8 en onda corta (HF) con tu RTL-SDR usando Muestreo Directo Q-Branch. Veé estaciones de Japón, Europa y África en WSJT-X desde Argentina. Guía paso a paso."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["ft8", "hf", "onda-corta", "wsjt-x", "sdr", "argentina", "radioaficionados"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 8
---

El **FT8** (Franke-Taylor Design 8-FSK Modulation) es el modo de comunicación digital más popular de la radioafición moderna. Fue diseñado en 2017 por Joe Taylor (K1JT, Premio Nobel de Física 1993) y Steven Franke con un objetivo muy específico: detectar señales tan débiles que el oído humano no puede percibir.

El resultado es un modo que **puede decodificar señales 12 dB por debajo del nivel del ruido**. Para poner eso en perspectiva: si el ruido ambiente del receptor "tapa" la señal completamente a oídos del oyente, FT8 todavía la puede leer. Eso permite enlazar con estaciones en el otro lado del planeta con equipos simples y antenas pequeñas.

Desde Argentina, en una tarde cualquiera, podés ver en pantalla cientos de estaciones activas de Europa, Norteamérica, Asia y África, todo sin necesitar más que un trozo de cable como antena.

## El Hardware: El Muestreo Directo del RTL-SDR V3

La Onda Corta (3-30 MHz) está por debajo del rango nativo del chip del RTL-SDR. Sin embargo, el [RTL-SDR Blog V3 Original](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) tiene una función especial llamada **Muestreo Directo (Q-Branch)** que le permite bajar a HF.

Los **clones genéricos de plástico no tienen esta función**. Es una de las razones clave por las que el V3 original es la única opción si querés explorar la onda corta.

### Cómo activar el Muestreo Directo en SDR#

1. Abrí SDR# y seleccioná tu RTL-SDR.
2. Hacé clic en el ícono de **engranaje** (configuración del dispositivo).
3. En el menú desplegable "Sampling Mode", elegí **"Direct Sampling (Q branch)"**.
4. Cerralos cambios. Ahora el SDR puede recibir desde ~500 kHz hasta 28 MHz.

## La Antena en HF: Sin magia, con física

En HF, las longitudes de onda son enormes (la banda de 20 metros tiene una longitud de onda de ~14 metros). Eso hace inútiles las antenas pequeñas. Pero hay una solución sorprendentemente simple: la **antena de hilo largo** (*random wire*).

**Materiales:**
- 10 a 20 metros de cable de cobre eléctrico (el de instalaciones domésticas de 1.5 mm², en rollos baratos en ferretería)
- Un conector SMA macho con bornera (o simplemente pelá el cable y conectalo al pin central del conector SMA del RTL-SDR)

**Procedimiento:**
1. Conectá un extremo del cable al pin central del conector de antena del SDR.
2. Extendé el cable horizontalmente lo más posible: a lo largo del balcón, sobre la terraza, entre dos árboles, o por el perímetro de la habitación.
3. No necesitás hacerlo en línea recta. El cable puede tener curvas.
4. Listo. Eso es todo.

Contra toda intuición, esta "antena" de 15 metros de cable irregular recibe perfectamente las señales de radioaficionados japoneses, europeos y africanos en la banda de 20 metros.

## El Software: WSJT-X y cómo configurarlo

### Paso 1: Instalar los prerrequisitos
- **VB-Cable** (gratuito en vb-audio.com): Cable de audio virtual para conectar SDR# con WSJT-X.
- **WSJT-X** (gratuito en physics.princeton.edu/pulsar/k1jt/wsjtx.html): El software oficial de Joe Taylor para modos digitales débiles.

### Paso 2: Configurar SDR# para FT8
1. Activá el Muestreo Directo (Q-Branch) como explicamos arriba.
2. Sintonizá **14.074 MHz** en modo **USB** (Upper Side Band). Esta es la frecuencia estándar mundial de FT8 en la banda de 20 metros.
3. Ajustá el ancho de banda a **3000 Hz** (3 kHz).
4. Configurá la salida de audio de SDR# al dispositivo **VB-Cable Input**.

### Paso 3: Configurar WSJT-X
1. Abrí WSJT-X → File → Settings.
2. En la pestaña **Audio**, elegí la entrada: **VB-Cable Output**.
3. **Importante:** En la pestaña **General**, configurá tu indicativo (puede ser un indicativo cualquiera si sos oyente) y tu localización QTH/grid (ej. `GF05` para Buenos Aires).
4. En la pestaña General, asegurate de que el reloj de tu PC esté sincronizado automáticamente por internet. FT8 necesita precisión de ±1 segundo o los mensajes no decodifican.

### Paso 4: Sintonizar y observar
1. Abrí SDR# y WSJT-X.
2. En WSJT-X, hacé clic en **Monitor**.
3. Esperá el inicio del próximo ciclo de 15 segundos (WSJT-X lo muestra con una barra de progreso).
4. Cada 15 segundos, una nueva lista de estaciones decodificadas aparece en pantalla.

## Leyendo la pantalla de WSJT-X

Una línea típica se ve así:
```
093045  -11  0.2 1234 ^  JA1ZZZ LU3ABC GF05
```
- `093045` → Hora UTC del ciclo (09:30:45)
- `-11` → Nivel de señal en dB (por debajo del ruido; aquí, 11 dB bajo el ruido)
- `0.2` → Corrección de tiempo en segundos
- `1234` → Frecuencia dentro del ancho de banda (Hz)
- `JA1ZZZ LU3ABC` → El operador japonés está llamando al operador argentino
- `GF05` → Localizador Maidenhead (cuadrado de 4 letras con la posición geográfica)

En hora pico (14:00-18:00 ARG en la banda de 20 metros), verás decenas de líneas aparecer cada 15 segundos con estaciones de todos los continentes.

## Las mejores bandas y horarios desde Argentina

| Banda | Frecuencia FT8 | Mejor Horario (ARG) | Destinos Frecuentes |
|---|---|---|---|
| 40 metros | 7.074 MHz | 20:00 - 02:00 | Brasil, Uruguay, Chile, EE.UU. |
| 20 metros | 14.074 MHz | 12:00 - 22:00 | Europa, Norteamérica, Japón |
| 17 metros | 18.100 MHz | 14:00 - 20:00 | Europa, Asia |
| 15 metros | 21.074 MHz | 14:00 - 20:00 | DX lejano cuando el sol está activo |

---

## Preguntas Frecuentes

**¿Necesito licencia de radioaficionado para esto?**
Para **escuchar** FT8: No. Para **transmitir** (participar en los contactos): Sí, necesitás la licencia de radioaficionado de ENACOM.

**¿Por qué mi hora de PC importa tanto?**
FT8 usa ciclos de exactamente 15 segundos sincronizados a nivel mundial. Si tu reloj tiene 2 segundos de error, los ciclos de tu receptor no coinciden con los del transmisor y los mensajes no decodifican. En Windows, el servicio W32tm se encarga de la sincronización automática, pero a veces necesita reiniciarse.

**¿Puedo ver quién más está escuchando las mismas frecuencias?**
Sí. **[PSKReporter](https://www.pskreporter.info/)** recopila los reportes de todas las estaciones WSJT-X del mundo. Podés ver en un mapa quién está escuchando qué frecuencias en tiempo real.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Para recibir onda corta con tu RTL-SDR, necesitás el modelo original con Muestreo Directo:
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Receptor RTL-SDR Blog V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original)**
