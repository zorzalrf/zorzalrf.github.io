---
title: "¿Por qué mi SDR recibe poco? Solucionando interferencias de FM"
description: "El ruido y las estaciones fantasma son el problema número uno en las ciudades. Descubrí cómo un filtro de rechazo salva tu recepción."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["ruido", "interferencias", "fm", "filtros", "sdr"]
category: "Hardware y Antenas"
difficulty: "Principiante"
readingTime: 5
---

Abrís tu programa de SDR (SDR# o SDR++) esperando escuchar bandas aeronáuticas, satélites, o la estación espacial. 

Pero en lugar de ver señales nítidas en la pantalla, ves una pared de "pasto" eléctrico constante. Peor aún: mientras sintonizás frecuencias altas (como 137 MHz o 250 MHz) escuchas de fondo... ¿un partido de fútbol? ¿música pop?

Felicidades, tu SDR está sufriendo el problema más común de la radioescucha urbana: **La desensibilización por sobrecarga de FM comercial.**

## ¿Qué es la Desensibilización?

Las estaciones de radio FM comerciales (88 a 108 MHz) transmiten con muchísima potencia. Hablamos de miles, a veces decenas de miles de Watts, desde antenas enormes en lo alto de edificios y cerros. 

Tu pequeño receptor SDR está diseñado para escuchar señales increíblemente débiles provenientes del espacio a fracciones de Watt. 

Cuando intentas escuchar un satélite, pero vivís a unos kilómetros de una torre de radio FM, la energía brutal de la estación de FM "enceguece" el chip de tu SDR. Como un ojo humano encandilado por las luces altas de un auto, el SDR reduce su ganancia drásticamente para protegerse, y deja de ver las señales pequeñas que están en la oscuridad.

Además, esa energía brutal hace que las radios FM se "reflejen" como estaciones fantasmas (aliasing/imágenes) en lugares del espectro donde no deberían estar.

## La única solución verdadera

Bajar la ganancia en el software de tu SDR a veces ayuda un poco a eliminar a los "fantasmas", pero esto significa que también dejas de escuchar lo que realmente querías.

La única forma física y definitiva de solucionar este problema sin perder sensibilidad es cortar el problema de raíz antes de que entre al equipo. Para esto existe una pequeña herramienta milagrosa: El **Filtro de Rechazo FM (FM Trap)**.

## ¿Qué hace el FM Trap?

Un [Filtro Rechazo Banda FM (88-108 MHz)](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia) es un componente pasivo (no requiere pilas ni energía) que se conecta como si fuera una extensión entre tu antena y tu SDR.

Actúa como un portero estricto: 
* Cuando llega una señal entre 0 y 87 MHz, la deja pasar perfectamente.
* Cuando llega una señal entre 109 MHz y 1000 MHz, la deja pasar perfectamente.
* Pero cuando detecta frecuencias entre **88 y 108 MHz**, literalmente las aplasta (atenuación de >50 decibelios), bloqueando que entren al receptor SDR.

## El resultado

En cuanto enchufás un [FM Trap](https://zorzalrf.empretienda.com.ar/filtros/filtro-rechazo-banda-fm-88-108-mhz-elimina-interferencia) en tu sistema:
1. Las estaciones fantasmas que ensuciaban tu pantalla desaparecen por arte de magia.
2. El piso de ruido general baja drásticamente, haciendo la pantalla más oscura y "limpia".
3. Ahora podés **subir la ganancia** de tu SDR al máximo de forma segura, revelando de repente satélites y comunicaciones débiles que antes estaban ocultas por la sobrecarga.

Si vivís en una zona metropolitana o tenés una antena de FM visible desde tu casa, no se trata de un accesorio opcional: un filtro de rechazo de FM es probablemente la mejor inversión inicial que podés hacer después de comprar tu equipo.
