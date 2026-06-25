---
title: "Cómo Compartir Datos"
description: "Aprendé cómo enviar los datos de tus decodificadores a los servidores de agregación de Airframes."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["airframes", "feed", "tutorial", "acars", "vdl2", "hfdl"]
category: "Decodificación"
difficulty: "Intermedio"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

![Image 1: Airframes Logo](/images/airframes/logo.svg)

Compartir datos (*Feeding*) requiere que ya tengas una recepción activa de datos de aviación (provenientes de aeronaves, estaciones terrestres, etc.) utilizando uno o más dispositivos SDR.

## Instaladores de Airframes (Recomendado para Principiantes)

La forma más fácil de empezar es con los [Instaladores de Airframes](https://install.airframes.sh/), los cuales proporcionan una configuración de un solo comando para decodificadores ACARS, VDL2 y HFDL en Linux, macOS y Windows (a través de WSL):

```bash
curl -sSL https://install.airframes.sh/installer | bash
```

El instalador te guiará para seleccionar tu tipo de decodificador, configurar tu SDR y establecer el envío de datos hacia Airframes.

## Docker con ACARS Hub (Recomendado para Usuarios Experimentados)

[ACARS Hub](https://github.com/sdr-enthusiasts/docker-acarshub), de la comunidad SDR Enthusiasts, es un sistema basado en Docker que ejecuta múltiples decodificadores y proporciona un panel web local (dashboard) para ver los mensajes que recibes. Utilizá `acars_router` para deduplicar mensajes y compartirlos a servicios de agregación como Airframes.

Revisá la guía "Compartir datos con Docker" para ver la configuración completa.

## Clientes Feeder

Los clientes de envío (*feeder clients*) son pequeñas piezas de software, a menudo en forma de scripts, que toman la salida de tu software receptor y envían esos datos a un servidor remoto.

Algunos clientes son sofisticados y pueden filtrar u optimizar qué datos se envían. Otros clientes, simplemente envían todo completamente sin filtrar.

### Envío directo desde decodificadores

La mayoría de los decodificadores modernos pueden enviar datos a Airframes directamente sin necesitar un cliente feeder por separado. Acá tenés los puntos de acceso de ingesta de Airframes:

| Tipo de Dato | Protocolo | Endpoint | Puerto |
| --- | --- | --- | --- |
| VHF ACARS | UDP | feed.airframes.io | 5550 |
| VDL2 | UDP | feed.airframes.io | 5552 |
| VDL2 | TCP | feed.airframes.io | 5553 |
| HFDL | UDP | feed.airframes.io | 5556 |

Consulta las guías individuales de cada decodificador para conocer las banderas exactas de la línea de comandos:

*   **acarsdec** — Usá `-j feed.airframes.io:5550`
*   **dumpvdl2** — Usá `--output decoded:json:udp:address=feed.airframes.io,port=5552`
*   **dumphfdl** — Usá `--output decoded:json:udp:address=feed.airframes.io,port=5556`

## Instalación Manual

Para aquellos que prefieren compilar y configurar todo desde cero:

*   **Documentación de thebaldgeek**: Guías completas que cubren la configuración de hardware, software y envío para cada medio ACARS (VHF, VDL, HFDL, Inmarsat Banda-L/Banda-C e Iridium). Esta documentación en inglés ha sido una inspiración para el proyecto Airframes y sigue siendo uno de los mejores recursos de la comunidad. Comenzá en esta web si no estás seguro de qué camino tomar.
*   **acarsdec** a través del script de instalación de wiedehopf
*   **dumpvdl2** a través del script de instalación de wiedehopf

## AirwavesOS (anteriormente Airframes Receiver OS / AROS)

Si usás [AirwavesOS](https://docs.airframes.io/docs/aros), los clientes feeder ya están preinstalados para la mayoría de los servicios y están listos para ser configurados como una Salida (`Output`). Podés alimentar múltiples servicios de agregación. Esta será la forma más sencilla de comenzar para casi cualquier persona. *(En desarrollo).*

## Otras Distribuciones

Si usás una distribución de SO proveniente de algún otro servicio de agregación, necesitarás instalar y/o configurar un cliente de envío para transmitir tus datos hacia otros servicios. Por regla general, el integrador que armó esa distribución probablemente ya incluyó su propio cliente feeder, pero muy probablemente necesitarás añadir manualmente los clientes para cualquier otro servicio de agregación al que desees contribuir.
