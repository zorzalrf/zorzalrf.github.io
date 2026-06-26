---
title: "Instalar iridium-toolkit"
description: "Cómo decodificar ráfagas de satélite Iridium usando iridium-sniffer e iridium-toolkit en Linux."
publishDate: 2026-06-25
author: "Equipo Zorzal RF"
tags: ["tutorial", "iridium", "satélite", "linux"]
category: "Decodificación"
difficulty: "Experto"
readingTime: 6
---

<div class="attribution">
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
  <p><strong>Basado en la documentación oficial de airframes.io.</strong><br/>Traducido y adaptado por el equipo técnico de Zorzal RF para la comunidad hispanohablante.</p>
</div>

`iridium-toolkit` es un conjunto de herramientas desarrolladas por el Chaos Computer Club de Munich para analizar y decodificar marcos satelitales Iridium. Trabaja en conjunto con un demodulador (ya sea `gr-iridium` o `iridium-sniffer`) que captura las ráfagas en bruto emitidas desde el satélite.

## Cómo funciona el flujo de decodificación Iridium

Decodificar ACARS sobre Iridium requiere dos componentes:

1.  **Un demodulador** que captura y demodula las ráfagas:
    *   **iridium-sniffer** (recomendado): Programa C liviano. No depende de GNU Radio, ideal para la Raspberry Pi.
    *   **gr-iridium**: Demodulador basado en GNU Radio. Consume más recursos pero está bien establecido.
2.  **iridium-toolkit** que toma las tramas demoduladas y extrae los mensajes ACARS.

## Instalación en Debian/Ubuntu

### Instalar dependencias

```bash
sudo apt-get install build-essential python3 python3-pip git
```

### Instalar iridium-toolkit

```bash
git clone https://github.com/muccc/iridium-toolkit.git
cd iridium-toolkit
pip3 install -r requirements.txt
```

### Instalar iridium-sniffer (demodulador recomendado)

```bash
sudo apt-get install cmake libsoapysdr-dev soapysdr-module-rtlsdr
git clone https://github.com/alphafox02/iridium-sniffer.git
cd iridium-sniffer
mkdir build && cd build
cmake ..
make
sudo make install
```

## Uso

### Capturar y decodificar

El flujo de trabajo típico conecta (vía *pipe*) la salida demodulada de `iridium-sniffer` hacia `iridium-toolkit`:

```bash
iridium-sniffer -d driver=rtlsdr 2>/dev/null | python3 iridium-parser.py
```

### Requisitos de Hardware

*   **SDR**: Cualquier SDR que pueda sintonizar la Banda L de Iridium (1616–1626.5 MHz). SDRs con más ancho de banda capturarán más frecuencias Iridium a la vez. El [RTL-SDR](/catalogo/sdr/) funciona, pero tiene un ancho limitado de ~2.4 MHz.
*   **[Antena](/catalogo/antenas/)**: Una antena omnidireccional Banda L con vista despejada al cielo.
*   **[LNA](/catalogo/accesorios/)**: Se recomienda encarecidamente un amplificador de bajo ruido (LNA) para el rango de 1.6 GHz (ej. Nooelec SAWbird+ IR).

> **Nota:** La decodificación Iridium es más avanzada que VHF ACARS o VDL2. Si recién comienzas con Airframes, considera empezar primero con `acarsdec` o `dumpvdl2`.
