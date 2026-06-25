---
title: "Aplicaciones y Utilidades para HFDL"
description: "Herramientas creadas por la comunidad para facilitar el seguimiento de frecuencias y el manejo de múltiples receptores HFDL."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["herramientas", "hfdl", "software", "dumphfdl"]
category: "Tecnología Aeronáutica"
difficulty: "Intermedio"
readingTime: 4
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

Estas son algunas de las herramientas construidas por la comunidad para trabajar con datos HFDL.

## hfdlobserver888

[hfdlobserver888](https://github.com/hfdl-observer/hfdlobserver888) es un receptor `dumphfdl` de múltiples cabezas, basado en consola/CLI, diseñado para usarse con dispositivos Web-888. Gestiona simultáneamente múltiples instancias de `dumphfdl` para monitorizar diferentes estaciones HFDL, lo que maximiza la cobertura.

## hfdl.observer

[hfdl.observer](https://hfdl.observer/) es una herramienta web que muestra el estado en tiempo real de las estaciones terrestres HFDL en todo el mundo. Te indica cuáles estaciones están activas, qué frecuencias utilizan y las condiciones actuales de propagación. Es un recurso indispensable, ya que las frecuencias cambian durante el día debido a la ionosfera.

El software asociado [HFDLObserver](https://github.com/hfdl-observer/hfdlobserver) puede recuperar automáticamente listas de frecuencias actualizadas de hfdl.observer o airframes.io y alimentar tus instancias locales de `dumphfdl`.

## ACARS Hub

[ACARS Hub](https://github.com/sdr-enthusiasts/docker-acarshub) es un sistema basado en Docker para la gestión de múltiples decodificadores con un panel de control web. Simplifica enormemente las configuraciones con múltiples SDRs, el enrutamiento de mensajes y el envío hacia Airframes de forma automática.

## acars_router

[acars_router](https://github.com/sdr-enthusiasts/acars_router) es un enrutador y desduplicador de mensajes para señales ACARS. Cuando se ejecutan múltiples decodificadores que pueden producir mensajes duplicados (como tener coberturas VDL2 superpuestas), este programa consolida todo y limpia los datos antes de reenviarlos.
