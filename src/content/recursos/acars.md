---
title: "Cómo decodificar mensajes ACARS con RTL-SDR: guía rápida"
description: "Recibí mensajes de texto y telemetría de aviones en tiempo real con tu RTL-SDR. Frecuencias, software y primeros pasos para decodificar ACARS VHF en Argentina (131.550 y 131.725 MHz)."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["sdr", "acars", "aviacion", "vhf", "tutorial", "argentina"]
category: "Aviación y ACARS"
difficulty: "Intermedio"
readingTime: 6
---

El sistema **ACARS** (Aircraft Communications Addressing and Reporting System) es una red de mensajería digital que llevan los aviones desde 1978. A diferencia de la comunicación de voz que escuchás en la banda aérea VHF, ACARS transmite mensajes de texto estructurados: planes de vuelo, reportes meteorológicos, telemetría de motores, autorizaciones ATC y decenas de tipos de datos operativos más.

La buena noticia para los radioescuchas: **ACARS VHF no tiene ningún tipo de encriptación**. Cualquier persona con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y el software correcto puede decodificar estos mensajes en tiempo real mientras los aviones sobrevuelan su zona.

## ¿Cómo suena ACARS?

Antes de arrancar, es útil saber qué buscar. ACARS **no suena como voz**. Cada mensaje es una ráfaga corta (menos de un segundo) de un chirrido digital agudo, similar al tono de un viejo módem de 56k. Cuando estás sintonizado en la frecuencia correcta, escuchás silencio o ruido estático... y de repente, "¡BRRREEP!", aparece un nuevo mensaje en pantalla.

## Frecuencias ACARS en Argentina

La banda de operación de ACARS VHF está dentro del espectro de aviación civil. Las frecuencias más activas en Argentina y la región son:

| Frecuencia | Descripción |
|---|---|
| **131.550 MHz** | Frecuencia principal mundial — siempre activa |
| **131.725 MHz** | La más activa en Argentina — prioridad máxima |
| **130.025 MHz** | Frecuencia secundaria regional |
| **131.450 MHz** | Usada por algunas aerolíneas en Sudamérica |
| **129.125 MHz** | Canal adicional en Latinoamérica |

> **Consejo:** Arrancá siempre con 131.550 y 131.725. El 80% del tráfico ACARS argentino pasa por esas dos frecuencias. Si tu software puede decodificar múltiples canales a la vez (como `acarsdec`), ponelas las dos simultáneamente.

## Hardware necesario

1. **Receptor SDR**: Cualquier RTL-SDR genérico funciona para ACARS VHF. El [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) es el más confiable por su estabilidad de frecuencia (TCXO 1 PPM).
2. **Antena VHF**: Una antena telescópica ajustada a ~130 MHz (brazo de ~57 cm) o el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) con las varillas largas extendidas funcionan perfectamente.
3. **Computadora**: Windows, Linux o Mac. ACARS funciona en todos.

## Software de Decodificación

A diferencia de la banda aérea de voz (donde simplemente "escuchás"), ACARS necesita un segundo programa que convierta el audio digital en texto.

### Opción 1: SDR# + Plugin de ACARS (Windows, más fácil)
Si ya tenés SDR# instalado:
1. Sintonizá `131.725 MHz` en modo **AM**, con ancho de banda de **10 kHz**.
2. Instalá el plugin **DSD+** o **AcarsDeco2** (se integran como plugins de SDR#).
3. Los mensajes aparecerán automáticamente en una ventana secundaria.

### Opción 2: acarsdec + acarsdec-server (multiplataforma, más potente)
`acarsdec` es el decodificador de referencia de la comunidad. Tiene dos ventajas enormes sobre los plugins de SDR#:
- Puede decodificar **hasta 8 frecuencias ACARS simultáneamente** con un solo SDR
- Tiene una interfaz web local para ver los mensajes en tiempo real desde cualquier dispositivo

```bash
# Ejemplo básico: decodificar 2 frecuencias y mostrarlos en el navegador
acarsdec -r 0 131.550 131.725
```

Para ver los mensajes en un mapa y contribuir a la red global de recolección de datos, podés integrar `acarsdec` con **[Airframes.io](https://airframes.io/)**, la plataforma comunitaria más grande de ACARS. [Ver guía de Airframes →](/recursos/airframes-introduccion)

### Opción 3: VirtualAudioCable + MultiPSK (Windows, experimental)
La opción más antigua. Usás un cable de audio virtual para enviar el sonido de SDR# a un decodificador genérico como **MultiPSK** o **PDW**. Funciona, pero no es tan eficiente como las opciones anteriores.

## Primeros pasos: decodificá tu primer mensaje

1. Sintonizá tu SDR en `131.725 MHz` en modo **AM**.
2. Ajustá el ancho de banda a unos `10 kHz` (el dial de "bandwidth" en SDR#).
3. Desactivá el "Squelch" o ponelo en su valor mínimo para no perder el inicio de las ráfagas.
4. Ajustá la ganancia del SDR a un valor intermedio (30-40 dB). Demasiada ganancia puede saturar el receptor y perder mensajes.
5. Abrí tu software de decodificación.

Cuando escuches una ráfaga corta de chirrido digital (dura entre 0.3 y 1 segundo), tu programa debería mostrar algo como:

```
[09:14:32] VH-OEG | B738 | MSG: ATIS INFORMATION FOXTROT
             OUT: 0852 OFF: 0901 ON: -- IN: --
```

Ese es el reporte de salida de un avión con su matrícula, tipo de aeronave y los tiempos de la última operación.

## ¿Qué información podés ver?

Los mensajes ACARS contienen una enorme variedad de datos:
- **Reportes OOOI** (Out/Off/On/In): Registran la hora exacta en que el avión sale de la puerta, despega, aterriza y llega a la puerta de destino.
- **Posición y ETA**: Actualizaciones de latitud/longitud y hora estimada de llegada.
- **Datos meteorológicos (METARs)**: El pronóstico del tiempo en el aeropuerto de destino enviado a la cabina.
- **Reportes de motores**: Telemetría de temperatura, presión y rendimiento del motor.
- **Mensajes de texto libres**: Comunicaciones operativas entre la tripulación y la aerolínea.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Recibí los mensajes de los aviones con claridad usando el equipo adecuado:
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)**
- **[Filtro Rechazo Banda FM (88-108 MHz)](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia)** — Recomendado si vivís cerca de torres de FM