---
title: "Interceptando 433 MHz: Decodificando sensores y dispositivos IoT"
description: "La banda ISM de 433 MHz está llena de datos sin encriptación. Con rtl_433 podés decodificar estaciones meteorológicas, sensores TPMS de autos y controles remotos de tu vecindario en minutos."
publishDate: 2026-09-18
author: "Equipo Zorzal RF"
tags: ["433mhz", "iot", "rtl_433", "sensores", "sdr", "seguridad", "argentina"]
category: "Proyectos Prácticos"
difficulty: "Principiante"
readingTime: 7
---

La banda **ISM** (Industrial, Científica y Médica) centrada en **433.92 MHz** es el "salvaje oeste" de las telecomunicaciones a corta distancia. Al no requerir licencias, los fabricantes la utilizan para que sus dispositivos transmitan ráfagas de datos libremente: termómetros, sensores de lluvia, alarmas de autos, llaves de portones y decenas de dispositivos más gritando su información al aire, **sin ningún tipo de encriptación**.

Con un [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) y un programa de código abierto llamado `rtl_433`, podés interceptar y leer todos esos datos en tiempo real. Es uno de los proyectos de iniciación más impresionantes por la cantidad de datos que encontrás en el primer minuto de uso.

## ¿Qué podés decodificar en 433 MHz?

La diversidad de protocolos en 433 MHz es enorme. `rtl_433` tiene soporte para **más de 200 tipos de dispositivos** de marcas como Acurite, Oregon Scientific, Bresser, Texas Instruments y cientos más. En un barrio argentino típico, vas a encontrar:

### Estaciones Meteorológicas Hogareñas
Las consolas de clima inalámbricas (como las de Oregon Scientific o Acurite) tienen un sensor exterior que transmite cada 30-60 segundos:
- Temperatura en tiempo real (al 0.1°C)
- Humedad relativa
- Velocidad y dirección del viento (en modelos más completos)
- Lluvia acumulada

En un barrio densamente poblado, es común encontrar 5-10 estaciones meteorológicas activas de los vecinos.

### Sensores TPMS de Neumáticos
Los autos modernos (desde 2012 en adelante, por regulación europea) tienen **sensores de presión de neumáticos** (TPMS) que transmiten por radio a la computadora del vehículo. Cada vez que un auto pasa por la calle, sus cuatro ruedas están transmitiendo:
- Presión de cada neumático (en PSI o kPa)
- Temperatura del neumático
- Estado de la batería del sensor
- ID único del sensor

Esto es fascinante desde el punto de vista de seguridad: es posible identificar un vehículo específico por el ID único de sus sensores TPMS.

### Controles Remotos y Alarmas
Las llaves de autos (keyfobs), timbres inalámbricos, alarmas perimetrales y sensores de movimiento sin cable suelen usar la banda 433 MHz. Con `rtl_433` podés ver qué dispositivos están activos alrededor tuyo.

### Medidores Inteligentes de Energía
Algunos medidores eléctricos de consumo inteligentes (smart meters) transmiten en esta banda, reportando el consumo energético periódicamente.

## Hardware Necesario

Cualquier [RTL-SDR Blog V3](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original) funciona a la perfección para esta tarea. Las señales de 433 MHz son relativamente fuertes (los dispositivos están pensados para funcionar en interiores) y no necesitás equipos sofisticados.

Para la antena, usá el [Kit Antena Dipolo Multipropósito](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil):
1. Enroscá las varillas de longitud media.
2. Extendé cada brazo hasta **17 centímetros** (longitud de resonancia a 433 MHz).
3. Colocá la antena vertical cerca de una ventana.

Con esta configuración básica, vas a ver decenas de dispositivos activos en un barrio residencial normal.

## rtl_433: La herramienta de referencia

