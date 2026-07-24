---
title: "Cómo escuchar la Torre de Control y Aviones (Banda Aérea VHF)"
description: "Convertite en un 'spotter' profesional. Aprendé a configurar tu SDR para sintonizar las comunicaciones de los aeropuertos en vivo."
publishDate: 2026-07-24
author: "Equipo Zorzal RF"
tags: ["aviacion", "vhf", "am", "torre-control", "sdr"]
category: "Guías de Inicio"
difficulty: "Principiante"
readingTime: 6
---

Si alguna vez fuiste a tomar mates cerca de un aeropuerto a ver despegar los aviones (una actividad conocida mundialmente como *plane spotting*), seguramente te preguntaste qué es lo que hablan los pilotos con la torre de control.

Si buscás inspiración de lo fascinante que puede ser este mundo, te recomendamos muchísimo pasarte por el canal de YouTube de **[ATC Argentina](https://www.youtube.com/@ATCARG)**, donde suben excelentes registros de las comunicaciones aéreas del país.

¿Lo mejor de todo? Esas comunicaciones no están encriptadas y viajan libremente por el aire. Usando tu computadora y un SDR, podés escucharlas en vivo desde tu casa o desde tu auto. 

Acá te explicamos cómo configurar tu equipo para no perderte ningún diálogo.

## El Equipo Necesario

Para escuchar la banda aeronáutica (que va de los **118 MHz a los 136 MHz**), no hace falta gastar una fortuna. El setup básico consta de:

1. **Receptor:** El [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-hfvhfuhf) (ideal para notebooks) o la versión [RTL-SDR V3 USB-C](https://zorzalrf.empretienda.com.ar/sdrs/receptor-rtl-sdr-blog-v3-usb-c-hfvhfuhf) si preferís ir al aeropuerto y escuchar todo desde tu celular Android.
2. **Antena:** La señal de la torre de control suele ser fuerte si estás a menos de 20 km del aeropuerto. Usando el [Kit Antena Dipolo](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil), ajustá ambas varillas para que midan unos **57 centímetros** cada una, y poné la antena completamente recta, apuntando hacia arriba.

## El secreto del éxito: Configurar el Software (SDR#)

La banda de aviación tiene una particularidad histórica: a diferencia de las radios de música (que usan FM), la aviación sigue utilizando **Modulación en Amplitud (AM)** por motivos de seguridad (permite que dos personas que hablan al mismo tiempo se escuchen superpuestas, en lugar de bloquearse).

Si no configurás tu software en AM, solo vas a escuchar ruido. 

Seguí estos pasos en tu programa favorito (como SDR#):
1. Escribí la frecuencia de la torre de control en el sintonizador superior (ej. `118.100.000` Hz).
2. En el panel izquierdo de SDR#, buscá la sección de "Radio".
3. **Paso crucial:** Cambiá el modo de `NFM` o `WFM` a **`AM`**.
4. Ajustá el *Bandwidth* (Ancho de banda) a unos `8000` Hz para tener buena calidad de voz.

## Domando el ruido: El Squelch (Silenciador)

La torre de control no transmite música constante; los pilotos hablan 5 segundos, cortan, la torre responde 5 segundos, y cortan. 
En los tiempos de silencio, tu SDR te va a reproducir un ruido a "lluvia estática" fortísimo y molesto.

Para evitar volverte loco, tenés que encender el **Squelch** (Silenciador). Esta función le dice a la radio: *"Silenciá el parlante por completo hasta que detectes una señal fuerte"*.
1. En SDR#, marcá la casilla **Squelch**.
2. Movela poco a poco hacia la derecha hasta que el ruido blanco se apague de golpe.
3. Ahora dejá la radio encendida de fondo. ¡Tu PC solo emitirá sonido cuando un piloto presione su micrófono!

## ¿Dónde encuentro las frecuencias?

Cada aeropuerto tiene múltiples frecuencias: Autorizaciones, Rodaje (Tierra), Torre (Despegues), Aproximación y Centro. 

Para encontrar las de tu ciudad, podés buscar el nombre de tu aeropuerto en sitios web gratuitos de bases de datos como **RadioReference.com** o buscar la "Carta Aeronáutica" (AIP) de tu aeródromo en Google.

Armá tu estación, prepará los auriculares y descubrí la frenética coreografía invisible que ocurre todos los días sobre nuestra cabeza.
