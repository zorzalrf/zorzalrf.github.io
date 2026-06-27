export type DeliveryCategory = 'Entrega Inmediata' | 'Sin Stock';
export type ProductType = 'SDR' | 'Antenas' | 'Accesorios' | 'Filtros';

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
    "title": "Kit RTL-SDR Blog V3 + Antena Dipolo - SDR Completo",
    "type": ["SDR", "Antenas"],
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
    "type": ["Antenas"],
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
    "type": ["Antenas"],
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
    "title": "Kit ADS-B 1090 MHz Profesional: Antena + Filtro + Cable",
    "type": ["Antenas", "Filtros", "Accesorios"],
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
    "type": ["SDR", "Antenas", "Filtros"],
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

];