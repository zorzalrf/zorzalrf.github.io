---
title: "Cómo construir tu propia Antena Dipolo de Media Onda para SDR"
description: "Fórmula completa para calcular y construir una antena dipolo de media onda para SDR. Aprende la fórmula de longitud por frecuencia, materiales necesarios, configuraciones horizontal y V-Dipole, y consejos de instalación."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["antenas", "dipolo", "sdr", "hardware", "tutorial", "calcular", "construccion"]
category: "Hardware y Antenas"
difficulty: "Principiante"
readingTime: 8
---

La **antena dipolo** es el diseño más fundamental de la radiofrecuencia. Fue inventada en 1888 por Heinrich Hertz, y más de 130 años después sigue siendo la antena de referencia de la radiocomunicación mundial. Su popularidad no es casualidad: es simple de construir, eficiente a su frecuencia de resonancia, y sirve como punto de comparación (ganancia 0 dBd) para cualquier otra antena.

Para un entusiasta del SDR, la antena dipolo es la herramienta indispensable: con materiales de ferretería y el [Kit RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) podés armar en minutos una antena sintonizada exactamente a la frecuencia que necesitás.

## ¿Qué es un Dipolo de Media Onda?

Un dipolo consta de dos elementos conductores (generalmente alambre de cobre o varillas de aluminio) orientados en línea recta, cada uno con una longitud igual a un **cuarto de la longitud de onda** de la frecuencia objetivo. Sumados, forman **media longitud de onda (λ/2)**.

La resonancia ocurre cuando la longitud física de la antena coincide con este valor: en ese punto, la reactancia de la antena es cero, la impedancia es puramente resistiva (aproximadamente 73 ohms) y la transferencia de energía entre la antena y el cable coaxial (de 50 ohms) es máxima con mínimas pérdidas por reflexión.

## La Fórmula de Cálculo

La longitud total de un dipolo de media onda en metros se calcula con la siguiente fórmula práctica:

$$
L \text{ (metros)} = \frac{142.5}{f \text{ (MHz)}}
$$

El factor **142.5** (y no 150, que sería el valor teórico puro) incorpora el **factor de velocidad** del conductor físico: en la práctica, los extremos del conductor tienen efecto capacitivo, haciendo que la antena efectiva sea ligeramente más corta que la longitud teórica de media onda en el espacio libre.

**Cada brazo** del dipolo mide la mitad de L:

$$
\text{Brazo} = \frac{L}{2} = \frac{71.25}{f \text{ (MHz)}}
$$

## Tabla de Longitudes para las Bandas Más Usadas

| Aplicación | Frecuencia | Longitud total (L) | Cada brazo |
|---|---|---|---|
| Onda corta / HF general | 7 MHz (40m) | 20.4 m | 10.2 m |
| Onda corta / HF | 14 MHz (20m) | 10.2 m | 5.1 m |
| Aviación AM | 118 MHz | 1.21 m | 60.6 cm |
| FM Comercial (referencia) | 100 MHz | 1.43 m | 71.5 cm |
| Satélites NOAA | 137 MHz | 1.04 m | 52.0 cm |
| APRS / Radioaficionados VHF | 144 MHz | 99 cm | 49.5 cm |
| AIS Marítimo | 162 MHz | 88 cm | 44.0 cm |
| Sensores IoT | 433 MHz | 33 cm | 16.5 cm |
| Telefonía (referencia) | 900 MHz | 16 cm | 8.0 cm |
| ADS-B aviones | 1090 MHz | 13.1 cm | 6.5 cm |
| L-Band satelital | 1525 MHz | 9.4 cm | 4.7 cm |

## Materiales Necesarios

Para construir un dipolo sencillo:

- **Conductor:** Alambre de cobre eléctrico (el de instalaciones domésticas de 1.5 mm² funciona perfecto). También sirven varillas de aluminio, tubos de cobre o cables de bajada.
- **Conector coaxial:** El tipo depende de tu SDR. El RTL-SDR Blog V3 usa conector **SMA hembra**, así que necesitás un cable SMA macho o un conector SMA macho con bornera.
- **Cable coaxial:** RG-58 o KMR-240 para el cable de bajada hasta el SDR.
- **Aislante central:** Un trozo de PVC, plástico o incluso una ficha de empalme eléctrica para separar los dos brazos.
- **Soldador y estaño** (si vas a hacer conexiones soldadas).

