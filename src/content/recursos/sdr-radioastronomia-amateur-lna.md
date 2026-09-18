---
title: "Radioastronomía amateur: Detectando hidrógeno galáctico desde el patio"
description: "Detectá la emisión de hidrógeno neutro a 1420 MHz (la Línea del Hidrógeno) con un RTL-SDR y un LNA. Guía completa de radioastronomía amateur: antenas, software GNU Radio y técnica de promediado espectral."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["radioastronomia", "lna", "espacio", "hidrogeno", "sdr", "argentina", "gnu-radio"]
category: "Proyectos Prácticos"
difficulty: "Experto"
readingTime: 8
---

Cuando mirás el cielo nocturno, ves estrellas. Pero lo que nuestros ojos no pueden ver son las inmensas nubes de gas de hidrógeno neutro que flotan entre ellas, formando los brazos espirales de la Vía Láctea. Ese gas frío no emite luz visible, pero sí emite ondas de radio a una frecuencia muy específica: **1420.405 MHz**, conocida como la **Línea del Hidrógeno** o "21 centímetros" (la longitud de onda correspondiente).

Esta frecuencia es tan fundamental en astrofísica que el científico Nikola Tesla propuso usarla para intentar comunicarse con civilizaciones extraterrestres. Es la primera frecuencia que buscan los radiotelescópios en la búsqueda de inteligencia extraterrestre (SETI).

Con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y un [LNA de baja figura de ruido](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original), podés detectar esta señal desde el patio de tu casa. Es probablemente el experimento de radiofísica más profundo al que podés acceder con hardware de aficionado.

## El Desafío: Una Señal de Hace Miles de Años Luz

La energía de la Línea del Hidrógeno viaja miles de años luz antes de llegar a tu antena. Al aterrizar, es tan increíblemente débil que el ruido térmico de tu propio receptor (y del cable coaxial) la tapa por completo en una sola medición.

Para resolver esto, la radioastronomía amateur usa una técnica llamada **integración espectral**: en lugar de ver la señal en tiempo real, promediás miles de mediciones en el tiempo. El ruido aleatorio se "cancela" estadísticamente al promediarse, mientras que la señal real (que es consistente) emerge acumulativamente. El resultado es que la "joroba" del hidrógeno aparece en el espectro después de varios minutos de integración.

## El LNA: Absolutamente Indispensable

Sin amplificación de baja figura de ruido, la radioastronomía amateur es directamente imposible. El [LNA Wideband 50-4000 MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) tiene una **figura de ruido menor a 1 dB** a 1420 MHz, lo que lo hace adecuado para esta aplicación.

**Reglas de instalación del LNA para radioastronomía:**
1. **El LNA va lo más cerca posible de la antena** — idealmente directamente en el punto de alimentación (feed point). Cualquier tramo de cable antes del LNA agrega ruido al sistema.
2. **Alimentado por Bias-Tee** — El Bias-Tee del RTL-SDR V3 envía 4.5V por el coaxial, suficiente para alimentar el LNA sin cables adicionales. [Ver cómo activar el Bias-Tee →](/recursos/bias-tee)
3. **Dos LNA en cascada** — Para aplicaciones de radioastronomía con antenas de bocina grandes y cables largos, algunos radioastrónomos amateurs usan dos LNA en cascada (el primero en la antena, el segundo a la mitad del cable). El segundo LNA mejora la señal sin degradar significativamente la figura de ruido (el primero domina según el Teorema de Friis).

## La Antena: Área de Captura es Todo

En 1420 MHz, la longitud de onda es ~21 cm. Eso hace posible antenas más manejables que en HF. Sin embargo, la señal del hidrógeno galáctico es tan débil que necesitás el mayor **área de captura** posible.

### Opción 1: Antena de Bocina Cónica (Horn) — La del patio
Construida con chapa metálica o malla de aluminio formando un embudo piramidal o cónico. La guía de ondas en la punta conecta al LNA. Es el proyecto favorito de la comunidad:

- **Proyecto PI-MK Radiotelescope:** Instrucciones completas en el blog de Paul HB9DRI (Google: "PI-MK Radiotelescope").
- **SPIDER 230 radiotelescope:** Un diseño comunitario de código abierto muy popular.

Una bocina de 30x30 cm da resultados claros con integración de varios minutos apuntando al plano galáctico.

