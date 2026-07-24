---
title: "Interceptando 433 MHz: Hackeando sensores y estaciones meteorológicas"
description: "Descubrí el mundo invisible de la Internet de las Cosas (IoT). Decodificá termómetros, controles remotos y sensores de neumáticos en tu barrio."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["433mhz", "iot", "rtl_433", "sensores", "sdr"]
category: "Guías de Dispositivos"
difficulty: "Principiante"
readingTime: 6
---

Vivimos rodeados de una red invisible de datos. La banda ISM (Industrial, Científica y Médica) centrada en **433.92 MHz** (y también en 315 MHz o 868 MHz según el país) es el "salvaje oeste" de las telecomunicaciones a corta distancia.

Al no requerir licencias, los fabricantes la usan para transmitir ráfagas digitales de información desde todo tipo de dispositivos cotidianos. Usando tu computadora y tu SDR, podés interceptar y leer estos datos que viajan libremente por el aire en tu vecindario.

## ¿Qué podés escuchar en 433 MHz?

Si dejás tu SDR monitoreando esta frecuencia durante unas horas, te vas a sorprender de la cantidad de dispositivos que están "gritando" sus datos al viento sin ninguna encriptación:

1. **Estaciones meteorológicas hogareñas:** La base inalámbrica que el vecino puso en el patio transmite la temperatura, humedad y velocidad del viento.
2. **Sensores TPMS de autos:** Las válvulas de las ruedas de los autos modernos transmiten por radio la presión de las gomas a la computadora del vehículo mientras pasan por la calle.
3. **Llaves (Keyfobs) y controles de portones:** Alarmas de autos antiguas, portones eléctricos y timbres inalámbricos.
4. **Sensores de consumo eléctrico:** Medidores inteligentes que reportan el consumo de luz.

## El hardware necesario

Dado que estas señales son de baja potencia (para no gastar las pilas de los sensores) y de alta frecuencia (ondas cortas), cualquier [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) funciona a la perfección.

Para la antena, el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil) es ideal. Simplemente ajustá las dos varillas a unos **17 centímetros** de largo cada una (sintonizadas a 433 MHz), colocalas de forma recta y dejalas sobre tu escritorio o cerca de una ventana.

## rtl_433: La herramienta mágica

No hace falta ser un experto en criptografía para leer estos datos. La comunidad ha creado un software de código abierto legendario llamado **rtl_433**.

Este programa es tan simple como abrir la consola de tu computadora y ejecutar el comando `rtl_433`. 
Instantáneamente, el programa tomará el control de tu SDR, sintonizará la frecuencia correcta, y empezará a "escupir" texto en tu pantalla cada vez que detecte una transmisión.

Verás líneas aparecer de la nada como:
```
[Sensor de temperatura] Modelo: Acurite-Tower ID: 1542 Temp: 22.4 C Humedad: 45%
[Sensor TPMS auto] Marca: Ford Presión: 32 PSI Batería: OK
```

Es uno de los proyectos de entrada más divertidos para quienes se inclinan por el lado del *hacking* ético, el Internet de las Cosas y la domótica, demostrando que en el aire de la ciudad, los secretos vuelan libres.
