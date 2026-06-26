---
title: "Clientes Decodificadores (Decoder Clients)"
description: "Conoce los diferentes clientes de software decodificador compatibles con la red de Airframes.io para ACARS, VDL2 y HFDL."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["decodificadores", "acarsdec", "dumpvdl2", "dumphfdl", "software", "airframes"]
category: "Airframes"
difficulty: "Intermedio"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

Los clientes decodificadores (decoder clients) son el software que recibe las señales de radio sin procesar de tu dispositivo SDR y las convierte en mensajes estructurados ACARS. Cada decodificador maneja un medio de transmisión específico. A continuación, presentamos una lista de clientes decodificadores compatibles con Airframes.

## acarsdec

[acarsdec](https://github.com/TLeconte/acarsdec) es un decodificador ACARS VHF multicanal con soporte integrado para dispositivos [RTL-SDR](/catalog/?type=SDR), Airspy, SDRplay y SoapySDR. Puede decodificar hasta 8 canales simultáneamente dentro de una banda de 2 MHz y enviar los mensajes en formato JSON para servicios de agregación de datos.

## dumpvdl2

[dumpvdl2](https://github.com/szpajder/dumpvdl2) es un analizador de protocolos y decodificador de mensajes VDL Mode 2. Admite múltiples canales simultáneos, tiene una configuración de salida flexible (texto, JSON, UDP, TCP, ZeroMQ) y enriquece los mensajes con datos de aeronaves. Este es el decodificador recomendado para la recepción de VDL2.

## dumphfdl

[dumphfdl](https://github.com/szpajder/dumphfdl) es un decodificador multicanal para HFDL (High Frequency Data Link). Recibe mensajes ACARS, informes de posición ADS-C y comunicaciones CPDLC de aeronaves por radio HF, brindando datos de seguimiento para vuelos sobre océanos y áreas remotas.

## iridium-toolkit

[iridium-toolkit](https://github.com/muccc/iridium-toolkit) es un conjunto de herramientas desarrolladas por el Chaos Computer Club de Munich para analizar y decodificar tramas del satélite Iridium. Procesa paquetes Iridium demodulados y extrae mensajes ACARS transmitidos a través de su constelación de satélites.

## iridium-sniffer

[iridium-sniffer](https://github.com/alphafox02/iridium-sniffer) es un detector y demodulador independiente de ráfagas satelitales Iridium escrito en C. Creado por Aaron (el desarrollador de DragonOS), proporciona una alternativa liviana a `gr-iridium` que funciona eficientemente en sistemas de baja potencia como la Raspberry Pi, sin requerir GNU Radio. Su salida alimenta directamente a `iridium-toolkit` para la decodificación ACARS.

## JAERO

[JAERO](https://github.com/jontio/JAERO) es un decodificador de código abierto para señales de los satélites Inmarsat AERO. Demodula y decodifica mensajes ACARS, informes de posición ADS-C y CPDLC desde los canales aeronáuticos de Banda-L de Inmarsat. JAERO incluye una interfaz gráfica de usuario (GUI) y exporta datos decodificados para servidores de agregación.

## satdump

[satdump](https://github.com/SatDump/SatDump) (también disponible como `satdump-cli`) es una aplicación de procesamiento de datos satelitales de propósito general. Soporta una amplia gama de protocolos satelitales y puede decodificar señales de Inmarsat y otros satélites relevantes para la recolección de datos ACARS.

## vdlm2dec

[vdlm2dec](https://github.com/TLeconte/vdlm2dec) es un antiguo decodificador para VDL Mode 2. Para nuevas instalaciones, se recomienda utilizar `dumpvdl2`, ya que ofrece más funciones, mejores opciones de salida y desarrollo activo.

---

## Herramientas Multi-Decodificadoras

Estas herramientas administran múltiples decodificadores a la vez de forma conjunta, y simplifican configuraciones complejas.

### ACARS Hub

[ACARS Hub](https://github.com/sdr-enthusiasts/docker-acarshub) es una solución en Docker que ejecuta de forma centralizada `acarsdec`, `dumpvdl2` y `dumphfdl` dentro de un único contenedor con un panel web integrado. Se encarga de la orquestación de decodificadores, enrutamiento de mensajes y alimentación hacia Airframes automáticamente. Este es el enfoque recomendado para configuraciones basadas en Docker.

### acars_router

[acars_router](https://github.com/sdr-enthusiasts/acars_router) es un enrutador y desduplicador de mensajes. Cuando ejecutas varios decodificadores con coberturas superpuestas, `acars_router` consolida la salida, elimina los mensajes duplicados y reenvía datos limpios a uno o más destinos, incluido Airframes. Admite UDP, TCP y ZeroMQ.