### Opción 2: Plato Parabólico Modificado
Si conseguís un plato de antena satelital Ku-band viejo (los de DirecTV o Fibertel, de 90-120 cm), podés reemplazar el LNB por un feed de 1420 MHz con un dipolo de longitud calculada. Las parabólicas tienen alta ganancia y excelente colimación del haz.

La modificación básica:
1. Quitá el LNB original.
2. Fabricá un dipolo de **~10.5 cm** (cuarto de longitud de onda a 1420 MHz) para el feed.
3. Conectá el dipolo al LNA directamente.
4. Montá el LNA directamente en el foco del plato.

### Opción 3: Antena de Yagi para 1420 MHz
Una Yagi de 10-12 elementos para 1420 MHz da buena ganancia (14-16 dBd) y es más fácil de apuntar a una región específica del cielo. Podés comprar kits de aluminio para radio amateur o imprimirlos en 3D.

## El Software: Integración Espectral con GNU Radio o Virgo

### Opción 1: Virgo (Python) — La más simple

**[Virgo](https://github.com/0xCoto/Virgo)** es una librería de Python diseñada específicamente para radioastronomía amateur. Automatiza la integración espectral y grafica el espectro:

```bash
# Instalación
pip install virgo-rtlsdr

# Uso básico (observación de 60 segundos)
python3 -c "
import virgo
virgo.observe(
    obs_parameters={
        'rf_gain': 30,
        'if_gain': 25,
        'bb_gain': 18,
        'center_freq': 1420.4058,
        'bandwidth': 5,
        'channels': 2048,
        't_sample': 1,
        'duration': 60
    },
    spectrometer='rtl-sdr',
    data_filename='output',
    plot_filename='espectro.png'
)
"
```

### Opción 2: GNU Radio — Para usuarios avanzados

**GNU Radio** es el entorno de procesamiento de señal de referencia en software libre. Permite construir flujos de procesamiento complejos con integración espectral, promediado de Welch y visualización en tiempo real.

El flujo básico es:
```
RTL-SDR Source → Low-Pass Filter → FFT → Vector Average → File Sink / Qt GUI
```

Requiere más conocimiento que Virgo, pero da más control y es el camino hacia proyectos más avanzados.

## El Momento del Éxito: Leyendo el Espectro

Después de varios minutos de integración con la antena apuntando al plano galáctico (busca la Vía Láctea en el cielo — en verano austral está espectacularmente alta sobre Argentina), el espectro mostrará algo parecido a esto:

```
Potencia
  ↑
  │        ╭────╮
  │       ╱      ╲
  │  ────╯        ╲────── Piso de ruido
  └──────────────────────→ Frecuencia (MHz)
         1420.4
```

Esa "joroba" sobre el piso de ruido **es el hidrógeno galáctico de la Vía Láctea**. Si la señal está ligeramente desplazada de 1420.405 MHz, es el **efecto Doppler** del movimiento del gas galáctico relativo a la Tierra — estás viendo el movimiento de los brazos espirales de nuestra galaxia directamente en tu pantalla.

---

## Preguntas Frecuentes

**¿Desde Buenos Aires o Córdoba se puede ver bien el plano galáctico?**
Sí. Argentina está en una posición privilegiada en el hemisferio sur para observar el centro galáctico y los brazos espirales. El centro de la Vía Láctea culmina alto en el cielo austral durante el verano (diciembre-febrero), cuando la señal del hidrógeno es más intensa.

**¿Necesito estar en el campo, lejos de la ciudad?**
Para la Línea del Hidrógeno a 1420 MHz, el ruido eléctrico de la ciudad (Wi-Fi, celular 4G/5G, microondas) puede interferir. No es imposible hacerlo en la ciudad, pero el campo mejora notablemente la relación señal-ruido. Un filtro de paso de banda estrecho alrededor de 1420 MHz ayuda a eliminar interferencias de otras fuentes.

**¿Es el proyecto más difícil de la lista?**
Sí, sin dudas. Requiere paciencia, comprensión de señales débiles y algo de programación para el software de integración. Pero cuando funciona, es una de las experiencias más impresionantes que ofrece este hobby: detectar la rotación de nuestra propia galaxia desde el fondo de casa.

---

### 🛍️ Hardware recomendado para radioastronomía
La combinación indispensable: LNA de ultra-baja figura de ruido + RTL-SDR estable:
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)** — Figura de ruido < 1 dB
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
