export type DeliveryCategory = 'Entrega Inmediata' | 'Entrega 30 días' | 'Sin Stock';
export type ProductType = 'SDR' | 'Antena' | 'Accesorios' | 'Filtros';

export interface CatalogItem {
  title: string;
  category: DeliveryCategory;
  type: ProductType[];
  specs: string[];
  idealUse?: string;
  mercadoLibreUrl?: string;
  isHero?: boolean;
  badge?: string;
}

export const catalogoItems: CatalogItem[] = [
  {
    "title": "Airspy HF+ Discovery - Receptor SDR de alta perfomance",
    "type": ["SDR"],
    "specs": [
      "Rango de frecuencia optimizado para bandas HF y VHF",
      "Arquitectura Zero-IF con filtros de seguimiento de alta selectividad",
      "Rango dinámico de clase mundial en entornos HF",
      "ADC de alto rendimiento para una mínima distorsión de señal",
      "Interfaz USB para procesamiento digital de señal"
    ],
    "idealUse": "Monitoreo avanzado de alta precisión en HF.",
    "category": "Entrega 30 días"
  },
  {
    "title": "Airspy R2 SDR Profesional - 12 bits Alta Sensibilidad",
    "type": ["SDR"],
    "specs": [
      "Rango de frecuencia nativo de 24 MHz a 1800 MHz",
      "ADC de 12 bits con muestreo a 20 MSPS",
      "Bajo ruido de fase en el oscilador principal",
      "Puertos de extensión SGPIO integrados",
      "Sincronización externa para sistemas complejos"
    ],
    "idealUse": "Escaneo profesional de radiofrecuencia panorámico.",
    "category": "Entrega 30 días"
  },
  {
    "title": "SpyVerter R2 - Upconverter HF para SDR (Calidad Profesional)",
    "type": ["Accesorios"],
    "specs": [
      "Convertidor ascendente (Up-converter) de banda ancha",
      "Mezclador doble balanceado de alta calidad",
      "Oscilador de bajo ruido de fase integrado",
      "Compatible con alimentación vía Bias-Tee",
      "Extensión de cobertura de receptores a espectro HF/DC"
    ],
    "idealUse": "Permite recibir onda corta en equipos VHF/UHF.",
    "category": "Entrega 30 días"
  },
  {
    "title": "Airspy Mini SDR - Receptor Alto Rendimiento 12 bits",
    "type": ["SDR"],
    "specs": [
      "Rango de frecuencia nativo de 24 MHz a 1700 MHz",
      "Diseño ultra-compacto y portátil",
      "Arquitectura basada en el modelo R2 de alto rendimiento",
      "ADC de 12 bits con salida IQ de hasta 6 MSPS",
      "Eficiencia energética optimizada para dispositivos móviles"
    ],
    "idealUse": "Recepción SDR de alto rendimiento en formato portátil.",
    "category": "Entrega 30 días"
  },
  {
    "title": "Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo",
    "type": ["SDR", "Antena"],
    "specs": [
      "Tuner R860 (R820T2) con oscilador TCXO de 1 PPM",
      "Compatible con SDRSharp, GQRX y HDSDR",
      "Circuito Bias-Tee conmutable vía software",
      "Protección ESD adicional y bajo nivel de ruido",
      "Incluye base dipolo, cables y soportes"
    ],
    "idealUse": "Kit completo para iniciarse en radioescucha.",
    "category": "Entrega Inmediata",
    "isHero": true,
    "badge": "RECOMENDADO PARA PRINCIPIANTES"
  },
  {
    "title": "Receptor SDR RTL-SDR Blog V3 - HF/VHF/UHF TCXO 1PPM",
    "type": ["SDR"],
    "specs": [
      "Tuner R860 (R820T2) con oscilador TCXO de 1 PPM",
      "Compatible con SDRSharp, GQRX y HDSDR",
      "Muestreo directo integrado para recepción HF básica",
      "Carcasa metálica blindada para reducción de ruido",
      "Circuito Bias-Tee interno para alimentación de accesorios"
    ],
    "idealUse": "Receptor SDR versátil de excelente valor.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Receptor SDR RTL-SDR Blog V3 USB-C - TCXO 1PPM SMA",
    "type": ["SDR"],
    "specs": [
      "Versión actualizada con conector USB-C hembra",
      "Tuner R860 (R820T2) con TCXO de 1 PPM",
      "Carcasa de aluminio con disipación pasiva",
      "Protección ESD mejorada contra sobretensiones",
      "Muestreo directo integrado para bandas HF"
    ],
    "idealUse": "Receptor SDR optimizado para dispositivos modernos.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Filtro Rechazo Banda FM (88-108 MHz) - FM Trap para SDR",
    "type": ["Filtros"],
    "specs": [
      "Atenuación de >50dB en banda FM (88 - 108 MHz)",
      "Pérdida de inserción <0.5 dB (0-1 GHz)",
      "Diseño optimizado para suprimir sobrecarga por emisoras FM",
      "Incluye adaptador SMA macho a SMA macho",
      "Construcción robusta para aplicaciones de recepción (RX)"
    ],
    "idealUse": "Bloquea interferencias de emisoras FM locales.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Kit Antena Dipolo Multipropósito para SDR - Portátil y Versátil",
    "type": ["Antena"],
    "specs": [
      "Base dipolo versátil con cable RG174 de 60 cm",
      "Incluye 4 antenas telescópicas intercambiables",
      "Cable de extensión RG174 de 3 metros",
      "Soportes incluidos: trípode flexible y ventosa",
      "Diseño adaptable para uso temporal en exteriores"
    ],
    "idealUse": "Antena versátil para uso portátil temporal.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Filtro SAW 1090 MHz (ADS-B) - Reduce Interferencia",
    "type": ["Filtros"],
    "specs": [
      "Filtro pasabanda centrado específicamente en 1090 MHz",
      "Carcasa de aluminio resistente, en color azul",
      "Diseñado para eliminar interferencias de bandas adyacentes",
      "Instalación en línea entre antena y receptor",
      "Optimizado para señales ADS-B (aviación)"
    ],
    "idealUse": "Mejora la recepción de vuelos ADS-B.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Antena ADS-B 1090 MHz 5.5dBi - Exterior Profesional N-Type",
    "type": ["Antena"],
    "specs": [
      "Ganancia de 5.5 dBi para largo alcance",
      "Optimizado exclusivamente para la banda de 1090 MHz",
      "Conector tipo N hembra de alta robustez",
      "Diseñado para recepción ADS-B de alta precisión",
      "Construcción resistente para montaje exterior"
    ],
    "idealUse": "Antena de largo alcance para tráfico aéreo.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "LNA Wideband 50-4000MHz RTL-SDR Blog",
    "type": ["Accesorios"],
    "specs": [
      "Basado en el componente SPF5189Z de banda ancha",
      "Rango de operación: 50 MHz a 4 GHz",
      "Factor de ruido ultra bajo: inferior a 1dB",
      "Alimentación vía Bias-Tee (3-5V, 90mA)",
      "Opcional: alimentación externa mediante header interno"
    ],
    "idealUse": "Amplifica señales débiles en banda ancha.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Web-888 SDR - Receptor de Red para Acceso Remoto",
    "type": ["SDR"],
    "specs": [
      "ADC de 16 bits con tasa de muestreo de 122.88 MHz",
      "Ancho de banda DDC de 62 MHz",
      "Rango de frecuencia: 10 kHz - 60 MHz (HF) y 118 - 147 MHz (VHF)",
      "Soporte para 13 canales de recepción simultáneos con waterfall",
      "Módulo GPS integrado para sincronización precisa de tiempo/frecuencia"
    ],
    "idealUse": "Receptor web multi-banda de alta fidelidad.",
    "category": "Entrega 30 días"
  },
  {
    "title": "Antena Iridium 33-HC610-28 - Grado Industrial / Alta Precisión",
    "type": ["Antena"],
    "specs": [
      "Frecuencia de operación: 1.616 GHz a 1.626 GHz (Banda Iridium)",
      "Ganancia de 28 dB con polarización circular a derechas (RHCP)",
      "Clasificación IP67 para protección total contra polvo y agua",
      "Estilo de montaje atornillado con conector SMA Macho",
      "Rango de temperatura extendido: -40°C a +85°C"
    ],
    "idealUse": "Comunicaciones satelitales en entornos exigentes.",
    "category": "Sin Stock"
  },
  {
    "title": "Antena Activa Patch Banda L (1.5-1.7 GHz) - Ideal Inmarsat / Iridium",
    "type": ["Antena"],
    "specs": [
      "Antena patch activa RHCP con LNA y filtro integrados",
      "Rango de frecuencia: 1525 MHz - 1660 MHz",
      "Carcasa resistente a la intemperie (Weather Proof)",
      "Alimentación vía Bias-Tee (3.3 - 5V, 20mA)",
      "Incluye cable RG174 de 2m y soportes (trípode y ventosa)"
    ],
    "idealUse": "Recepción de satélites en banda L.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Kit ADS-B 1090 MHz Profesional: Antena + Filtro + Cable",
    "type": ["Antena", "Filtros", "Accesorios"],
    "specs": [
      "Antena exterior 5.5 dBi con conector N-Type",
      "Filtro SAW pasabanda 1090 MHz",
      "Cable coaxial KMR-240 de bajas pérdidas",
      "Pigtails y adaptadores incluidos",
      "Mejora el alcance de tu receptor en hasta un 300%"
    ],
    "idealUse": "Para quienes ya tienen receptor y buscan alcance máximo.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Estación ADS-B: Receptor V3 + Antena + Filtro",
    "type": ["SDR", "Antena", "Filtros"],
    "specs": [
      "Receptor RTL-SDR Blog V3 (Carcasa de aluminio)",
      "Antena exterior 5.5 dBi 1090 MHz con conector N",
      "Filtro SAW 1090 MHz para rechazo de interferencias",
      "Cableado KMR de bajas pérdidas y adaptadores",
      "Kit completo llave en mano para montar un radar local"
    ],
    "idealUse": "Kit integral para montar tu propio radar de aviones.",
    "category": "Entrega Inmediata"
  },
  {
    "title": "Kit Iridium Pro: Receptor Airspy R2 + Antena Industrial Calian HC610",
    "type": ["SDR", "Antena"],
    "specs": [
      "Receptor SDR Profesional Airspy R2 (12 bits)",
      "Antena activa Calian HC610 de grado industrial",
      "Ideal para recepción 24/7 de la constelación Iridium",
      "Rango de operación optimizado para Banda L",
      "Calidad de señal superior para decodificación sin pérdida"
    ],
    "idealUse": "Decodificación profesional de señales Iridium/Inmarsat.",
    "category": "Sin Stock"
  }
];