## Construcción Paso a Paso

1. **Elegí tu frecuencia objetivo** y calculá la longitud de cada brazo con la fórmula.
2. **Cortá dos trozos de conductor** con un par de centímetros de margen adicional (para ajuste fino).
3. **Prepará el aislante central:** Hacé dos agujeros en el bloque de PVC, separados unos 2-3 cm, por donde pasarán los conductores.
4. **Conectá cada brazo al coaxial:**
   - Un brazo al **conductor central** del cable coaxial.
   - El otro brazo a la **malla exterior** (blindaje) del coaxial.
   - Usá el aislante central para que los brazos no se toquen entre sí.
5. **Instalá y orientá** según el uso (ver sección siguiente).
6. **Ajuste fino (opcional):** Si tenés un NanoVNA o medidor de SWR, acortá gradualmente los brazos hasta que la resonancia sea mínima en la frecuencia objetivo.

## La Polarización: Horizontal vs. Vertical

La orientación de la antena define la **polarización** de las ondas que recibe mejor:

### Dipolo Horizontal
Los brazos están paralelos al suelo. La polarización resultante es **horizontal**:
- Ideal para: **Onda Corta (HF)**, emisoras de AM broadcasting, radioaficionados en banda de 40/20 metros
- Las señales ionosféricas de HF suelen llegar con polarización horizontal o elíptica

### Dipolo Vertical
Un brazo apunta al cielo y el otro al suelo. Polarización **vertical**:
- Ideal para: **VHF/UHF terrestre** (aviación, APRS, barcos AIS, comunicaciones locales)
- Las estaciones terrestres (torres de control, repetidores, walkie-talkies) transmiten generalmente en polarización vertical

### V-Dipole (El Truco para Satélites)
Los brazos se abren formando una "V" a 120 grados, con la antena **horizontal y acostada**. Esta configuración:
- Atenúa las señales terrestres verticales (FM, celular) en ~20 dB
- Solo pierde 3 dB frente a la polarización circular de los satélites
- Es la configuración **ideal para satélites NOAA (137 MHz)** y la ISS (145 MHz)

## Consejos de Instalación

- **Altura:** Cuanto más alta, mejor visión del horizonte. Cada metro de altura extra mejora la recepción de señales distantes.
- **Alejada de metales:** Estructuras metálicas grandes (balcones, barandas, canaletas) pueden deformar el diagrama de radiación y desajustar la resonancia.
- **El cable hacia abajo:** Llevá el cable coaxial en ángulo de 90 grados respecto a los brazos, para minimizar la interferencia de la onda común (common mode current).

---

## Preguntas Frecuentes

**¿Necesito un balun para el dipolo?**
Para una recepción simple con SDR, generalmente no. El balun mejora el aislamiento entre el cable coaxial y los brazos, pero en aplicaciones de solo recepción la diferencia es marginal. Para transmisión, sí se recomienda.

**¿Puedo usar una sola varilla en lugar de dos?**
Una sola varilla sería un monopolo, que necesita un plano de tierra en el conector para funcionar correctamente. El dipolo con dos brazos tiene la ventaja de ser autosuficiente: funciona bien sin plano de tierra adicional.

**¿Cuánto afecta si la longitud no es exacta?**
Para recepción SDR, la tolerancia es bastante amplia. Si la antena está ±5% de la longitud ideal, seguís recibiendo bien. El efecto principal de estar "desajustada" es que el SWR sube (la impedancia deja de ser puramente resistiva), pero para recepción esto no es crítico porque no hay potencia de transmisión que "rebotar".

---

### 🛍️ ¿Preferís la solución ya lista?
Si preferís ir por la solución lista y testeada, el Kit V3 viene con la base dipolo perfecta:
- **[Kit Antena Dipolo Multipropósito para SDR - Portátil y Versátil](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)**
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)**