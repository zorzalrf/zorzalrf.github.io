---
title: "Cables y conectores: ¿Por qué perder 2dB te arruina la recepción?"
description: "Entendé por qué el cable coaxial importa tanto en SDR. Comparativa de pérdidas entre RG-58 y KMR-400 a 1090 MHz, tipos de conectores SMA/BNC/PL-259 y la regla de oro del cableado en radiofrecuencia."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["soporte", "cables", "conectores", "KMR", "atenuacion", "coaxial", "sma"]
category: "Hardware y Antenas"
difficulty: "Principiante"
readingTime: 6
---

Muchos principiantes invierten en un buen SDR y una antena de calidad, pero los unen con un cable de televisión viejo, un par de adaptadores baratos, y se frustran porque "el SDR no sirve" o "no se escucha nada". El problema no es el SDR ni la antena: **es el cable**.

En radiofrecuencia, el cable coaxial no es un simple conductor eléctrico. Es un componente con pérdidas reales, medibles y que aumentan de forma dramática con la frecuencia.

## La Atenuación: El Enemigo Invisible

Todo cable coaxial tiene "pérdida" o **atenuación**, medida en decibelios (dB) por cada 10 metros de longitud:

- **Cada 3 dB de pérdida = la mitad de la potencia de la señal desaparece**
- **6 dB de pérdida = 75% de la señal perdida**
- **10 dB de pérdida = 90% de la señal perdida**

Recordá: las señales que queremos recibir (aviones a 300 km, satélites a 800 km de altura) son extraordinariamente débiles al llegar a la antena. Perder el 75% de esa señal antes de que llegue al chip del SDR puede hacer la diferencia entre ver el avión o no verlo.

## Comparativa de Cables a Diferentes Frecuencias

Los valores de pérdida cambian radicalmente según la frecuencia:

| Cable | Pérdida / 10m a 137 MHz | Pérdida / 10m a 435 MHz | Pérdida / 10m a 1090 MHz |
|---|---|---|---|
| RG-58 (TV básico) | 1.8 dB | 3.5 dB | 5.5 dB |
| RG-8X | 1.1 dB | 2.2 dB | 3.5 dB |
| **KMR-240** | 0.7 dB | 1.3 dB | 2.1 dB |
| **KMR-400** | 0.4 dB | 0.8 dB | 1.3 dB |
| Heliax LDF4 | 0.2 dB | 0.4 dB | 0.7 dB |

**Ejemplo práctico:** Si tenés 10 metros de cable RG-58 para tu estación ADS-B (1090 MHz), estás perdiendo **5.5 dB** — más del 70% de la señal de los aviones — antes de llegar al SDR. Con KMR-400, solo perdés 1.3 dB. La diferencia en el alcance de la estación es enorme.

## Los Conectores: Cada Adaptador Suma Pérdidas

Además del cable en sí, cada conector y adaptador en la cadena agrega pérdida:

| Tipo de conector | Pérdida por unión |
|---|---|
| SMA de buena calidad | 0.1 - 0.2 dB |
| BNC de buena calidad | 0.1 - 0.2 dB |
| PL-259 (UHF) | 0.2 - 0.5 dB |
| Adaptador SMA a BNC | 0.2 - 0.5 dB |
| Adaptador de mala calidad | 0.5 - 2.0 dB |

Si tenés una cadena de 4 adaptadores de mala calidad, podés perder entre 2 y 8 dB adicionales. Eso se suma a las pérdidas del cable y puede hundir completamente tu recepción.

## Los Tipos de Conectores en el Mundo SDR

El ecosistema SDR usa varios tipos de conectores, lo que a veces obliga a usar adaptadores. Entender cuál es cuál te va a ahorrar mucha frustración:

- **SMA:** El estándar del mundo SDR. Pequeño, de atornillar. El RTL-SDR Blog V3 y la mayoría de los LNA usan conector SMA hembra.
- **MCX / SMB:** Más pequeños que el SMA. Algunos dongles DVB-T genéricos usan MCX. Si compraste un clon barato, probablemente tenga MCX.
- **BNC:** El estándar del mundo de medición y test (osciloscopios, analizadores de espectro). Más grande que SMA, fácil de conectar/desconectar. Muchas antenas de buena calidad traen BNC.
- **PL-259 / SO-239 (UHF):** El conector clásico de radioaficionados HF. Grande, fácil de soldar, muy resistente. Usado en antenas de onda corta y VHF/UHF para radioaficionados.
- **F (TV):** El conector de antena de TV. Barato y ubicuo, pero con pérdidas altas. No lo uses en SDR.

## La Regla de Oro del Cableado RF

> **Usá el cable más corto y de menor pérdida que sea posible, y minimizá la cantidad de adaptadores en la cadena.**

Idealmente:
1. **Cable desde la antena hasta el primer componente (LNA o filtro): lo más corto posible** (menos de 1 metro, idealmente 30 cm o menos).
2. **Cable largo desde el LNA/filtro hasta el SDR:** Acá sí podés tener metros, porque la señal ya fue amplificada. Usá KMR-240 o KMR-400.
3. **Cero adaptadores si podés:** Pedí cables hechos a medida con los conectores que necesitás en cada extremo.

---

## Preguntas Frecuentes

**¿Dónde puedo conseguir KMR-240 o KMR-400 en Argentina?**
En Zorzal RF fabricamos chicotes a medida (KMR-240, KMR-400) con conectores SMA, BNC, PL-259 o cualquier combinación. Consultanos por WhatsApp o email para presupuesto.

**¿Puedo usar cable de red (Cat5/Cat6) como coaxial?**
No. El cable de red no es coaxial y no tiene la impedancia característica de 50 ohms necesaria para RF. Usarlo como cable de antena genera reflexiones, standing waves y pérdidas masivas.

**¿El cable de la antena de TV me sirve para SDR?**
Los cables de TV domésticos son de 75 ohms y el SDR trabaja con 50 ohms. Además, suelen ser RG-6 de baja calidad. Para señales de VHF (menores a 300 MHz) pueden funcionar moderadamente bien en distancias cortas, pero para ADS-B (1090 MHz) o microondas, las pérdidas son inaceptables.

---

### 🛍️ ¿Necesitás accesorios de calidad?
Consultanos sobre cables KMR a medida y accesorios RF:
- **[Kit ADS-B 1090 MHz Profesional: Antena + Filtro + Cable KMR](https://zorzalrf.empretienda.com.ar/antenas/estacion-ads-b-zorzal-rf-antena-cable-filtro)**
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**