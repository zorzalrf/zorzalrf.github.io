---
title: "Cómo detectar y eliminar interferencias de FM"
description: "Uso práctico del FM Trap y filtros de banda para limpiar tu recepción de RF."
publishDate: 2026-06-24
author: "Equipo Zorzal RF"
tags: ["soporte", "interferencia", "filtros", "fm", "fm-trap"]
category: "Antenas y Cables"
difficulty: "Intermedio"
readingTime: 4
---

Las emisoras de radio FM comerciales (88-108 MHz) transmiten con potencias gigantescas (miles de watts). Si estás intentando escuchar frecuencias cercanas, como satélites meteorológicos (137 MHz) o aviación (118-136 MHz), la señal de FM puede sobrecargar tu SDR.

## ¿Cómo sé si tengo interferencia de FM?

1. **Efecto Fantasma (Aliasing o Intermodulación):** Estás escuchando en una frecuencia donde no debería haber nada (ej. 140 MHz) y de repente escuchás a un locutor de FM comercial o música.
2. **Piso de ruido altísimo:** Todo el espectro se ve "levantado", como si hubiera mucho ruido blanco.
3. **Pérdida de sensibilidad:** Las señales que antes veías bien (como la torre de control de tu aeropuerto) ahora son muy débiles o invisibles.

## La Solución: El FM Trap

Un **FM Trap** (o filtro de rechazo de banda FM) es un pequeño dispositivo pasivo que se conecta entre tu antena y tu SDR.

Su trabajo es atenuar drásticamente (bajar el volumen) a todas las señales entre 88 y 108 MHz, pero dejar pasar todo el resto.

> **Recomendación Zorzal RF:** Si usás un LNA (amplificador), es crítico poner el filtro FM *antes* del LNA, para evitar que las señales fuertes de FM lo saturen.

Podés conseguir filtros de excelente calidad en nuestra tienda. ¡Te van a cambiar la vida a la hora de recibir NOAA y bandas aéreas!


---

### 🛒 ¿Necesitás el hardware para este proyecto?
Bloqueá las emisoras locales y recuperá la sensibilidad de tu SDR con nuestro filtro dedicado:
- **[Filtro Rechazo Banda FM (88-108 MHz) - FM Trap para SDR](/catalog/?type=Filtros)**