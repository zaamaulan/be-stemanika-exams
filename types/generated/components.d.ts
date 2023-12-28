import type { Schema, Attribute } from '@strapi/strapi';

export interface SoalsSoal extends Schema.Component {
  collectionName: 'components_soals_soals';
  info: {
    displayName: 'soal';
    description: '';
  };
  attributes: {
    teks_pertanyaan: Attribute.String;
    pilihan_jawaban: Attribute.JSON;
    jawaban_benar: Attribute.String;
    poin_nilai: Attribute.Integer & Attribute.DefaultTo<4>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'soals.soal': SoalsSoal;
    }
  }
}
