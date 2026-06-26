---
title: "Cómo montar tu primera estación ADS-B en Argentina"
description: "Guía completa desde la antena hasta la pantalla con los aviones. Armá tu propio radar con un SDR."
publishDate: 2026-06-24
author: "Equipo Zorzal RF"
tags: ["proyectos", "ads-b", "aviacion", "sdr", "radar", "argentina"]
category: "Iniciación / Primeros Pasos"
difficulty: "Principiante"
readingTime: 5
featured: true
---

¿Querés ver en tiempo real los vuelos que pasan por encima de tu casa en Argentina? Con una inversión mínima, podés armar tu propio radar aéreo personal usando un RTL-SDR.

Acá te explicamos el proceso completo, desde el hardware hasta el software.

## 1. El Hardware que necesitás

- **Un SDR:** Un RTL-SDR V3 es ideal para empezar.
- **Antena:** Necesitás una antena sintonizada a **1090 MHz**. Podés usar la dipolo que viene con el kit RTL-SDR ajustando la longitud de los brazos a unos 6.5 cm cada uno, o comprar una antena comercial vertical de fibra de vidrio específica para ADS-B.
- **Computadora:** Puede ser tu PC de escritorio, pero lo ideal es una **Raspberry Pi** para dejarla prendida 24/7 gastando poca luz.
- *(Opcional pero muy recomendado)* **Filtro ADS-B:** Especialmente en ciudades argentinas con muchas torres de celular, un filtro a 1090 MHz evitará que tu SDR se sature con las señales de 4G/LTE.

## 2. Ubicación de la Antena

Este es el punto más crítico. Las señales de 1090 MHz operan bajo **línea de visión**. 
- Lo ideal es colocar la antena en el techo de tu casa, lo más alto posible y libre de obstrucciones (árboles, edificios).
- Recordá usar un buen cable coaxial (tipo KMR-240 o KMR-400) si el tramo es largo.

## 3. Instalando el Software (Raspberry Pi)

La forma más moderna y potente de empezar es usando la imagen de **[ADSB.im](https://adsb.im/)**. A diferencia de otras imágenes que te atan a un solo servicio, ADSB.im viene con una interfaz web amigable que te permite alimentar decenas de redes simultáneamente (FlightAware, Flightradar24, ADSBexchange, etc.) sin usar la terminal de comandos.

1. Ingresá a [adsb.im/download](https://adsb.im/download) y descargá la imagen correspondiente a tu Raspberry Pi o placa SBC.
2. Usá un programa como **BalenaEtcher** o **Raspberry Pi Imager** para grabar esa imagen en una tarjeta MicroSD.
3. Poné la MicroSD en la Raspberry Pi, conectala al router por cable de red (idealmente), enchufá el [RTL-SDR](/catalogo/sdr/) (con su [antena](/catalogo/antenas/)) y encendela.

## 4. Configuración y visualización de los aviones

1. En tu computadora (estando en la misma red), abrí tu navegador web e ingresá a `http://adsb.local` (o bien, averiguá la dirección IP de tu Raspberry Pi en tu router e ingresá por IP).
2. Te recibirá el panel de control web de ADSB.im. Desde la pestaña de "Location/Config", ingresá tus coordenadas exactas.
3. ¡Listo! Haciendo clic en la herramienta **tar1090** desde el panel web, verás un mapa en vivo (estilo Google Maps) con todos los aviones que tu antena está captando.

**Bonus:** Desde la interfaz web podés habilitar fácilmente la transmisión de tus datos a servicios como FlightAware, Flightradar24 o RadarBox. Al hacerlo, ¡estas plataformas te regalarán cuentas **Premium o Business de por vida**!


---

### 🛒 ¿Necesitás el hardware para este proyecto?
En Zorzal RF tenemos los componentes exactos para que armes tu estación ADS-B sin problemas de interferencias:
- **[Estación ADS-B Zorzal RF: Receptor V3 + Antena + Filtro](/catalogo/sdr/)**
- **[Filtro SAW 1090 MHz (ADS-B) - Reduce Interferencia](/catalogo/filtros/)**
- **[Antena ADS-B 1090 MHz 5.5dBi - Exterior Profesional](/catalogo/antenas/)**