---
title: "Cómo activar el Bias-Tee en tu SDR"
description: "Si conectás un LNA pero no activás el Bias-Tee, el amplificador actúa como atenuador. Guía paso a paso para activar el Bias-Tee del RTL-SDR V3 en SDR#, SDR++ y GQRX, y cómo verificar que está funcionando."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["soporte", "bias-tee", "sdr-sharp", "gqrx", "sdr++", "lna", "alimentacion"]
category: "Hardware y Antenas"
difficulty: "Principiante"
readingTime: 5
---

El **Bias-Tee** es una función del [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) que permite enviar **4.5 Voltios DC** a través del mismo cable coaxial que transporta la señal de radio, usando el conductor central del cable. Esto te permite alimentar eléctricamente un [LNA (Amplificador de Bajo Ruido)](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) instalado en la base de la antena, sin necesidad de llevar cables de alimentación adicionales hasta el techo.

> ⚠️ **Advertencia importante:** Si conectás un LNA al SDR pero **no activás** el Bias-Tee, el LNA no recibe alimentación y actúa como un **atenuador pasivo** en tu línea. En vez de amplificar la señal, la va a debilitar. Siempre activá el Bias-Tee cuando usés el LNA.

## Cómo verificar que el Bias-Tee está activado

Una forma sencilla de confirmar que los 4.5V están presentes en el conector de antena es medir con un multímetro entre el conductor central (SMA) y la carcasa exterior del conector. Debería leer entre 4 y 5 Voltios en modo DC. Si lee 0V, el Bias-Tee no está activado.

---

## SDR# (SDRSharp) — Windows

1. Abrí SDR# y seleccioná tu dispositivo RTL-SDR en el menú desplegable.
2. Hacé clic en el ícono de **engranaje** (⚙) que aparece a la izquierda del menú del dispositivo.
3. Se abre la ventana de "Configuración del Dispositivo RTL-SDR".
4. Buscá la casilla que dice **"Bias-T"** (en versiones más nuevas del plugin) o **"Offset Tuning"** (en versiones más antiguas).
5. **Marcá la casilla** para activar el Bias-Tee.
6. Hacé clic en "Close" — el cambio es inmediato.

> **Nota:** Asegurate de que el LNA esté conectado a la antena y al SDR **antes** de activar el Bias-Tee. Nunca actives el Bias-Tee con el extremo de la antena suelto al aire: el pin SMA puede quemar el circuito si toca algo metálico con 4.5V en el conductor central.

---

## SDR++ — Windows, Linux, macOS

SDR++ tiene el control de Bias-Tee integrado directamente en el panel lateral izquierdo:

1. Abrí SDR++ y elegí tu dispositivo RTL-SDR en la sección **Source**.
2. Expandí el panel del dispositivo haciendo clic en el nombre.
3. Bajá hasta la sección de **Gain** (ganancia).
4. Justo debajo de los controles de ganancia, vas a ver una opción llamada **"Bias Tee"** con un toggle (casilla deslizante).
5. Activalo (el toggle se pone azul o verde).

En SDR++ el cambio también es instantáneo y no requiere reiniciar.

---

## GQRX — Linux y macOS

En GQRX (el cliente SDR estándar en sistemas basados en GNU Radio), hay dos métodos:

### Método 1: Desde la interfaz gráfica (si el driver lo soporta)
1. Andá al menú **Input Controls** (Controles de Entrada) en la barra lateral.
2. En la parte inferior de esa sección, buscá la opción **"Bias Tee"** o **"Hardware AGC"**.
3. Habilitala haciendo clic.

> **Aviso:** No todos los builds de GQRX exponen el Bias-Tee en la interfaz gráfica. Depende de la versión y del sistema operativo.

### Método 2: Por terminal con rtl_biast (el más confiable en Linux)

Si la interfaz gráfica no muestra la opción, usá la herramienta de línea de comandos `rtl_biast`:

```bash
# Instalar
sudo apt-get install rtl-sdr   # La mayoría de las distros lo incluye

# Activar el Bias-Tee (ANTES de abrir GQRX)
rtl_biast -b 1

# Desactivar el Bias-Tee
rtl_biast -b 0
```

**Importante:** Ejecutá este comando **antes** de abrir GQRX. Una vez que GQRX toma control del dispositivo, el comando `rtl_biast` ya no puede acceder.

---

## rtl_biast — Herramienta de línea de comandos (todos los SO)

Para usuarios avanzados, `rtl_biast` funciona en Windows, Linux y macOS como herramienta independiente:

```bash
# Activar
rtl_biast -b 1

# Desactivar
rtl_biast -b 0

# Con múltiples SDRs (usar el índice del dispositivo)
rtl_biast -d 1 -b 1   # Activa el Bias-Tee del segundo SDR
```

Esta herramienta es especialmente útil cuando usás el LNA con software que no tiene control nativo de Bias-Tee (como algunos analizadores de espectro personalizados o scripts de Python).

---

## Preguntas Frecuentes

**¿El Bias-Tee daña el SDR si lo activo sin el LNA conectado?**
Con el conector de antena suelto (sin conectar nada), no hay problema: el circuito Bias-Tee está diseñado para que el pin central quede en el aire sin corriente. El riesgo aparece si el pin SMA toca accidentalmente un objeto metálico a tierra, lo que puede crear un cortocircuito de los 4.5V. Siempre conectá la antena antes de activar.

**¿El [RTL-SDR USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original) también tiene Bias-Tee?**
Sí, completamente. Ambas versiones del V3 (USB-A y USB-C) tienen el mismo circuito de Bias-Tee a 4.5V. Se activa exactamente de la misma forma.

**¿El Bias-Tee funciona con otros LNA que no sean el de RTL-SDR Blog?**
Sí, siempre y cuando el LNA acepte alimentación entre 4 y 5 Voltios por el coaxial (la mayoría de los LNA de la comunidad SDR lo hacen). Verificá las especificaciones de tu LNA antes de conectarlo.

---

### 🛍️ Hardware para aprovechar el Bias-Tee
- **[LNA Wideband 50-4000MHz RTL-SDR Blog](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original)** — Diseñado para alimentarse por Bias-Tee
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Receptor RTL-SDR Blog V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original)**