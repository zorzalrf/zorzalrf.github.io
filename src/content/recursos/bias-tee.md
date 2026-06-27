---
title: "Cómo activar el Bias-Tee en tu SDR"
description: "Aprendé a activar el Bias-Tee en diferentes softwares (SDR#, GQRX, SDR++) para alimentar tus LNA y antenas activas."
publishDate: 2026-06-24
author: "Equipo Zorzal RF"
tags: ["soporte", "bias-tee", "sdr-sharp", "gqrx", "sdr++"]
category: "SDR Avanzado"
difficulty: "Intermedio"
readingTime: 3
---

El **Bias-Tee** es una función clave en muchos SDRs (como el RTL-SDR V3 y los Airspy) que permite enviar energía (generalmente 3.3V o 5V) a través del mismo cable coaxial de antena. Esto sirve para alimentar LNAs (Amplificadores de Bajo Ruido) o antenas activas.

Si conectás un LNA pero no activás el Bias-Tee, ¡tu LNA va a actuar como un atenuador gigante y no vas a escuchar nada!

Acá te explicamos cómo activarlo en los programas más populares:

## SDR# (SDR Sharp)
1. Abrí SDR# y seleccioná tu dispositivo RTL-SDR.
2. Hacé clic en el ícono del engranaje (Configuración del dispositivo).
3. Buscá la casilla que dice **"Offset Tuning"** o **"Bias-T"** (dependiendo de la versión de tus drivers).
4. Marcá la casilla y ¡listo! Asegurate de tener la antena conectada.

## SDR++
1. En la barra lateral izquierda, buscá la sección **Source** (donde elegís tu SDR).
2. Desplegá el menú de tu RTL-SDR o Airspy.
3. Abajo de la ganancia (Gain), vas a ver una opción que dice **Bias-T**.
4. Hacé clic en el casillero para activarlo.

## GQRX (Linux / Mac)
1. Hacé clic en la pestaña **Input controls**.
2. En la sección inferior, buscá la opción **Hardware AGC** o, si tu driver lo soporta directamente desde GQRX, vas a ver un botón **Bias-T**.
3. *Nota:* A veces en Linux es más confiable activarlo por terminal usando herramientas como `rtl_biast` antes de abrir GQRX.


---

### 🛒 ¿Necesitás el hardware para este proyecto?
Para sacarle el jugo al Bias-Tee de tu receptor, te recomendamos:
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](/catalogo/accesorios/)**
- **[Receptor RTL-SDR Blog V3 USB-C - TCXO 1PPM SMA](/catalogo/sdr/)**