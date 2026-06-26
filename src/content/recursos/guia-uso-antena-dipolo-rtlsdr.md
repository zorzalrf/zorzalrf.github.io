---
title: "Guía de Uso: Kit de Antena Dipolo RTL-SDR"
description: "Aprendé a utilizar el kit de antena dipolo multipropósito de RTL-SDR Blog. Orientación, longitud y configuraciones especiales para satélites."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "antena", "dipolo", "rtl-sdr", "v-dipole"]
category: "Antenas y Cables"
difficulty: "Principiante"
readingTime: 8
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de rtl-sdr.com.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

Esta publicación es una guía sobre cómo usar el set de antena dipolo en diversas configuraciones. Primero, mostraremos y explicaremos qué incluye el set:

*   **1x base de antena dipolo con 60cm de cable RG174 y conector SMA Macho.** Esta es la base del dipolo donde se conectan las antenas telescópicas. El corto tramo de RG174 está desacoplado de los elementos de la base con un choque de ferrita. Esto ayuda a evitar que la línea de alimentación interfiera con el patrón de radiación del dipolo. El dipolo tiene una rosca hembra de 1/4 de pulgada en la parte inferior, lo que te permite usar productos de montaje de cámaras estándar para su instalación.
*   **1x extensión de cable coaxial RG174 de 3 metros.** Esta extensión de cable coaxial te permite montar las antenas en un lugar que obtenga mejor recepción. Por ejemplo, afuera en una ventana, o en lo alto.
*   **2x antenas telescópicas de 23cm a 1 m.** Los dipolos telescópicos se pueden desmontar de la base a través de una rosca M5, lo que permite mayor portabilidad y la capacidad de intercambiarlos. Estas antenas telescópicas largas cubren de VHF a UHF.
*   **2x antenas telescópicas de 5cm a 13cm.** Estas antenas más pequeñas cubren desde UHF hasta ADS-B en 1090 MHz, e incluso funcionan decentemente hasta frecuencias de banda L de 1.5 GHz.
*   **1x montaje de trípode flexible con tornillo macho de 1/4".** Esta pieza te permite montar el dipolo en una variedad de lugares diferentes. Por ejemplo, un poste, la rama de un árbol, un escritorio, una puerta, el alféizar de una ventana. Las patas del trípode son flexibles y están recubiertas de goma, por lo que pueden envolverse firmemente alrededor de muchos objetos.
*   **1x montaje de ventosa con tornillo macho de 1/4".** Con este soporte, podés fijar el dipolo en el exterior de una ventana, en una pared, el techo/ventana de un automóvil, o en cualquier otra superficie lisa. Para usarlo, primero limpia la superficie con limpiavidrios o alcohol isopropílico. Luego colocá la ventosa sobre la superficie limpia y cierra la palanca para activar la succión.

