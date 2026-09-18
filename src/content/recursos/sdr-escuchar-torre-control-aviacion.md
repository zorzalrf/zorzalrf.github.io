---
title: "Cómo escuchar la Torre de Control y Aviones (Banda Aérea VHF)"
description: "Escuchá a los pilotos hablar con la torre de control de tu aeropuerto local usando un SDR. Configuración en modo AM, frecuencias de aviación 118-136 MHz y cómo usar el Squelch para no perderte nada."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["aviacion", "vhf", "am", "torre-control", "sdr", "argentina", "frecuencias"]
category: "Proyectos Prácticos"
difficulty: "Principiante"
readingTime: 7
---

La **banda aérea VHF** (118-136 MHz) es el canal de comunicación por voz entre los pilotos y los controladores de tráfico aéreo. A diferencia de muchas comunicaciones modernas, estas transmisiones son **completamente analógicas, sin encriptación y abiertas al público**. Cualquier persona con un receptor SDR puede escucharlas.

Es el primer proyecto que le recomendamos a todo principiante: la configuración es sencilla, los resultados son inmediatos y la experiencia de escuchar a un piloto reportando su posición o recibiendo instrucciones de aterrizaje es fascinante.

## La Configuración Clave: Modo AM, no FM

El error más común de los principiantes es intentar escuchar la banda aérea en modo **FM** (que es lo que usa la radio del auto). Las comunicaciones de aviación usan **AM** (Amplitud Modulada), igual que la radio AM comercial pero en otra banda de frecuencias.

En SDR# o SDR++:
1. Cambiá el modo a **AM** (no FM, no NFM, no WFM — literalmente "AM").
2. Ajustá el ancho de banda (**bandwidth**) a **6-10 kHz**.
3. Desactivá el **Squelch** al principio, o ponelo muy bajo, para escuchar todo sin cortes.

Si configurás modo FM en la banda aérea, solo escucharás ruido estático aunque el avión esté transmitiendo justo encima de tu cabeza.

## Frecuencias de Aviación en Argentina

La banda aérea se divide en varios tipos de frecuencias, cada una con una función específica:

### Aeropuertos principales de Argentina

| Aeropuerto | Torre | Approach | ATIS |
|---|---|---|---|
| Buenos Aires / Ezeiza (SAEZ) | 118.100 MHz | 119.100 MHz | 128.050 MHz |
| Buenos Aires / Aeroparque (SABE) | 118.900 MHz | 127.000 MHz | 126.000 MHz |
| Córdoba / Pajas Blancas (SACO) | 118.100 MHz | 119.700 MHz | 127.550 MHz |
| Rosario (SAAR) | 118.100 MHz | 121.200 MHz | 120.800 MHz |
| Mendoza (SAME) | 118.100 MHz | 119.300 MHz | 126.700 MHz |

> **Nota:** Estas frecuencias son orientativas. Las frecuencias de aviación están publicadas en los AIP (Publicación de Información Aeronáutica) oficiales de ANAC (anac.gob.ar). Siempre verificá en la fuente oficial, ya que pueden cambiar.

### Frecuencias universales
- **121.500 MHz — EMERGENCIA:** La frecuencia de guardia internacional. Absolutamente todos los aviones en vuelo la monitorean. Si escuchás actividad acá (especialmente voces urgentes o tonos de alerta), es una situación de emergencia real.
- **122.800 MHz — UNICOM:** Frecuencia de tráfico en aeródromos sin torre de control. Los pilotos anuncian su posición y maniobras entre sí.

## El ATIS: Tu Radar de Clima Aeroportuario

Una de las cosas más interesantes de escuchar es el **ATIS** (Automatic Terminal Information Service). Es una grabación en bucle que los aeropuertos actualizan cada hora con la información meteorológica del aeródromo: viento, temperatura, presión, visibilidad, nubosidad y la pista activa en uso.

Escuchar el ATIS es excelente para practicar porque:
- La transmisión es continua (no tenés que esperar a que hable alguien)
- El locutor habla despacio y con terminología estándar de aviación
- Te enseña la jerga: "altimeter 1013", "wind 270 at 15 knots", "expect visual approach"

Sintonizá el ATIS de Ezeiza en **128.050 MHz** en modo AM y escuchá.

## Squelch: Cómo Filtrar el Ruido entre Transmisiones

Cuando no hay nadie transmitiendo, el SDR escucha ruido estático. El **Squelch** es un umbral de nivel de señal: cuando la señal supera ese umbral (alguien está transmitiendo), el audio se activa. Cuando cae por debajo, el audio se silencia.

Para configurarlo en SDR#:
1. Ajustá la ganancia del SDR para que el piso de ruido esté estable.
2. Sintonizá la frecuencia de la torre.
3. Subí el nivel de Squelch lentamente hasta que el ruido estático desaparezca (pero no tanto que bloquee las transmisiones reales).
4. Cuando un piloto transmita, el Squelch "abre" y escuchás la voz claramente.

## Cómo Encontrar Frecuencias de Cualquier Aeródromo

Para aeródromos más pequeños o provincias del interior de Argentina, podés usar estas fuentes:

- **ANAC Argentina** (anac.gob.ar → AIP Argentina → AD 2): Las cartas aeronáuticas de cada aeródromo argentino en formato oficial.
- **OpenAIP** (openaip.net): Mapa interactivo global con frecuencias de todos los aeródromos, incluyendo aeródromos privados y pistas pequeñas de Argentina.
- **RadioReference.com**: Base de datos comunitaria de frecuencias a nivel mundial, con búsqueda por país y ciudad.

---

## Preguntas Frecuentes

**¿Es legal escuchar estas frecuencias en Argentina?**
Sí. La radioescucha pasiva es completamente legal en Argentina. Las comunicaciones aeronáuticas son "radiocomunicaciones de radiodifusión" en sentido técnico: están destinadas a ser recibidas por el público. Lo que **no** es legal es grabarlas con fines comerciales o divulgar información operacionalmente sensible que ponga en riesgo la seguridad. Escuchar por hobby educativo está completamente dentro de la ley.

**¿Por qué a veces escucho solo un lado de la conversación?**
Porque los aviones y la torre transmiten en frecuencias diferentes a veces, o porque uno de los dos está fuera del alcance de tu antena. La torre transmite desde tierra (siempre cercana), pero el avión puede estar a 200 km de distancia y ya no alcanzar tu antena.

**¿La Fuerza Aérea y los aviones militares transmiten en esta banda?**
Sí, también usan la banda VHF aeronáutica para comunicaciones básicas. Pero también tienen bandas militares específicas fuera del rango 118-136 MHz. Las transmisiones militares en la banda civil suelen ser rutinarias y perfectamente audibles.

**¿Necesito algún permiso especial para escuchar?**
No. La radioescucha no requiere ninguna habilitación en Argentina. El permiso (licencia de radioaficionado) solo se exige para *transmitir*. Escuchar es libre.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Sintonizá la banda aérea VHF en AM desde tu casa o desde el aeropuerto:
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Receptor RTL-SDR Blog V3 USB-C (para celular Android)](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-c-original)**
- **[Kit Antena Dipolo Multipropósito para SDR](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)**
