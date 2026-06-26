---
title: "Cables y conectores: ¿Por qué perder 2dB te arruina la recepción?"
description: "Explicación básica para que entiendan la importancia de usar buen cable coaxial como el KMR y los conectores adecuados."
publishDate: 2026-06-24
author: "Equipo Zorzal RF"
tags: ["soporte", "cables", "conectores", "KMR", "atenuacion"]
category: "Antenas y Cables"
difficulty: "Principiante"
readingTime: 5
---

Muchos principiantes gastan un montón en un buen SDR y una excelente antena, pero después los unen con un cable coaxial de televisión (RG6) viejo, adaptadores de mala calidad, y se frustran porque "no se escucha nada".

En Radiofrecuencia, **el cable importa, y mucho.**

## La atenuación: El enemigo invisible

Todo cable tiene "pérdida" o atenuación, medida en decibelios (dB). Cuanto más largo es el cable y más alta la frecuencia, mayor es la pérdida.

- **Cada 3 dB de pérdida significa que la mitad de la potencia de la señal se esfumó.**
- Si tenés 6 dB de pérdida, estás perdiendo el 75% de la señal.

### RG-58 vs KMR-400

Imaginemos que queremos recibir ADS-B (1090 MHz) y tenemos 10 metros de cable:

- **Cable barato (tipo RG-58):** A 1000 MHz, pierde aproximadamente **5.5 dB** cada 10 metros. ¡Perdiste más del 70% de la señal antes de llegar al SDR!
- **Cable de calidad (tipo KMR-400):** A 1000 MHz, pierde alrededor de **1.3 dB** cada 10 metros. La diferencia es abismal.

## Conectores y Adaptadores

Cada vez que ponés un adaptador (ej. SMA a BNC, BNC a PL259, etc.), perdés un poco de señal (entre 0.1 y 0.5 dB por unión, o más si son de mala calidad).

**Regla de oro:** 
Tratá de usar cables que ya vengan con los conectores correctos en cada extremo. Evitá armar "trenes de adaptadores".

Si necesitás cables KMR a medida (KMR-240, KMR-400), en Zorzal RF armamos chicotes a pedido con conectores de grado profesional.


---

### 🛒 ¿Necesitás el hardware para este proyecto?
No pierdas señal con adaptadores baratos. Visitá nuestro catálogo para accesorios de calidad:
- **[Ver Accesorios y Cables en el Catálogo](/catalogo/accesorios)**