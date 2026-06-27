---
title: "Introducción a Airframes"
description: "Descubrí qué hace a Airframes único, los datos que captura mediante ACARS y las diferentes herramientas que conforman su ecosistema."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["airframes", "acars", "introducción", "ecosistema"]
category: "Airframes"
difficulty: "Principiante"
readingTime: 4
order: 1
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad argentina.</p>
</div>

[Airframes](https://airframes.io/) es un servicio de datos aeronáuticos y de aeronaves que recopila información en tiempo real, proveniente de receptores en todo el mundo, la procesa y la pone a disposición del público general.

Al igual que [airplanes.live](https://airplanes.live/), [adsb.fi](https://adsb.fi/), [Plane Watch](https://plane.watch/) y [ADSBExchange](https://adsbexchange.com/), toda la información procesada se mantiene sin filtros y sin la influencia de gobiernos, naciones o intereses corporativos.

El valor principal de los datos recopilados por [Airframes](https://airframes.io/) radica en que amplían y mejoran la información provista por otros servicios, ofreciendo una perspectiva mucho más detallada sobre los sistemas internos de las aeronaves, las comunicaciones operativas de las aerolíneas y los sistemas aeroespaciales en general.

## ¿Qué diferencia a Airframes del resto?

[Airframes](https://airframes.io/) se enfoca específicamente en la recolección de datos ACARS, que en la práctica es un conjunto de varios medios de transmisión, formatos y protocolos (tales como VDL, HFDL, SATCOM, etc.). ACARS es un sistema de mensajes cortos que fue diseñado para diversos fines. Principalmente, permite la comunicación bidireccional entre la aeronave y la torre de control (ATC), entre la aeronave y la aerolínea, e incluso entre las mismas aeronaves.

Un uso muy frecuente de ACARS es la transmisión de reportes automatizados OOOI (Out, Off, On, In), los cuales permiten llevar un registro preciso de los eventos más importantes de cada vuelo. Sin embargo, más allá de los reportes OOOI, ACARS se utiliza para muchas otras funciones, como por ejemplo:

*   Reportes de posición incrementales y mensajes de tiempo estimado de llegada (ETA)
*   Información meteorológica en formato texto (METARs/TAFs/NOTAMs/PIREPs)
*   Cartas meteorológicas gráficas
*   Mensajes de autorización previa a la salida (PDC) y autorización por enlace de datos (DCL)
*   Transmisión de planes de vuelo
*   Entregas de autorizaciones oceánicas (OCD)
*   Información meteorológica de terminal para pilotos (TWIP)
*   Sistema de información digital de la terminal del aeropuerto (D-ATIS)
*   Notificaciones de cambio de puerta de embarque
*   Pedidos de combustible y solicitudes de servicio
*   Mensajes de texto libre
*   Reportes técnicos y de mantenimiento
*   Reportes de fatiga estructural del fuselaje
*   Reportes de estado y telemetría de los motores
*   Hojas de carga, peso y balanceo de la aeronave
*   Seguimiento en caso de desvíos de ruta
*   Avisos especiales relacionados a pasajeros
*   Servicios de tránsito aéreo (ATS)
*   Sistema de navegación aérea del futuro (FANS)
*   Vigilancia dependiente automática – Contrato (ADS-C)
*   Comunicaciones por enlace de datos entre el controlador y el piloto (CPDLC)

Como podés notar, el volumen de información que transita por ACARS es enorme, y Airframes tiene como propósito capturar, agrupar, analizar y exponer continuamente información útil que, de otro modo, no estaría disponible en plataformas imparciales y sin filtros. Airframes trabaja de forma colaborativa con otros agregadores reconocidos de ADS-B para potenciar los datos de forma colectiva. Al enviar datos de ACARS hacia Airframes, los colaboradores (*feeders*) contribuyen significativamente a mejorar la calidad de la información que reciben estos socios.

## El Ecosistema de Airframes

Airframes es mucho más que un simple servicio de datos. Se ha convertido en un ecosistema en constante crecimiento, compuesto por herramientas, plataformas y proyectos desarrollados por la comunidad:

*   **[app.airframes.io](https://app.airframes.io/)**: Es la aplicación web principal de Airframes, donde podés buscar mensajes ACARS en vivo o acceder al archivo histórico, ver vuelos activos, buscar estaciones receptoras y explorar datos detallados de aeronaves y aerolíneas.
*   **[tbg.airframes.io](https://tbg.airframes.io/)**: Un panel desarrollado con Node-RED por [thebaldgeek](https://thebaldgeek.github.io/), que ofrece vistas en vivo y con capacidad de búsqueda para fuentes SATCOM ACARS, HFDL y VHF/VDL. El proyecto TBG fue una gran inspiración para el desarrollo de Airframes.
*   **[tbgmap.airframes.io](https://tbgmap.airframes.io/)**: Un mapa en tiempo real que traza las posiciones de las aeronaves utilizando datos ADSC y ACARS, incluyendo información de posicionamiento que no es captada a través de ADS-B.
*   **[tbgacarshub.airframes.io](https://tbgacarshub.airframes.io/)**: Plataforma orientada al seguimiento de aviones militares, combinando mensajes ACARS con datos de posición.
*   **[community.airframes.io](https://community.airframes.io/)**: El foro oficial de la comunidad Airframes, pensado para debatir, solicitar soporte y compartir conocimientos entre los entusiastas del rastreo de señales.
*   **[shop.airframes.io](https://shop.airframes.io/)**: La tienda oficial de Airframes, donde es posible adquirir equipos SDR, placas de desarrollo (SBC), antenas y merchandising del proyecto.
*   **[blog.airframes.io](https://blog.airframes.io/)**: El blog de Airframes, que incluye guías, actualizaciones y análisis técnicos en profundidad.
