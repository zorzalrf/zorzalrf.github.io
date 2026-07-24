---
title: "Radioastronomía amateur: Detectando hidrógeno galáctico desde el patio"
description: "Convertí tu patio trasero en un observatorio astronómico. Detectá las nubes de hidrógeno neutro de la Vía Láctea usando SDR."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["radioastronomia", "lna", "espacio", "hidrogeno", "sdr"]
category: "Guías de Dispositivos"
difficulty: "Experto"
readingTime: 6
---

Cuando mirás el cielo nocturno, ves estrellas. Pero lo que nuestros ojos no ven son las gigantescas nubes de gas (hidrógeno neutro) que flotan entre ellas formando los brazos espirales de nuestra galaxia, la Vía Láctea.

Afortunadamente, este gas frío en el espacio no emite luz visible, pero **sí emite ondas de radio a una frecuencia muy precisa: 1420.405 MHz (la famosa Línea del Hidrógeno).**

Con paciencia y la amplificación correcta, un radioaficionado entusiasta puede construir un radiotelescopio en el fondo de su casa y "ver" nuestra galaxia cruzando el cielo de día o de noche.

## El Desafío: Atrapar un susurro cuántico

La energía de esta señal de radio viaja miles de años luz antes de llegar a la Tierra. Cuando alcanza tu antena, es tan, pero tan débil, que el ruido natural de tu receptor la taparía por completo. 

El [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) es el corazón de nuestro radiotelescopio (porque puede sintonizar los 1420 MHz sin problemas), pero es sordo por sí solo ante señales tan profundas.

### La solución indispensable: El LNA

Para que la señal del hidrógeno galáctico supere el piso de ruido de tus cables, necesitás inyectarle esteroides puros y sin ruido. 
Acá es donde el [LNA Wideband 50-4000MHz](https://zorzalrf.empretienda.com.ar/accesorios/lna-wideband-50-4000mhz-rtl-sdr-blog) brilla de manera absoluta. 

Por su ultra-baja "figura de ruido" (inferior a 1dB), podés conectarlo directamente en la base de la antena astronómica y encenderlo enviándole 5v por el mismo cable usando el Bias-Tee del RTL-SDR. Sin uno (o dos) de estos amplificadores instalados en cascada, la radioastronomía amateur es directamente imposible.

## La Antena: Construyendo el cuerno o parabólica

No podés usar una pequeña varilla para mirar el espacio. Necesitás área de captura. Las opciones populares para esto son:
1. **Antena Parabólica (Plato Wi-Fi de rejilla modificado):** Si conseguís un plato viejo de WiFi de 2.4GHz grande (más de 1 metro), podés modificar su iluminador (el feed) para que resuene en 1420 MHz.
2. **Antena de Bocina Cónica (Horn Antenna):** Fabricada con chapa o mallas de aluminio y una "lata de pintura" o tubo actuando como guía de ondas. Es el proyecto de construcción casera favorito de la comunidad (buscá proyectos en Google como el "PI-MD radiotelescope").

## El Software de Observación

Una vez que tengas tu antena apuntando hacia arriba, el [LNA](https://zorzalrf.empretienda.com.ar/accesorios/lna-wideband-50-4000mhz-rtl-sdr-blog) conectado y bajando a tu [RTL-SDR V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) en la PC, usarás software específico.

Los programas como **SDR#** (con el plugin de promediado y FFT) o software dedicado para astronomía (como **Virgo** o programas en GNU Radio) te permiten promediar la señal durante largos minutos.
Al hacerlo, la aleatoriedad del ruido estático se "aplasta" y una clara joroba, un pico de señal evidente, emergerá en los 1420.405 MHz. 

**¡Felicidades! Estás "viendo" los misteriosos brazos de nuestra galaxia cruzar por encima de tu ciudad de forma invisible, descubriendo el universo más allá del límite de nuestros ojos.**
