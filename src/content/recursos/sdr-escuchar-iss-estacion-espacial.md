---
title: "Escuchando a los Astronautas: Cómo sintonizar la Estación Espacial Internacional (ISS)"
description: "Descubrí cómo captar conversaciones de los astronautas y descargar las imágenes conmemorativas SSTV que la ISS transmite hacia la Tierra."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["iss", "espacio", "sstv", "astronautas", "sdr"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 6
---

A unos 400 kilómetros por encima nuestro viaja el laboratorio más rápido de la historia: la Estación Espacial Internacional (ISS). Lo que muchos ignoran es que a bordo viaja equipamiento de radioaficionado (ARISS) que transmite señales hacia la Tierra todo el tiempo.

Usando tu [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf), podés sintonizar la ISS cuando pase sobre tu ciudad para escuchar a los astronautas o decodificar fotografías espaciales.

## ¿Qué transmite la ISS?

La estación espacial tiene dos actividades principales que podemos captar:
1. **Contactos por voz (145.800 MHz):** Frecuentemente los astronautas realizan contactos escolares, respondiendo preguntas de alumnos alrededor del mundo. Durante estos pases, transmiten su voz en banda de 2 metros.
2. **Eventos SSTV (Televisión de Barrido Lento - 145.800 MHz):** Un par de veces al año, los astronautas organizan "eventos SSTV" encendiendo una computadora que emite constantemente un sonido que, al decodificarse en la PC, forma una fotografía conmemorativa a color.

## ¿Qué antena usar?

Al estar tan alta en el cielo y transmitiendo en VHF, la señal de la ISS suele ser lo suficientemente fuerte como para no requerir equipos súper exóticos. 

Si tenés el [Kit RTL-SDR Blog V3 + Antena Dipolo](https://zorzalrf.empretienda.com.ar/antenas/kit-rtl-sdr-blog-v3-antena-dipolo-sdr-completo), estás preparado:
* Enroscá las varillas largas a la base.
* Extendelas hasta que midan unos **49 a 50 centímetros** cada una.
* Colocalas en forma de dipolo horizontal recto (180 grados) o en configuración de V-Dipole. 
* ¡Subite a tu techo! La línea de visión es crítica para atrapar a la estación.

## ¿Cuándo pasa la ISS?

La ISS viaja a 28,000 km/h, por lo que un pase dura apenas unos 10 a 12 minutos de horizonte a horizonte. 
Para saber cuándo encender tu SDR, podés usar aplicaciones para Android como **ISS Detector** o páginas web como N2YO o Heavens-Above. Estas herramientas te dirán la hora exacta en la que asomará y su trayectoria en el cielo.

## Decodificando las fotos (SSTV)

Si hay un evento SSTV programado:
1. Sintonizá en 145.800 MHz usando NFM (FM de banda estrecha) en tu programa como SDR#.
2. Cuando escuches el particular pitido de la transmisión, enrutá ese audio (usando un cable virtual como Virtual Audio Cable) a un programa de decodificación gratuito como **MMSSTV** o **RX-SSTV**.
3. El programa empezará a "pintar" la foto en tu pantalla línea por línea como si fuera una impresora en tiempo real. 

¡Es una de las experiencias más emocionantes para estrenar tu equipo SDR!
