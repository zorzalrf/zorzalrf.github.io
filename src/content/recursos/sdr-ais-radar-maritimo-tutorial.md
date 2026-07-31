---
title: "Seguimiento de Buques: Cómo armar tu propio radar marítimo (AIS)"
description: "Si vivís cerca de un puerto, un río navegable o el mar, podés rastrear el tráfico marítimo comercial en vivo desde tu PC."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["ais", "barcos", "maritimo", "sdr", "radar"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 6
---

Así como los aviones tienen el sistema ADS-B para transmitir su posición en tiempo real, la industria marítima mundial utiliza el **AIS (Automatic Identification System)**.

Todos los buques de pasajeros, barcos de carga y grandes pesqueros transmiten constantemente su posición GPS, rumbo, velocidad, bandera y nombre en dos frecuencias fijas de VHF: **161.975 MHz** y **162.025 MHz**. 

Interceptar estos datos y volcarlos en un mapa digital es muy similar a rastrear aviones, ¡pero rastreando monstruos de acero!

## Hardware necesario para atrapar barcos

Las frecuencias de AIS (162 MHz) tienen un comportamiento estrictamente de línea de visión (a menos que ocurran extrañas condiciones atmosféricas). Por lo tanto, tu antena es la clave del éxito.

1. **El SDR:** El versátil [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) es todo lo que necesitás. 
2. **La Antena:** Las señales de los barcos viajan con polarización vertical. Usando el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil), podés enroscar las dos varillas a unos **46 centímetros** cada una, y ubicar el dipolo totalmente vertical (parado apuntando hacia arriba y abajo). Y recordá: poné la antena lo más alto posible.
3. **Para llegar mar adentro (LNA):** A diferencia de los aviones que vuelan a 10.000 metros (y son fáciles de ver), los barcos están al nivel del mar. La curvatura de la Tierra oculta los barcos lejanos. Agregar un preamplificador como el [LNA Wideband](https://zorzalrf.empretienda.com.ar/accesorios/lna-amplificador-rtl-sdr-blog-50-4000-mhz-original) directamente en la base de la antena, impulsado por el Bias-Tee del RTL-SDR, te permitirá rescatar los últimos suspiros de las señales lejanas que rozan el horizonte.

## Software: Ais-catcher y OpenCPN

La magia del AIS es que los datos viajan en ráfagas codificadas digitales. No vas a escuchar gente hablando, sino paquetes de datos estilo módem antiguo.

Para decodificar y visualizar esto en Windows/Linux, la combinación ganadora es:

### 1. El Decodificador (AIS-catcher)
Descargá un programa gratuito por consola llamado **AIS-catcher**. Es extremadamente potente y configurarlo es tan fácil como abrir una consola y decirle que use tu RTL-SDR y mande los resultados a tu red local (por UDP). 
El software capturará los canales A y B de AIS en simultáneo, decodificando los mensajes NMEA a una velocidad impresionante.

### 2. El Visualizador (OpenCPN)
Ver líneas de texto decodificado es aburrido. Para la experiencia completa de radar, descargá **OpenCPN**, que es un software de navegación marítima gratuito y de código abierto usado incluso por navegantes profesionales.
1. Instalalo y abrí las Opciones > Conexiones.
2. Añadí una nueva conexión de Red (UDP, puerto donde configuraste el AIS-catcher).
3. ¡Mágicamente, pequeños triángulos verdes y azules empezarán a aparecer sobre el mapa de tu puerto o costa local! Al hacer clic sobre ellos, podrás ver la foto del barco, de dónde viene y hacia dónde va.

Con este setup armado usando nuestro [Kit RTL-SDR Completo](https://zorzalrf.empretienda.com.ar/antenas/kit-rtl-sdr-blog-v3-antena-dipolo-sdr-completo), tendrás control de radar total sobre cualquier vía navegable cercana a tu casa.
