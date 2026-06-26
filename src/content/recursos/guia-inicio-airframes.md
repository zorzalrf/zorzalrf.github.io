---
title: "Empezando con Airframes.io"
description: "Guía de inicio para comenzar a capturar y enviar datos ACARS a la red de Airframes. Conoce las opciones de instalación más recomendadas."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "airframes", "acars", "vdl2", "hfdl", "rtl-sdr"]
category: "Airframes"
difficulty: "Principiante"
readingTime: 5
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

![Image 1: Airframes Logo](/images/airframes/logo.svg)

Esta guía te ayudará a pasar de cero a estar enviando datos ACARS a Airframes.

Si aún no estás familiarizado con el seguimiento de aeronaves y las tecnologías que implica, te sugerimos que leas primero la Reseña Tecnológica y la sección ¿Qué es Alimentar/Feed? (disponibles en la web original en inglés).

## Inicio Rápido

El camino más rápido desde que abres la caja hasta que envías datos:

1.  **Consigue un dongle [RTL-SDR](/catalogo/sdr/) y una [antena](/catalogo/antenas/)** — Un RTL-SDR Blog V3, junto a una antena VHF básica, funcionarán.
2.  **Prepara una Raspberry Pi o una computadora Linux** — Cualquier Raspberry Pi 3 o más reciente, o una máquina Linux x86.
3.  **Ejecutá el instalador de Airframes:**
    ```bash
    curl -sSL https://install.airframes.sh/installer | bash
    ```
4.  **Verificá tu feed** — Visita [app.airframes.io/stations](https://app.airframes.io/stations) y busca el ID de tu estación.

¡Eso es todo — ya estás alimentando a la red!

## Eligiendo Tu Camino

Hay varias formas de configurar tu estación dependiendo de tu nivel de experiencia y tus preferencias:

### Camino 1: Instaladores de Airframes (El más fácil)

Los [Instaladores de Airframes](https://install.airframes.sh/) proporcionan una configuración de un solo comando para los decodificadores de ACARS, VDL2 y HFDL. Funciona en Linux, macOS y Windows (a través de WSL). Es la mejor opción para comenzar rápidamente.

### Camino 2: Docker con ACARS Hub

[ACARS Hub](https://docs.airframes.io/docs/feeding/Docker) es una configuración basada en Docker que ejecuta los decodificadores en contenedores y proporciona un panel web local (dashboard) donde se muestran los mensajes que has recibido. Es la mejor opción para usuarios familiarizados con Docker que desean una interfaz visual y una gestión sencilla de múltiples decodificadores.

### Camino 3: Instalación Manual

Compilá y configurá cada decodificador desde el código fuente. Esto te da el mayor control y es ideal para usuarios experimentados que desean afinar cada detalle. Consulta las guías individuales de cada decodificador (en inglés):

*   [acarsdec](https://docs.airframes.io/docs/decoders/install-acarsdec) para VHF ACARS
*   [dumpvdl2](https://docs.airframes.io/docs/decoders/install-dumpvdl2) para VDL2
*   [dumphfdl](https://docs.airframes.io/docs/decoders/install-dumphfdl) para HFDL

### Camino 4: AirwavesOS

[AirwavesOS](https://docs.airframes.io/docs/aros/introduction) es una imagen de SO personalizada basada en Debian para Raspberry Pi que ya viene con todo preinstalado. Flashea, arranca, configurá a través de la interfaz web, y listo. *(En desarrollo.)*

## Pasos para Empezar

1.  **Determina qué tipo de sistema deseás configurar** — Comenzá con un solo SDR para VHF ACARS o VDL2, y luego expándelo.
2.  **Adquiere las partes** — Un SDR, una antena y una computadora para ejecutar todo.
3.  **Instalá el software** — Usá uno de los caminos mencionados arriba.
4.  **Configurá las frecuencias para tu región** — Las guías de cada decodificador incluyen listas de frecuencias específicas por región.
5.  **Envía los datos a Airframes** — Apunta la salida de tu decodificador a los [puntos de entrada/ingesta de Airframes](https://docs.airframes.io/docs/feeding/how#direct-feeding-from-decoders).
6.  **Verificá en app.airframes.io** — Confirma que tu estación aparece y que se están recibiendo mensajes en [app.airframes.io/stations](https://app.airframes.io/stations).
7.  **Explora los datos** — Navega por los mensajes, vuelos y estaciones en la aplicación web de Airframes.

## ¿Necesitás Ayuda?

*   Revisá la guía de Solución de Problemas para encontrar errores comunes y sus soluciones.
*   Visitá el [Discord de Airframes](https://discord.gg/airframes) o el [Foro de la Comunidad](https://community.airframes.io/) para obtener soporte.
