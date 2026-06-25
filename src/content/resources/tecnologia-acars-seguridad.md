---
title: "Seguridad y Privacidad en ACARS"
description: "Conoce por qué ACARS no cuenta con encriptación y cómo afecta esto a la seguridad y la privacidad en el entorno aeronáutico."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["seguridad", "privacidad", "acars", "encriptación"]
category: "Tecnología Aeronáutica"
difficulty: "Intermedio"
readingTime: 4
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

ACARS fue diseñado a finales de la década de 1970 sin mecanismos de encriptación o autenticación. Los mensajes se transmiten en texto plano (plaintext) sobre frecuencias de radio que cualquiera puede recibir con hardware comercial. Esto tiene implicaciones tanto para la seguridad de la aviación como para la privacidad de los pasajeros.

## Preocupaciones Principales

*   **Sin encriptación**: Los mensajes se envían sin cifrar. Cualquiera con un SDR y el software adecuado puede decodificarlos.
*   **Sin autenticación**: No existe un mecanismo integrado para verificar al remitente de un mensaje ACARS.
*   **Privacidad**: Los informes de posición, los detalles de vuelo y los mensajes operativos se emiten abiertamente y pueden ser correlacionados con aeronaves y vuelos específicos.

## Por Qué Esto Importa para Airframes

La apertura de ACARS es lo que hace posible la agregación impulsada por la comunidad. Airframes recopila datos que ya se emiten libremente en frecuencias de radio públicas. Sin embargo, la comunidad debe ser consciente de que estos datos pueden contener información operacionalmente sensible, y fomentamos el uso responsable de los mismos.

Airframes mantiene un enfoque sin filtros para la recolección de datos — no censuramos ni ocultamos datos en base a presiones corporativas o gubernamentales — al mismo tiempo que reconocemos que la industria de la aviación está trabajando activamente en la seguridad de futuros sistemas de enlaces de datos.

## El Futuro

Hay varios esfuerzos en marcha para mejorar la seguridad de ACARS:
*   **AeroMACS**: Adaptación de WiMAX que proporciona comunicaciones terrestres cifradas en los aeropuertos.
*   **LDACS**: Sistema con seguridad integrada desde el principio.
*   **ACARS over IP (AoIP)**: Transporte basado en IP que puede utilizar encriptación estándar (TLS).

Estos sistemas más nuevos eventualmente reducirán la cantidad de tráfico no cifrado, pero la transición es gradual y los sistemas heredados (POA/VDL2/HFDL) seguirán en uso por muchos años.
