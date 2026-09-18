---
title: "Escuchando a los Astronautas: Cómo sintonizar la ISS con SDR"
description: "Aprendé a escuchar la Estación Espacial Internacional (ISS) en 145.800 MHz y a decodificar las imágenes SSTV que transmite desde el espacio. Horarios de pases sobre Argentina y software necesario."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["iss", "espacio", "sstv", "astronautas", "sdr", "argentina", "145mhz"]
category: "Proyectos Prácticos"
difficulty: "Intermedio"
readingTime: 7
---

A unos 400 kilómetros sobre nuestras cabezas, orbitando la Tierra a 28.000 km/h, viaja el laboratorio más avanzado que la humanidad ha construido: la **Estación Espacial Internacional (ISS)**. Lo que muchos ignoran es que a bordo lleva equipamiento de radioaficionado operado por el proyecto **ARISS** (Amateur Radio on the International Space Station), que transmite señales hacia la Tierra de forma regular.

Con un [Receptor RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y el [Kit Antena Dipolo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo), podés escuchar a los astronautas o recibir fotografías desde el espacio en los minutos en que la ISS pasa sobre tu ciudad.

## ¿Qué transmite la ISS?

La ISS tiene tres tipos de actividades que podemos captar:

1. **Contactos escolares por voz (145.800 MHz FM):** El programa ARISS organiza sesiones donde astronautas responden en vivo preguntas de estudiantes de todo el mundo. Las respuestas de la ISS se escuchan en la Tierra con buena claridad durante los pases de buena elevación.

2. **Repetidor de radioaficionados (145.990 MHz uplink / 437.800 MHz downlink):** La ISS tiene un repetidor FM que los radioaficionados con licencia pueden usar para hacer contactos mientras la estación pasa sobre sus países.

3. **Eventos SSTV (Televisión de Barrido Lento, 145.800 MHz FM):** Varias veces al año, el equipo ARISS activa una computadora que transmite imágenes conmemorativas en formato SSTV. Podés "descargar" estas fotografías desde el espacio decodificando el audio en tu PC.

## La Frecuencia Clave: 145.800 MHz en NFM

La frecuencia principal de la ISS para voz y SSTV es **145.800 MHz**. El modo de recepción es **NFM** (FM de banda estrecha), con ancho de banda de 12-15 kHz.

> **Diferencia importante con la aviación:** La banda aérea usa AM. La ISS usa FM. No te olvides de cambiar el modo de demodulación al sintonizar.

## ¿Cuándo pasa la ISS sobre tu ciudad?

La ISS viaja a 28.000 km/h y completa una órbita cada 90 minutos. Eso significa que pasa sobre Argentina varias veces al día, pero no siempre en horarios útiles (muchas veces el pase ocurre de madrugada o con poca elevación máxima).

Para saber los horarios exactos sobre tu ciudad:

- **[Heavens-Above](https://www.heavens-above.com/):** El recurso más completo. Ingresá tus coordenadas y obtenés una tabla con todos los pases de la próxima semana, con hora de inicio, dirección de azimuth, elevación máxima y hora de fin.
- **ISS Detector (Android/iOS):** App gratuita con predicciones en tiempo real y notificaciones automáticas cuando se acerca un pase.
- **[NASA Spot the Station](https://spotthestation.nasa.gov/):** La herramienta oficial de NASA, con notificaciones por email o SMS.

> **Consejo:** Los pases más útiles son los que tienen una **elevación máxima mayor a 30 grados**. Pases de horizonte rasante (5-10 grados de elevación) suelen ser muy breves y con señal débil.

## Configuración de la Antena

La ISS transmite en polarización FM vertical. La buena noticia es que la señal es relativamente fuerte — mucho más que un satélite NOAA o un avión a 300 km — porque la ISS está "gritando" con vatios reales y pasa relativamente cerca (400 km vs 800 km de los NOAA).

Con el [Kit Antena Dipolo](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil):
1. Enroscá las varillas largas en la base.
2. Extendelas hasta **~49 cm** cada brazo (resonancia a 145.800 MHz).
3. Orientá la antena en **posición horizontal V-Dipole** (brazos formando una V a 120°, acostada).
4. Colocala en el lugar más alto disponible con cielo abierto.

No necesitás un LNA para la ISS en la mayoría de los casos. La señal es suficientemente fuerte con buena elevación.

## Recibiendo Voz de los Astronautas

Cuando la ISS pasa y hay un evento de radioafición activo:

1. Sintonizá **145.800 MHz en modo NFM** unos 2 minutos antes del pase.
2. Al principio escuchás silencio o ruido. Cuando el pase empieza y la ISS "asoma" por el horizonte, la señal aparece de repente: es una voz clara con un fondo de ruido suave.
3. El **efecto Doppler** hace que la frecuencia exacta de la ISS se desvíe unos 3-4 kHz durante el pase (sube cuando se acerca, baja cuando se aleja). En SDR# o SDR++, podés compensar manualmente moviendo el dial de frecuencia durante el pase, o activar la opción "Doppler Correction" si está disponible.
4. El pase completo dura 8-12 minutos. Después la señal desaparece tan abruptamente como llegó.

## Decodificando Imágenes SSTV

Durante los eventos SSTV (que ARISS anuncia en su [web oficial](https://www.ariss.org/) con semanas de anticipación):

1. Sintonizá **145.800 MHz en NFM**.
2. El audio de SSTV suena como una melodía de pitidos y tonos, similar a los módems analógicos de los 90s.
3. Configurá un cable de audio virtual (**VB-Cable** en Windows) para redirigir el audio de tu SDR a un programa decodificador.
4. Abrí **MMSSTV** (Windows, gratuito) o **RX-SSTV** y seleccioná la entrada de audio virtual.
5. El programa "pinta" la imagen línea por línea, como una impresora de inyección lentísima. En unos 2 minutos tenés la foto completa.

El modo SSTV que usa la ISS habitualmente es **PD-120** o **Robot-36**.

---

## Preguntas Frecuentes

**¿Puedo escuchar la ISS cualquier día?**
La ISS siempre está orbitando y siempre tenés pases. Pero los eventos de voz o SSTV son actividades específicas que ocurren cuando los astronautas tienen tiempo en su agenda. Fuera de esos eventos, en 145.800 MHz solo escuchás el baliza automático de telemetría.

**¿Desde cualquier parte de Argentina?**
Sí. La ISS pasa sobre todo el territorio argentino (aunque en Ushuaia los pases son distintos porque la inclinación orbital roza la latitud). Cada ciudad tiene su propio horario de pases; usá Heavens-Above con tus coordenadas específicas.

**¿Qué pasa si me pierdo la imagen SSTV por mala señal?**
La ISS suele transmitir la misma imagen varias veces durante un evento que puede durar días. Si no la captás bien en un pase, tenés otros intentos. Además, la comunidad ARISS publica las imágenes en sus redes sociales para quienes no pudieron recibirlas.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Sintonizá la ISS la próxima vez que pase sobre tu ciudad:
- **[Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo](https://zorzalrf.empretienda.com.ar/sdrs/kit-receptor-rtl-sdr-blog-v3-usb-a-con-antena-dipolo)**
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