[![Image 1: What's included in the new Dipole kit](/images/dipole-kit/dipole_components-500x500.jpg)](/images/dipole-kit/dipole_components.jpg)

## Orientación del Dipolo

Las señales se transmiten normalmente con polarización horizontal, vertical o circular derecha/izquierda (RHCP/LHCP). Esta es esencialmente la 'orientación' de una señal, y para obtener el mejor rendimiento se debe usar una antena con la misma polarización. Un dipolo se puede usar en polarización vertical u horizontal, simplemente orientándolo de manera vertical u horizontal.

Si mezclas polarización vertical y horizontal, o RHCP y LHCP, obtendrás una pérdida instantánea de 20 dB. Si mezclas vertical/RHCP, vertical/LHCP, horizontal/RHCP u horizontal/LHCP, solo tendrás una pérdida de 3 dB.

Para la polarización vertical, en teoría no importa de qué lado orientes la antena siempre y cuando esté vertical. Sin embargo, en la práctica, es posible que obtengas resultados ligeramente mejores si tenés el elemento conectado al conductor central del cable coaxial apuntando hacia ARRIBA. Podés confirmar qué elemento está conectado al conductor central retirando temporalmente la tapa negra de la base del dipolo (se puede quitar fácilmente haciendo palanca con la uña o con un destornillador plano).

También hay formas de optimizar el patrón de radiación con dipolos. Por ejemplo, para los satélites VHF LEO (Órbita Terrestre Baja), podés usar una configuración de "V-dipole". También podés fabricar una antena algo direccional utilizando una configuración de dipolo doblado. Algunos ejemplos más de configuraciones de dipolo se pueden encontrar en [la página de KK4OBI sobre dipolos doblados](http://www.qsl.net/kk4obi/Center-fed%20L-dipoles%20Vertical.html).

![Image 2](/images/dipole-kit/Bent-Dipole-Animation.gif)

## Recepción de Señales Terrestres

La mayoría de las señales que se transmiten terrestremente (en la Tierra) tienen polarización vertical.

Para usar el dipolo en señales polarizadas verticalmente, todo lo que necesitás hacer es orientar los elementos de manera vertical (hacia arriba y hacia abajo).

En teoría, no existe un arriba ni un abajo para el dipolo cuando se usa en orientación vertical. Sin embargo, en la práctica podés encontrar un rendimiento ligeramente mejor cuando el elemento 'activo' apunta hacia arriba. El elemento activo es el que está conectado al conductor central. Podés verificar qué elemento está conectado al conductor central retirando la tapa superior de la base del dipolo. Esto te permitirá mirar el interior de las conexiones.

## Recepción Satelital

El dipolo se puede utilizar en una configuración de V-Dipole para la recepción de satélites de órbita polar. Revisá [la publicación de Adam 9A4QV](https://lna4all.blogspot.com/2017/02/diy-137-mhz-wx-sat-v-dipole-antenna.html) donde escribió sobre cómo descubrió que era posible utilizar dipolos en esta configuración para una excelente recepción satelital. La idea es usar el dipolo en polarización horizontal. Esto da una pérdida de 3 dB en las señales satelitales RHCP, pero también proporciona muy amablemente una pérdida de 20 dB en las señales terrestres, las cuales podrían estar sobrecargando tu [RTL-SDR](/catalogo/sdr).

Para satélites de 137 MHz como NOAA y Meteor M2, extiende los elementos de antena más grandes a unos 53,4 cm cada uno (aproximadamente 2,5 secciones). Ajusta el ángulo del dipolo para que quede horizontal y en forma de 'V', a unos 120 grados. Colocá el dipolo en la dirección Norte-Sur.

Con un [LNA](/catalogo/accesorios) (Amplificador de Bajo Ruido) de banda L apropiado como el [Outernet LNA](http://amzn.to/2nnEHtk), el dipolo también puede funcionar hasta cierto punto para recibir satélites de la banda L. Utilizando la antena más pequeña contraída, aplica una configuración de dipolo en V y apúntala hacia el satélite de banda L. Lo ideal es utilizar también un reflector. En la imagen de abajo, usamos una simple lata de galletas como reflector. Se perforó un agujero en el centro y se usó la montura para sujetar la antena. Esto, junto con el LNA Outernet, fue suficiente para recibir AERO y STD-C.

![Image 3: L-band v-dipole with reflector tin](/images/dipole-kit/l-band_veedipole.jpg)

![Image 4: Receiving Inmarsat signals with the Outernet LNA](/images/dipole-kit/dipole_lbandreflect_1.jpg)

## Eligiendo la Longitud de los Elementos de la Antena

Al igual que con el látigo magnético, podés usar una calculadora en línea para determinar la longitud óptima según tu frecuencia de interés. Recomendamos esta [calculadora de dipolos](http://www.csgnetwork.com/antennaedcalc.html). La longitud exacta no importa demasiado, pero intentá que las longitudes estén lo más cerca posible de lo que indique la calculadora. En un dipolo, buscás que ambos elementos tengan la misma longitud.

En realidad, extender la antena a casi cualquier longitud aleatoria funcionará bastante bien para la mayoría de las señales fuertes. Pero si realmente estás tratando de optimizar la recepción de esas señales débiles, querrás ajustar finamente las longitudes.

Básicamente, cuanto más larga sea la antena, más baja será su frecuencia de resonancia. Cuanto más corta sea la antena, mayor será la frecuencia de resonancia. Querés estar cerca de la frecuencia resonante. Recordá que hay aproximadamente 2 cm de metal dentro de la antena misma que deben ser sumados. A continuación, te presentamos una hoja de referencia rápida de diferentes longitudes y frecuencias. Tené en cuenta que la longitud se refiere a la medida de un solo lado del dipolo (es decir, la longitud a la que necesitás extender cada elemento).

*   Antena Grande, 5 Secciones, 100cm + 2cm resuena a ~ 70 MHz
*   Antena Grande, 4 Secciones, 80cm + 2cm resuena a ~ 87 MHz
*   Antena Grande, 3 Secciones, 60cm + 2cm resuena a ~ 115 MHz
*   Antena Grande, 2 Secciones, 42cm + 2cm resuena a ~ 162 MHz
*   Antena Grande, 1 Sección, 23cm + 2cm resuena a ~ 285 MHz
*   Antena Pequeña, 4 Secciones, 14cm + 2cm resuena a ~ 445 MHz
*   Antena Pequeña, 3 Secciones, 11cm + 2cm resuena a ~ 550 MHz
*   Antena Pequeña, 2 Secciones, 8cm + 2cm resuena a ~ 720 MHz
*   Antena Pequeña, 1 Sección, 5cm + 2cm resuena a ~ 1030 MHz

Para la mayoría de los casos, sin importar la longitud, el SWR debería estar por debajo de 5 en la mayoría de frecuencias, lo que resulta en una pérdida de 2.5 dB o menos. Más adelante se detallan algunos gráficos SWR exactos.

## Uso de los Soportes

El soporte de ventosa te permite fijar la antena fácilmente a una ventana o superficie lisa. Límpiala con alcohol primero, pon la ventosa y cierra la palanca para fijarla. Usá la rótula esférica para encontrar el ángulo correcto y ajústala.

El soporte tipo trípode flexible es muy útil para amarrar el dipolo a casi cualquier otra cosa, como ramas o marcos de puerta, ya que sus patas se doblan y están recubiertas.

[![Image 7: Some examples of how to use the mounts.](/images/dipole-kit/dipole_mounts.jpg)](/images/dipole-kit/dipole_mounts.jpg)

**¡Atención! Al igual que con el látigo magnético, NO recomendamos montar esta antena al aire libre permanentemente.**
Esta antena está diseñada como una unidad portátil para montar y desmontar en el día. No es a probá de agua y no tiene protección a tierra para rayos. El acero no se oxida, pero el agua y la mugre podrían arruinar el mecanismo telescópico interior.

## Ajustando la Bisagra

Una vez que tengas la orientación de los dipolos como deseás, es posible que quieras ajustar la bisagra para que los elementos no se muevan tan fácilmente. Para hacer esto, simplemente toma un destornillador pequeño y aprieta el tornillo de la bisagra.

## Resistencia de purga ESD

Tené en cuenta que nuestras antenas más antiguas tenían una resistencia de purga (bleed resistor) de descargá electrostática (ESD) de 100 kOhmios entre los dos elementos. Este ya no es el caso en los modelos más nuevos. El propósito de la resistencia era descargar lentamente cualquier acumulación de ESD a tierra.

Decidimos mejorar la protección ESD en el propio dongle en su lugar, por lo que la resistencia de purga ESD ya no es necesaria y ahora se omite en las producciones más nuevas.

## Gráficos de Muestra de VSWR

![Image 8: Small Antenna Collapsed](/images/dipole-kit/Small_Ant_Collapsed.jpg)

![Image 9: Small Antenna Extended](/images/dipole-kit/Small_Ant_Extended.jpg)

![Image 12: RG174 Cable Loss](/images/dipole-kit/RG174_Cable_Loss.jpg)

![Image 15: Large Antenna Collapsed](/images/dipole-kit/Large_Ant_Collapsed-500x400.jpg)

![Image 16: Large Antenna Extended](/images/dipole-kit/Large_Ant_Extended-500x400.jpg)

## Notas Adicionales

**Tené en cuenta que esta NO es una antena diseñada para transmitir (TXing).** Es únicamente una antena de recepción (RX). Por lo tanto, por favor no transmitas con ella a menos que realmente sepas lo que estás haciendo, ya que podrías dañar tu radio de transmisión.