**[rtl_433](https://github.com/merbanan/rtl_433)** es un proyecto de código abierto que combina un demodulador SDR, un motor de decodificación de protocolos y una base de datos de 200+ dispositivos conocidos. Es el estándar de facto de la comunidad para análisis de 433 MHz.

### Instalación

**Windows:** Descargá el ejecutable precompilado desde la sección [Releases](https://github.com/merbanan/rtl_433/releases) del repositorio de GitHub.

**Linux (Ubuntu/Debian/Raspberry Pi):**
```bash
sudo apt-get install rtl_433
```

**macOS (Homebrew):**
```bash
brew install rtl_433
```

### Uso básico

Simplemente ejecutá en la consola:
```bash
rtl_433
```

El programa tomará control automáticamente del RTL-SDR, sintonizará la frecuencia central de 433.92 MHz, y comenzará a mostrar dispositivos detectados:

```
[Acurite-Tower] id: 1542  channel: B  battery_ok: 1
    temperature_C: 22.4  humidity: 65

[TPMS] type: Renault  id: 0xA3B2C1D0  
    pressure_kPa: 221.0  temperature_C: 28  flags: 00

[Bresser-3CH] id: 9  channel: 1  battery_ok: 1
    temperature_C: 19.7  humidity: 71
```

### Opciones útiles

```bash
# Monitorear en frecuencia específica
rtl_433 -f 433920000

# Exportar datos a JSON para análisis posterior
rtl_433 -F json > datos_433.json

# Modo verbose: ver todos los paquetes, incluyendo los no reconocidos
rtl_433 -v

# Escanear múltiples frecuencias ISM (433, 868, 315 MHz)
rtl_433 -f 433.92M -f 868.3M -f 315M
```

## Integración con Home Assistant

Una de las aplicaciones más populares de `rtl_433` es integrar los datos de las estaciones meteorológicas del vecindario en **Home Assistant** (el sistema de automatización del hogar):

1. Ejecutá `rtl_433` con salida MQTT.
2. Configurá Home Assistant para escuchar el topic MQTT de tu sensor favorito.
3. Tus dashboards de casa ahora pueden mostrar la temperatura del jardín del vecino en lugar de (o además de) la tuya.

Esta integración requiere un broker MQTT (como Mosquitto) y está más allá del alcance de esta guía, pero hay excelente documentación en la comunidad de Home Assistant y `rtl_433`.

---

## Preguntas Frecuentes

**¿Es legal decodificar estas señales?**
La radioescucha pasiva es legal en Argentina. Los dispositivos ISM de 433 MHz transmiten datos en abierto deliberadamente (no tienen encriptación). Sin embargo, **usar esa información para perjudicar a alguien** (ej. clonar una llave de auto para robo) está prohibido por el Código Penal. Descifrar la señal por curiosidad técnica y educativa es completamente legítimo.

**¿Puedo detectar si alguien me está "espiando" con este método?**
Al contrario: este método es pasivo y solo recibe. No hay forma de que el dueño del dispositivo sepa que lo estás escuchando. Lo que sí podés hacer es revisar qué sensores propios tuyos están transmitiendo y qué información revelan.

**¿Puedo también transmitir en 433 MHz?**
Para transmitir necesitás hardware adicional (un módulo transmisor de 433 MHz o un HackRF/LimeSDR). Además, hacerlo sin seguir las regulaciones de potencia y uso de la banda ISM puede generar interferencias. El RTL-SDR es solo receptor.

---

### 🛍️ ¿Necesitás el hardware para este proyecto?
Empezá a escanear la banda ISM 433 MHz con el hardware recomendado:
- **[Receptor RTL-SDR Blog V3 USB-A](https://zorzalrf.empretienda.com.ar/sdrs/rtl-sdr-blog-v3-receptor-sdr-usb-a-original)**
- **[Kit Antena Dipolo Multipropósito para SDR](https://zorzalrf.empretienda.com.ar/antenas/kit-antena-dipolo-multiproposito-para-sdr-portatil-y-versatil)**
