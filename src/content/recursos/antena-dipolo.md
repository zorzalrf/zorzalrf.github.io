---
title: "Construcción de una Antena Dipolo de Media Onda"
description: "Aprendé los fundamentos teóricos y prácticos para construir tu propia antena dipolo para proyectos de radiofrecuencia y SDR."
publishDate: 2026-06-15
author: "Equipo Zorzal RF"
tags: ["antenas", "dipolo", "sdr", "hardware", "tutorial"]
category: "Antenas y Cables"
difficulty: "Principiante"
readingTime: 6
---

La **antena dipolo** es uno de los diseños más fundamentales y utilizados en el mundo de la radiofrecuencia (RF). Su simplicidad y eficiencia la convierten en un excelente punto de partida para cualquier entusiasta de la Radio Definida por Software (SDR) o radioaficionado.

## ¿Qué es un Dipolo de Media Onda?

Un dipolo de media onda consta de dos elementos conductores (usualmente alambre de cobre o tubos de aluminio) orientados en línea recta, cada uno midiendo un cuarto de la longitud de onda de la frecuencia de diseño. Sumados, forman media longitud de onda ($\lambda/2$).

### Fórmula de Cálculo

Para que la antena resuene correctamente a una frecuencia específica, la longitud total se calcula con la siguiente fórmula práctica:

$$
L \text{ (metros)} = \frac{142.5}{f \text{ (MHz)}}
$$

*Nota: El factor 142.5 contempla la velocidad de la luz y el efecto de los extremos de la antena en el mundo real, siendo ligeramente más corta que el cálculo puramente teórico de $\frac{150}{f}$.*

## Materiales Necesarios

- Cable de cobre (ej. alambre de instalación eléctrica).
- Un conector coaxial (ej. SMA o BNC, dependiendo de tu SDR).
- Cable coaxial de 50 ohms (como RG58).
- Un aislante central (puede ser plástico, PVC o incluso una ficha de empalme).
- Soldador y estaño.

## Construcción Paso a Paso

1. **Definí tu frecuencia objetivo**: Por ejemplo, si querés escuchar la banda de aviación civil en 118 MHz.
2. **Calculá la longitud**: Usando la fórmula, $L = 142.5 / 118 \approx 1.20$ metros totales. Cada brazo medirá unos **60 centímetros**.
3. **Prepará los elementos**: Cortá dos tramos de cable de cobre de un poco más de 60 cm (para dejar margen para el ajuste).
4. **Ensamblado central**: Uní un brazo al conductor central del cable coaxial y el otro brazo a la malla (blindaje) del coaxial. Usá el aislante para mantenerlos separados mecánicamente y evitar cortocircuitos.
5. **Ajuste fino (SWR)**: Si tenés un medidor de ROE (SWR meter) o un NanoVNA, podés recortar milimétricamente las puntas de la antena para encontrar la resonancia perfecta.

## Consideraciones de Instalación

- **Polarización**: Si los brazos están paralelos al suelo, la polarización es **horizontal** (ideal para señales de HF). Si la ponés verticalmente, la polarización es **vertical** (ideal para VHF/UHF terrestre y comunicaciones locales, como walkie-talkies o aviación).
- **Altura**: Tratá de elevar la antena lo más posible y alejada de metales grandes o interferencias eléctricas.

¡Con este sencillo diseño ya estás listo para conectar la antena a tu receptor SDR y empezar a explorar el espectro radioeléctrico!


---

### 🛒 ¿Necesitás el hardware para este proyecto?
Si preferís ir por la solución rápida y efectiva, el Kit V3 viene con la base dipolo perfecta:
- **[Kit Antena Dipolo Multipropósito para SDR - Portátil y Versátil](/catalogo/antenas/)**
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](/catalogo/sdr/)**