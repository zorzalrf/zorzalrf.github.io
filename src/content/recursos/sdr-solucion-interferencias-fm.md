---
title: "¿Por qué mi SDR recibe poco? Solucionando interferencias de FM"
description: "Las emisoras de FM saturan tu SDR con miles de watts y te impiden escuchar aviones, satélites y radioaficionados. Aprendé a diagnosticar el problema y solucionarlo con un filtro FM Trap pasivo."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["ruido", "interferencias", "fm", "filtros", "sdr", "fm-trap"]
category: "Hardware y Antenas"
difficulty: "Principiante"
readingTime: 6
---

Abrís SDR# por primera vez, buscás la frecuencia de aviación (118 MHz), y en vez de escuchar a los pilotos... escuchás la radio FM de tu ciudad. O sintonizás los satélites NOAA en 137 MHz y aparece la voz de un locutor. O simplemente todo el espectro parece "levantado" con un manto de ruido que no baja.

Bienvenido al problema número uno de la radioescucha urbana: **la saturación por interferencia de FM comercial**.

## ¿Por Qué Ocurre Esto? La física detrás del problema

Las emisoras de radio FM (88-108 MHz) transmiten con potencias brutales: entre 5.000 y 50.000 Watts, desde antenas instaladas en lo más alto de edificios y cerros. Están diseñadas para llegar a toda una ciudad.

Tu receptor SDR, por el contrario, está diseñado para capturar señales de fracciones de Watt que vienen del espacio o de aviones a 10.000 metros de altura.

Cuando conviven estas dos cosas en la misma antena, ocurre un fenómeno llamado **desensibilización** o **compression**: el chip del SDR recibe tanta energía de las FM que activa su circuito de protección AGC (Control Automático de Ganancia) y baja su sensibilidad drásticamente para no destruirse. El resultado: deja de "ver" las señales débiles que querías escuchar.

Además, esa energía brutal de FM genera **intermodulación**: mezclas matemáticas entre dos señales FM fuertes que crean señales "fantasma" en frecuencias donde no existe nada real. Por eso escuchás FM en 137 MHz o en 250 MHz.

## ¿Cómo Diagnosticar la Interferencia de FM?

Antes de gastar en soluciones, confirmá que realmente tenés este problema. En SDR# o SDR++, mirá el espectro (la pantalla de barras):

**Síntoma 1 — El piso de ruido "baila":**
Si subís la ganancia al máximo y el piso de ruido (la línea base del espectro) se eleva de forma desordenada en lugar de subir uniformemente, es probable que sea saturación de FM.

**Síntoma 2 — Señales fantasma:**
Sintonizá entre 170 y 400 MHz. Si ves picos de señal fuertes pero al intentar escucharlos suenan igual que una emisora de FM (música o voz), son imágenes de intermodulación.

**Síntoma 3 — La prueba del filtro:**
Desconectá la antena del SDR. Si el "piso de ruido" o las señales fantasmas desaparecen completamente, el problema viene por la antena (señales externas). Si persisten, el problema puede ser ruido eléctrico interno.

**Síntoma 4 — La prueba de la ganancia:**
Bajá la ganancia del SDR al mínimo. Si las señales fantasma desaparecen pero las señales reales que buscabas también, confirmás que es saturación: el chip necesita menos ganancia para protegerse, pero así también pierde sensibilidad.

## La Única Solución Definitiva: El FM Trap

Bajar la ganancia mejora la saturación, pero también te quita sensibilidad en todo el espectro. **No es una solución, es un parche**.

La solución verdadera es cortar el problema antes de que entre al receptor: un **[Filtro Rechazo Banda FM (88-108 MHz)](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia)** — también llamado FM Trap.

Este pequeño componente pasivo (sin alimentación, sin chips, sin nada activo) actúa como un portero:

| Frecuencia | Acción del FM Trap |
|---|---|
| 0 - 87 MHz (AM, shortwave) | ✅ Pasa sin atenuación |
| **88 - 108 MHz (FM comercial)** | ❌ **Bloqueada: atenuación >50 dB** |
| 109 MHz - 2 GHz (aviación, VHF, UHF, satélites) | ✅ Pasa sin atenuación |

Una atenuación de 50 dB significa que divide la potencia de las FM por **100.000 veces**. Eso es más que suficiente para que el chip del SDR deje de saturarse.

## Qué Cambia Después de Instalar el FM Trap

En cuanto enchufás el filtro entre tu antena y el SDR:

1. **Las señales fantasma desaparecen** — El espectro entre 110 y 400 MHz se limpia instantáneamente.
2. **El piso de ruido baja** — La pantalla se ve más oscura y "tranquila".
3. **Podés subir la ganancia** — Al estar el chip liberado de la sobrecarga de FM, ahora podés subir la ganancia sin saturación y revelar señales débiles que antes estaban completamente ocultas.
4. **Los satélites NOAA mejoran** — Las imágenes tienen menos franjas y mejor relación señal-ruido.

## ¿Antes o Después del LNA?

Si usás un [LNA](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) en tu sistema, la pregunta sobre el orden es crítica:

**Orden correcto:**
```
Antena → FM Trap → LNA → Cable → SDR
```

El filtro debe ir **antes del LNA** (más cerca de la antena). Si el FM Trap va después del LNA, las señales FM ya habrán saturado el amplificador, causando exactamente el mismo problema de intermodulación dentro del chip del LNA.

---

## Preguntas Frecuentes

**¿El FM Trap afecta la recepción de AM (540-1700 kHz)?**
No. El filtro solo actúa en la banda 88-108 MHz. La AM (onda media), onda corta y todo lo que está por debajo de 87 MHz pasa sin ninguna modificación.

**¿Necesito un FM Trap si estoy en el campo lejos de la ciudad?**
Probablemente no. Si no hay torres FM cercanas (menos de 10 km), la potencia que llega a tu antena no es suficiente para saturar el SDR. Hacé la prueba del espectro antes de comprar.

**¿Un filtro pasa-alto (highpass) sirve igual?**
Un filtro paso-alto que corte en 110 MHz funcionaría para el FM, pero también eliminaría toda la AM y la onda corta. El FM Trap es un filtro de rechazo de banda (notch filter) que elimina solo el rango 88-108 MHz, preservando todo lo demás.

---

### 🛍️ Solucioná la interferencia hoy
- **[Filtro Rechazo Banda FM (88-108 MHz) - FM Trap](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia)**
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)** — El LNA ideal para usar en conjunto con el FM Trap
