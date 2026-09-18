---
title: "La Regla de Oro del LNA: Qué es y dónde colocarlo"
description: "Colocar el LNA en el lugar equivocado arruina tu recepción. Aprendé qué es la Figura de Ruido, por qué el cable coaxial destruye señales y cuál es la única ubicación correcta para tu amplificador de bajo ruido."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["lna", "amplificador", "hardware", "antenas", "ruido", "bias-tee"]
category: "Hardware y Antenas"
difficulty: "Intermedio"
readingTime: 6
---

Compraste un buen receptor SDR, construiste una antena cuidadosamente... pero las señales satelitales siguen débiles o llenas de ruido. El siguiente paso lógico es agregar un **LNA** (Low Noise Amplifier — Amplificador de Bajo Ruido). Pero acá viene el problema: la gran mayoría de los principiantes lo conecta en el lugar equivocado y termina **peor** que antes.

Esta guía te explica por qué, usando física real.

## ¿Qué es la Figura de Ruido?

Cada componente de tu cadena de recepción —el cable coaxial, los conectores, el SDR— añade ruido térmico a la señal. A este valor se lo llama **Figura de Ruido** (Noise Figure) y se mide en dB. Cuanto más baja, mejor.

- Cable RG-58 (10 metros a 1090 MHz): ~5.5 dB de pérdida → equivalente a una figura de ruido de 5.5 dB
- Conector SMA malo: 0.3-0.5 dB
- Chip del RTL-SDR V3: ~3.5 dB de figura de ruido

El [LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) tiene una figura de ruido **menor a 1 dB** en la mayoría de las bandas. Eso lo hace especial: amplifica la señal sin casi agregar ruido propio.

## El Teorema de Friis: Por Qué la Posición Importa Todo

El físico Harald T. Friis estableció una ecuación que determina la figura de ruido de toda una cadena de componentes: **el primer componente de la cadena domina la figura de ruido total del sistema**.

Esto significa que si ponés el LNA **al final** (cerca del SDR), el cable ya "envenenó" la señal antes de que el LNA pueda hacer algo útil. Pero si ponés el LNA **al principio** (cerca de la antena), amplifica la señal limpia antes de que el cable la degrade.

### Ejemplo práctico con números

Supongamos que tenés una señal de satélite NOAA de -100 dBm llegando a la antena, y 15 metros de RG-58:

**❌ Escenario incorrecto: LNA al lado de la PC**
```
Antena → 15m RG-58 → LNA → SDR
Señal en SDR: -100 dBm - 8 dB (cable) + 20 dB (LNA) = -88 dBm
Pero ya viajó con todo el ruido del cable amplificado también.
Figura de ruido del sistema: ~9 dB (terrible)
```

**✅ Escenario correcto: LNA en la base de la antena**
```
Antena → LNA → 15m RG-58 → SDR
Señal en SDR: -100 dBm + 20 dB (LNA) - 8 dB (cable) = -88 dBm
Pero la señal ya venía "reforzada" antes de degradarse en el cable.
Figura de ruido del sistema: ~1.4 dB (excelente)
```

El nivel final de potencia es igual, pero la relación señal-ruido es completamente diferente. En el primer caso el satélite se pierde entre el ruido; en el segundo, se ve claramente en el waterfall.

## La Regla de Oro de Zorzal RF

> **"El LNA siempre va lo más cerca posible de la antena, antes de la tirada larga de cable."**

Esto aplica sin excepción a:
- Satélites NOAA y meteorológicos (137 MHz)
- ADS-B (1090 MHz)
- Radioastronomía (1420 MHz)
- Satélites Inmarsat y Iridium (1.5 GHz)
- Cualquier señal débil que venga de arriba (satélites)

Para señales terrestres más fuertes (radioaficionados VHF, torre de control de aviación), el LNA generalmente no es necesario e incluso puede causar saturación.

## ¿Y cómo alimentás el LNA en el techo?

Esta es la pregunta que más confunde a los principiantes. Si el LNA está en el techo, ¿cómo le llegás la alimentación?

Acá entra el **Bias-Tee**: una función del [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) que envía **4.5 Voltios DC** "subiendo" por el mismo cable coaxial que transporta la señal de radio en sentido contrario. No necesitás cables de alimentación adicionales.

El [LNA Wideband 50-4000MHz](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) fue diseñado específicamente para aprovechar este sistema: detecta automáticamente los 4.5V del Bias-Tee y se enciende. Para activar el Bias-Tee desde el software, [seguí esta guía →](/recursos/bias-tee).

## ¿Necesito realmente un LNA?

No siempre. Antes de comprar un LNA, probá estas optimizaciones sin costo:

1. **Subí la antena** — Cada metro de altura extra mejora la señal más que cualquier amplificador.
2. **Acortá el cable** — Cuanto más corto, mejor. Usá el cable solo lo necesario.
3. **Mejorá el cable** — Cambiá el RG-58 por KMR-240 o KMR-400 (menos pérdida).
4. **Quitá los adaptadores** — Cada adaptador agrega pérdida y ruido.

Si hiciste todo eso y la señal sigue débil, entonces sí: el LNA en la base de la antena va a hacer una diferencia visible.

---

## Preguntas Frecuentes

**¿Un LNA de más ganancia es siempre mejor?**
No. Un LNA con demasiada ganancia puede **saturar** el chip del SDR si hay señales fuertes cerca (como torres FM o 4G). Lo ideal es usar también un [filtro FM Trap](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia) antes del LNA si estás en zona urbana.

**¿Puedo usar el LNA sin Bias-Tee?**
Sí. El LNA tiene un conector de alimentación micro-USB por donde podés darle 5V con un cargador. Pero la solución Bias-Tee es mucho más elegante y no requiere cables adicionales.

**¿Dos LNA en cascada son el doble de buenos?**
En teoría, el primer LNA domina la cadena (Friis), así que el segundo agrega poca mejora de ruido. Puede ser útil para compensar pérdidas en cables muy largos, pero no es la primera solución a buscar.

---

### 🛍️ Hardware recomendado para esta guía
Armá tu sistema con el Bias-Tee y el LNA diseñados para trabajar juntos:
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)** — Figura de ruido < 1 dB
- **[Receptor RTL-SDR Blog V3 USB-A con Bias-Tee](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
