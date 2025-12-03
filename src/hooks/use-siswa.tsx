import { dataSiswa } from "@/data/";
import { siswa } from "@/types";

export function findSiswa(search: string): siswa | null {
    const searchSiswa = dataSiswa.find(
        (v) => v.kelas === search || v.name === search
    );
    return searchSiswa ?? null;
}


export function nilaiMapel(siswaData: siswa): {
    mapel: string
    nilai: number
}[] {
    return [
        { mapel: 'Matematika', nilai: siswaData.nilaiMapel.matematika },
        { mapel: 'B. Indonesia', nilai: siswaData.nilaiMapel.bahasaIndonesia },
        { mapel: 'B. Inggris', nilai: siswaData.nilaiMapel.bahasaInggris },
        { mapel: 'IPA', nilai: siswaData.nilaiMapel.ipa },
        { mapel: 'IPS', nilai: siswaData.nilaiMapel.ips },
        { mapel: 'P. Agama', nilai: siswaData.nilaiMapel.pendidikanAgama },
        { mapel: 'PJOK', nilai: siswaData.nilaiMapel.pjok },
        { mapel: 'Seni Budaya', nilai: siswaData.nilaiMapel.senibudaya },
    ];
}


export function radar(siswaData: siswa): {
    subject: string
    nilai: number,
    fullMark: number
}[] {
    return [
        { subject: 'MTK', nilai: siswaData.nilaiMapel.matematika, fullMark: 100 },
        { subject: 'B.IND', nilai: siswaData.nilaiMapel.bahasaIndonesia, fullMark: 100 },
        { subject: 'B.ING', nilai: siswaData.nilaiMapel.bahasaInggris, fullMark: 100 },
        { subject: 'IPA', nilai: siswaData.nilaiMapel.ipa, fullMark: 100 },
        { subject: 'IPS', nilai: siswaData.nilaiMapel.ips, fullMark: 100 },
        { subject: 'P.AG', nilai: siswaData.nilaiMapel.pendidikanAgama, fullMark: 100 },
        { subject: 'PJOK', nilai: siswaData.nilaiMapel.pjok, fullMark: 100 },
        { subject: 'SENI', nilai: siswaData.nilaiMapel.senibudaya, fullMark: 100 },
    ];
}


export function tugas(siswaData: siswa): { name: string, value: number }[] {
    return [
        { name: 'Terkumpul', value: siswaData.tugasTerkumpul },
        { name: 'Belum', value: siswaData.jumlahTugas - siswaData.tugasTerkumpul },
    ];

}


export function trenNilai(siswaData: siswa): {
    kelas: string;
    rataRata: number;
}[] {
    return [
        ...siswaData.riwayatKelas.map(r => ({
            kelas: r.kelas,
            rataRata: r.rataRata,
        })),
        { kelas: siswaData.kelas, rataRata: siswaData.rataRataNilai }
    ];
}