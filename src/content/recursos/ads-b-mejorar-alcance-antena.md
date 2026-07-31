---
title: "Cómo mejorar tu recepción ADS-B y ver aviones a cientos de kilómetros"
description: "Pasá de ver solo el tráfico local a recibir aviones a 400 kilómetros de distancia optimizando tu antena, filtrado y amplificación en 1090 MHz."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["ads-b", "antenas", "filtros", "lna", "aviones"]
category: "Hardware y Antenas"
difficulty: "Intermedio"
readingTime: 6
---

Armaste tu primera estación Raspberry Pi con PiAware, FlightRadar24 o FlightAware. Enchufaste tu SDR, tiraste la pequeña antenita que vino en la caja por la ventana y ¡eureka!, estás viendo aviones en la pantalla. 

Pero después de la emoción inicial, mirás el mapa y te das cuenta de que solo ves los aviones que pasan directamente sobre tu cabeza, en un radio de quizás 20 o 30 kilómetros. 

¿Cómo hacen otras personas para tener un rango de 400 kilómetros? La respuesta está en la física pura y en usar el hardware correcto.

## 1. Línea de Visión (LoS): El factor innegociable

A 1090 MHz (la frecuencia del ADS-B), las ondas de radio viajan estrictamente en línea recta. No rebotan en la atmósfera ni atraviesan bien las paredes de ladrillo. 

Si entre tu antena y un avión hay un edificio, una montaña o un árbol grande y tupido, la señal se bloquea. **No importa cuánta plata gastes en equipos, si la antena no "ve" el avión físicamente, no lo vas a recibir.**

Por eso, el primer paso para aumentar tu alcance brutalmente es poner la antena en el punto más alto posible y despejado de tu techo.

## 2. El Filtro SAW (La armadura de tu receptor)

Imaginá que estás en una fiesta intentando escuchar a un amigo que te habla en susurros (esa es la señal ADS-B), pero al lado tuyo hay un parlante gigante pasando reguetón al máximo (esas son las torres de telefonía celular 4G/5G y las radios FM locales). 

Tu SDR, sin quererlo, recibe todo el ruido del parlante, y se satura tanto que se vuelve sordo al susurro del avión.

Un filtro pasabanda SAW cortará absolutamente todo lo que no esté en la frecuencia exacta de 1090 MHz, permitiendo que tu receptor solo preste atención a los aviones.

## 3. Amplificación: Empujando la señal

Si ya tenés línea de visión y un buen filtro, el siguiente paso es contrarrestar la pérdida del cable. Si bajás el cable desde el techo hasta tu habitación, estás perdiendo señal valiosa en el viaje.

Aquí entra en juego el amplificador. Añadir un [LNA Wideband](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) directamente en el techo (justo debajo de la antena) tomará esa débil señal de los aviones lejanos y le dará un "empujón" gigante para que baje por tu cable fuerte y clara.

## 4. La Antena Específica

Esa antena telescópica genérica que usaste al principio está bien para probar, pero su diagrama de radiación no es el ideal para ADS-B. Las antenas colineales comerciales están diseñadas para comprimir su "visión" hacia el horizonte, ignorando el espacio directamente arriba (total los aviones de arriba ya tienen señal fuerte) y enfocándose en atrapar esos aviones débiles a 400 km a la redonda.

### La solución definitiva: El Combo Profesional

Si estás listo para dejar de jugar y armar un nodo ADS-B serio (ideal para contribuir a redes globales y tener el mejor ranking local), no podés comprar estos elementos por separado. Necesitás que estén diseñados para trabajar juntos.

Nuestra mayor recomendación es el [Kit ADS-B 1090 MHz Profesional: Antena + Filtro + Cable](https://zorzalrf.empretienda.com.ar/antenas/estacion-ads-b-zorzal-rf-antena-cable-filtro). 
Este kit resuelve todos los problemas de una vez:
* Incluye una **Antena colineal externa** enfibrada resistente a la intemperie (para subirla al techo).
* Un **Filtro SAW 1090 MHz** dedicado para eliminar la saturación celular.
* **Cable coaxial KMR-240** de bajísima pérdida, para que la señal no muera en el trayecto de bajada.

Combinando este kit con un cielo despejado, tu mapa de aviones explotará de tráfico de la noche a la mañana.
