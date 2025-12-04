export type DataMapel = {
  name: string;
  kode: string;
  kelas: string;
  kkm: number;
  pengampu: string;
};

export type Kelas = {
  name: string;
  wali_kelas: string;
  ketua_kelas: string;
  tingkat: number;
  jumlah_laki_laki: number;
  jumlah_perempuan: number;
};

export type Siswa = {
  name: string;
  nisn: string;
  absen: string;
  kelas_sekarang: string;
  kelas: Pick<Kelas, "name" | "wali_kelas" | "ketua_kelas">[];
};

export type Guru = {
  name: string;
  nip: string;
  no_telepon: string;
};
