---
title: "La Regla de Oro del LNA: Qué es y dónde colocarlo"
description: "Evitá amplificar ruido e interferencias. Aprendé por qué la ubicación de tu Amplificador de Bajo Ruido es crítica para la recepción."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["lna", "amplificador", "hardware", "antenas", "ruido"]
category: "Antenas y Cables"
difficulty: "Intermedio"
readingTime: 5
---

Compraste un buen receptor SDR, hiciste una antena perfecta, pero las señales satelitales (como las imágenes NOAA o los ráfagas de Iridium) siguen viéndose débiles o llenas de ruido. 

La solución clásica es comprar un amplificador. Sin embargo, muchos cometen el error de comprar un **LNA** (Amplificador de Bajo Ruido / Low Noise Amplifier) y conectarlo **directamente al SDR**, en la PC.

¡Este es el peor error que podés cometer en Radiofrecuencia!

## ¿Qué es la Figura de Ruido (Noise Figure)?

Cada componente de tu sistema (el SDR, el cable, los conectores) añade ruido térmico a la señal. A esto se le llama **Figura de Ruido**.
El LNA es un amplificador especial diseñado con componentes de altísima calidad para amplificar la señal agregando **casi cero ruido**. (Por ejemplo, el *LNA Wideband 50-4000MHz RTL-SDR Blog* tiene un ruido inferior a 1dB en muchas bandas).

## El Enemigo Oculto: El Cable Coaxial

Imaginá que tenés 15 metros de cable coaxial bajando desde el techo hasta tu PC. Ese cable se come (atenuación) un gran porcentaje de tu señal de los satélites antes de que siquiera llegue a tu escritorio.

**Escenario 1: El LNA al lado de la PC (INCORRECTO)**
La señal satelital llega a la antena (fuerte). Baja por los 15 metros de cable y se debilita casi por completo, juntando ruido electromagnético de la casa en el viaje. Al llegar a la PC, conectás el LNA. ¿Qué hace el LNA? **Amplifica la señal casi muerta junto con todo el ruido eléctrico de la casa.** El resultado es peor que si no tuvieras LNA.

**Escenario 2: El LNA en el techo (CORRECTO)**
La señal satelital llega a la antena. **Inmediatamente** (a 10 cm de distancia) pasa por el LNA. El LNA la amplifica limpia, fresca y fuerte. Ahora esa señal potente baja por los 15 metros de cable. Aunque el cable atenúe un poco, como la señal ya venía "musculosa" desde el techo, llega al SDR de forma prístina.

## La Regla de Oro de Zorzal RF

> **"El Amplificador siempre se coloca lo más cerca posible de la antena, antes de la tirada larga de cable."**

### ¿Y cómo alimento el LNA en el techo?

Acá es donde entra la magia del **Bias-Tee** (que te enseñamos a usar en otro tutorial). El SDR envía 5 Voltios "subiendo" por el mismo cable coaxial para encender el LNA que está en el techo, mientras la señal de radio baja por ese mismo cable.

Un equipo como el **LNA Wideband 50-4000MHz** de nuestra tienda está diseñado específicamente para aprovechar el Bias-Tee de receptores como el [RTL-SDR V3](/catalog/?type=SDR), convirtiéndolo en un accesorio esencial e "invisible" que hace que tus señales satelitales exploten en la pantalla.
