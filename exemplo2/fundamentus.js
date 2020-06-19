'use strict';

const mongoose = require('mongoose')

const Fundamentus = new mongoose.Schema({
    papel: {
        type: String,
        required: true
    },
    data: {
        type: String,
        required: true
    },
    empresa: {
        type: String,
        required: true
    },
    setor: {
        type: String,
        required: true
    },
    subsetor: {
        type: String,
        required: true
    },
    contacao: {
        type: Number
    },
    min_52_sem: {
        type: Number
    },
    max_52_sem: {
        type: Number
    },
    vol_med_2m: {
        type: Number
    },
    valor_de_mercado: {
        type: Number
    },
    ult_balanco_processado: {
        type: String
    },
    valor_da_firma: {
        type: Number
    },
    nro_acoes: { type: Number },
    dia: { type: Number },
    p_l: { type: Number },
    lpa: { type: Number },
    mes: { type: Number },
    p_vp: { type: Number },
    vpa: { type: Number },
    trinta_dias: { type: Number },
    p_ebit: { type: Number },
    marg_bruta: { type: Number },
    doze_meses: { type: Number },
    psr: { type: Number },
    marg_ebit: { type: Number },
    ano_2020: { type: Number },
    p_ativos: { type: Number },
    marg_liquida: { type: Number },
    ano_2019: { type: Number },
    p_cap_giro: { type: Number },
    ebit_ativo: { type: Number },
    ano_2018: { type: Number },
    p_ativ_circ_liq: { type: Number },
    roic: { type: Number },
    ano_2017: { type: Number },
    div_yield: { type: Number },
    roe: { type: Number },
    ano_2016: { type: Number },
    ev_ebitda: { type: Number },
    liquidez_corr: { type: Number },
    ano_2015: { type: Number },
    ev_ebit: { type: Number },
    div_br_patrim: { type: Number },
    cres_rec_5a: { type: Number },
    giro_ativos: { type: Number },
    ativo: { type: Number },
    div_bruta: { type: Number },
    disponibilidades: { type: Number },
    div_liquida: { type: Number },
    ativo_circulante: { type: Number },
    patrim_liq: { type: Number },
    receita_liquida: { type: Number },
    receita_liquida: { type: Number },
    ebit: { type: Number },
    ebit: { type: Number },
    lucro_liquido: { type: Number },
    lucro_liquido: { type: Number },
});

module.exports = mongoose.model('fundamentus', Fundamentus);