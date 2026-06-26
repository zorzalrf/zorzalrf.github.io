import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeKatex from 'rehype-katex';

import sitemap from '@astrojs/sitemap';

import pagefind from "astro-pagefind";

export default defineConfig({
  site: 'https://zorzalrf.com',
  base: '/',
  trailingSlash: 'always',

  redirects: {
    '/catalog': '/catalogo/',
    '/resources': '/recursos/',
    '/catalog/sdr': '/catalogo/sdr/',
    '/catalog/antenas': '/catalogo/antenas/',
    '/catalog/accesorios': '/catalogo/accesorios/',
    '/catalog/filtros': '/catalogo/filtros/',
    '/resources/acars': '/recursos/acars/',
    '/resources/ads-b': '/recursos/ads-b/',
    '/resources/airframes-clientes-decodificadores': '/recursos/airframes-clientes-decodificadores/',
    '/resources/airframes-como-alimentar': '/recursos/airframes-como-alimentar/',
    '/resources/airframes-docker': '/recursos/airframes-docker/',
    '/resources/airframes-introduccion': '/recursos/airframes-introduccion/',
    '/resources/airframes-por-que-alimentar': '/recursos/airframes-por-que-alimentar/',
    '/resources/ais': '/recursos/ais/',
    '/resources/antena-dipolo': '/recursos/antena-dipolo/',
    '/resources/bias-tee': '/recursos/bias-tee/',
    '/resources/cables-conectores': '/recursos/cables-conectores/',
    '/resources/guia-compra-sdr': '/recursos/guia-compra-sdr/',
    '/resources/guia-inicio-airframes': '/recursos/guia-inicio-airframes/',
    '/resources/guia-uso-antena-dipolo-rtlsdr': '/recursos/guia-uso-antena-dipolo-rtlsdr/',
    '/resources/instalar-acarsdec': '/recursos/instalar-acarsdec/',
    '/resources/instalar-dumphfdl': '/recursos/instalar-dumphfdl/',
    '/resources/instalar-dumpvdl2': '/recursos/instalar-dumpvdl2/',
    '/resources/instalar-iridium-toolkit': '/recursos/instalar-iridium-toolkit/',
    '/resources/interferencias-fm': '/recursos/interferencias-fm/',
    '/resources/lna-guia-uso': '/recursos/lna-guia-uso/',
    '/resources/onda-corta-hf': '/recursos/onda-corta-hf/',
    '/resources/recepcion-radiosondas-smn': '/recursos/recepcion-radiosondas-smn/',
    '/resources/satelites-meteorologicos': '/recursos/satelites-meteorologicos/',
    '/resources/servidor-sdr-remoto': '/recursos/servidor-sdr-remoto/',
    '/resources/tecnologia-acars-intro': '/recursos/tecnologia-acars-intro/',
    '/resources/tecnologia-acars-seguridad': '/recursos/tecnologia-acars-seguridad/',
    '/resources/tecnologia-aero-intro': '/recursos/tecnologia-aero-intro/',
    '/resources/tecnologia-aoi-intro': '/recursos/tecnologia-aoi-intro/',
    '/resources/tecnologia-hfdl-apps': '/recursos/tecnologia-hfdl-apps/',
    '/resources/tecnologia-hfdl-intro': '/recursos/tecnologia-hfdl-intro/',
    '/resources/tecnologia-resumen': '/recursos/tecnologia-resumen/',
    '/resources/tecnologia-sistemas-receptores': '/recursos/tecnologia-sistemas-receptores/',
    '/resources/tecnologia-vdl-intro': '/recursos/tecnologia-vdl-intro/'
},

  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [rehypeKatex]
  },

  integrations: [sitemap(), pagefind()]
});