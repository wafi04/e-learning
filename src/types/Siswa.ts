export type siswa = {
  name: string;
  kelas: string;
  nilai: number;
  nisn: string;
  nis: string;
  noAbsen: number;
  kehadiran: number;

  // Nilai per mata pelajaran
  nilaiMapel: {
    matematika: number;
    bahasaIndonesia: number;
    bahasaInggris: number;
    ipa: number;
    ips: number;
    pendidikanAgama: number;
    pjok: number;
    senibudaya: number;
  };

  // Statistik nilai
  nilaiTertinggi: number;
  nilaiTerendah: number;
  rataRataNilai: number;

  // Riwayat kelas yang pernah dilalui
  riwayatKelas: {
    kelas: string;
    tahunAjaran: string;
    rataRata: number;
    peringkat: number;
  }[];

  // Data tambahan untuk analisis
  jumlahTugas: number;
  tugasTerkumpul: number;
  persenTugasTerkumpul: number;
};
