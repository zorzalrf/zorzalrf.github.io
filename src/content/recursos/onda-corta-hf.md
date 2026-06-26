---
title: "Guía de Iniciación a la Onda Corta (HF): Escuchando al Mundo"
description: "Sintonizá radios internacionales, radioaficionados y mapas climáticos entendiendo las diferencias entre Muestreo Directo y Upconverters."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["hf", "onda-corta", "spyverter", "airspy", "sdr"]
category: "SDR Avanzado"
difficulty: "Intermedio"
readingTime: 6
---

La Onda Corta (High Frequency o HF, entre 3 MHz y 30 MHz) es el lugar donde ocurre la verdadera magia de la radio a larga distancia. Gracias a la ionosfera, las señales en HF rebotan alrededor del planeta, permitiéndote escuchar emisoras de Rusia, China o Japón desde tu propia casa en Argentina.

A diferencia del VHF y UHF (donde escuchamos aviones y barcos en línea de visión), en HF podés interceptar:
- **Radioaficionados (SSB):** Hablando con el otro lado del mundo.
- **WEFAX:** Mapas climáticos transmitidos por las armadas para los buques en altamar.
- **Radiodifusión Internacional:** Emisoras de noticias globales.

## El problema del RTL-SDR en HF

Los receptores RTL-SDR convencionales (como el V3) fueron diseñados originalmente para TV digital (UHF). Para hacerlos bajar a HF, se utiliza un "truco" por software llamado **Muestreo Directo (Direct Sampling - Q Branch)**. 

Si bien este truco funciona y te permite tener un primer pantallazo de la onda corta, la recepción sufre de imágenes fantasma, mucha interferencia (aliasing) y falta de sensibilidad.

## La Solución Profesional: Upconverters

Si querés escuchar HF en serio con tu RTL-SDR o Airspy Mini, necesitás un equipo de hardware dedicado. La mejor forma de hacerlo es usando un **Upconverter**.

### SpyVerter R2
El **SpyVerter R2** es un dispositivo de calidad profesional que se coloca entre tu antena y tu SDR. Su trabajo es tomar todas las señales bajas de HF (0 a 31 MHz) y "subirlas" a la banda de VHF (120 a 151 MHz), donde tu SDR se siente increíblemente cómodo y sensible. 

* Ventaja: Elimina completamente el ruido y las interferencias de la banda de AM local.
* Ideal para: Usuarios que ya tienen un Airspy Mini o [RTL-SDR V3](/catalogo/?type=SDR).

## La Solución Definitiva: [Airspy HF+ Discovery](/catalogo/?type=SDR)

Si estás verdaderamente dedicado al "Diexismo" (escucha de señales extremadamente lejanas) o querés recibir imágenes débiles de WEFAX marítimo, la recomendación de Zorzal RF es el Airspy HF+ Discovery.

Este no es un SDR modificado, sino que fue diseñado desde cero **específicamente para alta fidelidad en frecuencias bajas**. Gracias a sus convertidores analógico-digitales de nivel de laboratorio (18 bits de resolución real) y su rechazo de interferencias, el HF+ es capaz de separar estaciones lejanas diminutas incluso si tenés una radio AM local transmitiendo con miles de vatios al lado de tu casa.

> **💡 Consejo de Hardware:** Recordá que en HF la [antena](/catalogo/?type=Antena) es gigantesca en tamaño comparada con UHF. Un dipolo simple o un hilo largo (Random Wire) de 10 a 20 metros colgado en tu jardín es el compañero ideal para empezar en estas frecuencias.
