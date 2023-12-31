import type { Schema, Attribute } from '@strapi/strapi';

export interface NilaiNilai extends Schema.Component {
  collectionName: 'components_nilai_nilais';
  info: {
    displayName: 'nilai';
    description: '';
  };
  attributes: {
    nilai: Attribute.Integer & Attribute.Required;
    ujian: Attribute.Relation<'nilai.nilai', 'oneToOne', 'api::ujian.ujian'>;
    nama_ujian: Attribute.String & Attribute.Required;
  };
}

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
      'nilai.nilai': NilaiNilai;
      'soals.soal': SoalsSoal;
    }
  }
}
