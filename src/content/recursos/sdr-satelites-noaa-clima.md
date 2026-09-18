---
title: "Cómo descargar imágenes del clima en vivo desde satélites NOAA"
description: "Aprendé a interceptar los satélites meteorológicos NOAA 15, 18 y 19 que transmiten imágenes en 137 MHz. Configuración V-Dipole, software WXtoImg y NOAA-APT para recibir tus primeras imágenes satelitales gratis."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["noaa", "satelites", "clima", "dipolo", "sdr", "argentina", "apt"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 8
---

Tres satélites del sistema **NOAA** (National Oceanic and Atmospheric Administration) de los Estados Unidos orbitan la Tierra en órbitas polares a unos 800 km de altura, pasando sobre Argentina varias veces al día. Mientras viajan, transmiten continuamente la imagen del planeta que tienen debajo usando el sistema **APT** (Automatic Picture Transmission) en la banda de **137 MHz**.

Con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y el [Kit Antena Dipolo](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) configurado en V-Dipole podés capturar estas imágenes desde tu casa. Cuando todo funciona bien, el resultado es una fotografía satelital en blanco y negro o color falso de tu país, tomada hace literalmente minutos.

## Los satélites NOAA activos

Actualmente hay tres satélites operativos que podés recibir desde Argentina:

| Satélite | Frecuencia APT | Estado |
|---|---|---|
| NOAA 15 | 137.620 MHz | Activo (señal intermitente) |
| NOAA 18 | 137.9125 MHz | Activo |
| NOAA 19 | 137.1000 MHz | Activo (el mejor) |

**NOAA 19** es el más confiable y tiene la señal más fuerte. NOAA 15 está degradándose y a veces no transmite APT. Empezá con NOAA 18 y NOAA 19.

## El Hardware: La importancia del V-Dipole

La señal APT de los satélites NOAA usa **polarización circular derecha (RHCP)**. La antena perfecta para RHCP sería una helicoidal o una cuadrifilar, pero esas son difíciles de construir. Existe un truco brillante descubierto por la comunidad amateur: **la antena V-Dipole horizontal**.

Al poner la antena en posición horizontal formando una V abierta, tiene una pérdida de solo 3 dB frente a la señal RHCP del satélite, pero una pérdida de 20 dB frente a las señales FM terrestres verticales que podrían saturar tu receptor. Es decir: **filtra el ruido terrestre y recibe bien el satélite**. Perfecta.

### Cómo configurar el V-Dipole con el Kit Antena Dipolo

Con el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil):

1. Enroscá las **dos varillas largas** en la base de la antena.
2. Extendé cada varilla hasta que midan exactamente **53.4 cm** (esto la sintoniza a 137 MHz).
3. Abrí el ángulo entre las varillas a **120 grados** (una V bien abierta, casi plana).
4. Colocá la antena **completamente horizontal**, acostada como una bandeja. El vértice de la V puede apuntar al Norte o al Sur, el resultado es similar.
5. Colocala en el lugar más alto disponible con cielo despejado: techo, balcón, terraza.

> **Consejo crítico:** El satélite pasa de horizonte a horizonte en unos 15 minutos. Si tenés edificios o árboles bloqueando el horizonte en alguna dirección, la imagen va a tener franjas negras en esa parte. Cuanto más cielo abierto, mejor la imagen.

## Cuándo pasan los satélites

Necesitás saber exactamente a qué hora va a pasar el satélite sobre tu ciudad para estar listo. Las mejores herramientas son:

- **Heavens-Above (heavens-above.com):** Ingresá tus coordenadas y te da el horario exacto con el azimuth de cada pase.
- **N2YO (n2yo.com):** Similar, con visualización del pase en un mapa.
- **Orbitron (Windows):** Software de escritorio con predicción automática y alertas.

Anotá la frecuencia del satélite que querés recibir y el horario de su próximo pase sobre tu ciudad. Los pases útiles son los que tienen una elevación máxima mayor a 20 grados (los de horizonte rasante dan imágenes muy ruidosas).

## El Software: Grabar y Decodificar

Para capturar una imagen de satélite NOAA necesitás **dos programas** trabajando juntos:

### Paso 1: Grabar el audio con SDR# o SDR++

1. Sintonizá la frecuencia del satélite (ej. 137.1000 MHz para NOAA 19) en modo **WFM** (FM de banda ancha, ancho de banda de 34 kHz).
2. Justo antes de que llegue el pase, empezá a grabar el audio en formato **WAV** (en SDR# usás el botón de grabación de audio; en SDR++ buscás el módulo "Audio Recorder").
3. La señal del satélite es inconfundible: al principio escuchás un pitido sinusoidal muy agudo y constante (el "tono piloto"), seguido de un sonido de "static + zumbido" rítmico que va formando la imagen línea por línea.
4. Grabá todo el pase hasta que la señal se pierda en el horizonte.

### Paso 2: Decodificar el archivo WAV a imagen

Con el archivo de audio grabado, usá uno de estos decodificadores:

- **NOAA-APT (multiplataforma, gratuito, recomendado):** Programa simple y moderno. Solo arrastás el WAV y te genera la imagen. Disponible para Windows, Linux y Mac en `noaa-apt.mbernasocchi.net`.
- **WXtoImg (Windows/Linux, el clásico):** Más antiguo pero con más funciones: mejora de imagen, color falso, superposición de mapas. Funciona con el audio en vivo desde tu SDR (sin necesidad de grabar primero).
- **SatDump (multiplataforma):** La opción más avanzada de la comunidad moderna. Puede decodificar NOAA, Meteor M y otros satélites con herramientas de mejora de imagen integradas.

## Interpretando tu primera imagen

Una imagen APT bien capturada tiene esta estructura:
- **Lado izquierdo:** Canal infrarrojo (nubosidad nocturna y temperatura)
- **Lado derecho:** Canal visible (fotografía óptica del día)
- Las franjas telemetrías en los bordes permiten calibrar la imagen

Con buenas condiciones y un pase de elevación máxima alta, podés distinguir la costa de Argentina, la Cordillera de los Andes, los bancos de nubes y los frentes meteorológicos.

---

## Preguntas Frecuentes

**¿Necesito un LNA para recibir los satélites NOAA?**
No necesariamente. La señal de NOAA es relativamente fuerte. Con el V-Dipole bien orientado y sin obstáculos en el horizonte, un RTL-SDR V3 puede recibir imágenes decentes sin LNA. El LNA sí mejora la relación señal-ruido notablemente en pases de baja elevación.

**¿Por qué mis imágenes tienen franjas negras o blancas?**
Las franjas negras son pérdidas de señal causadas por obstrucciones en el horizonte (edificios, árboles). Las franjas blancas son interferencias (generalmente de FM o 4G). Probá el filtro FM Trap si vivís en ciudad.

**¿Puedo recibir el satélite Meteor M2 también?**
Sí, pero usa un sistema de modulación diferente (LRPT) que requiere software diferente (SatDump o MMTTY). La calidad de imagen de Meteor M2 es mucho mejor (imágenes a color nativas de mayor resolución), pero la configuración es más compleja.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Capturá tus primeras imágenes satelitales con el equipo correcto:
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)** — Todo lo que necesitás en un paquete
- **[Filtro Rechazo Banda FM (88-108 MHz)](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia)** — Esencial en zonas urbanas para eliminar interferencias
