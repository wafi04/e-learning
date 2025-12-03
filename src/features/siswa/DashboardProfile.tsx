

import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { User, BookOpen, Calendar, Award, TrendingUp, CheckCircle2 } from 'lucide-react';
import { usefindSiswa } from '@/hooks';
import { Progress } from '@/components/ui/progress';

export function DashboardProfile() {
    const siswaName = "Budi Santoso";
    const findSiswa = usefindSiswa(siswaName)

    if (!findSiswa) {
        return <div className="p-8 text-center text-gray-500">Data siswa tidak ditemukan</div>;
    }

    const mapelEntries = Object.entries(findSiswa.nilaiMapel);

    return (
        <section className="space-y-6">
            {/* Header Profile Card */}
           

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Kehadiran</CardTitle>
                        <CheckCircle2 className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{findSiswa.kehadiran}%</div>
                        <Progress value={findSiswa.kehadiran} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-2">Sangat baik</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Pengumpulan Tugas</CardTitle>
                        <BookOpen className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{findSiswa.persenTugasTerkumpul}%</div>
                        <Progress value={findSiswa.persenTugasTerkumpul} className="mt-2" />
                        <p className="text-xs text-gray-500 mt-2">{findSiswa.tugasTerkumpul} dari {findSiswa.jumlahTugas} tugas</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Rata-rata Nilai</CardTitle>
                        <Award className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{findSiswa.rataRataNilai}</div>
                        <div className="flex items-center gap-2 mt-2 text-xs">
                            <span className="text-gray-500">Tertinggi: <span className="font-semibold text-green-600">{findSiswa.nilaiTertinggi}</span></span>
                            <span className="text-gray-500">Terendah: <span className="font-semibold text-orange-600">{findSiswa.nilaiTerendah}</span></span>
                        </div>
                    </CardContent>
                </Card>
            </div>

            {/* Subject Scores */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <BookOpen className="h-5 w-5" />
                        Nilai Per Mata Pelajaran
                    </CardTitle>
                    <CardDescription>Daftar nilai untuk setiap mata pelajaran</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {mapelEntries.map(([mapel, nilai]) => (
                            <div key={mapel} className="flex items-center justify-between p-3 border rounded-lg hover:bg-primary/30 transition-colors">
                                <div className="flex-1">
                                    <p className="font-medium capitalize">{mapel.replace(/([A-Z])/g, ' $1').trim()}</p>
                                    <Progress value={(nilai / 100) * 100} className="mt-2 h-2" />
                                </div>
                                <Badge
                                    variant={nilai >= 90 ? "default" : nilai >= 80 ? "secondary" : "outline"}
                                    className="ml-4"
                                >
                                    {nilai}
                                </Badge>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Class History */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Calendar className="h-5 w-5" />
                        Riwayat Kelas
                    </CardTitle>
                    <CardDescription>Performa akademik tahun-tahun sebelumnya</CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {findSiswa.riwayatKelas.map((riwayat, index) => (
                            <div key={index} className="flex items-center justify-between p-4 border rounded-lg ">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full  flex items-center justify-center">
                                        <TrendingUp className="h-6 w-6 text-blue-600" />
                                    </div>
                                    <div>
                                        <p className="font-semibold">Kelas {riwayat.kelas}</p>
                                        <p className="text-sm text-gray-500">{riwayat.tahunAjaran}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-6">
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Rata-rata</p>
                                        <p className="font-bold text-lg">{riwayat.rataRata}</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-sm text-gray-500">Peringkat</p>
                                        <Badge variant="outline" className="font-bold">#{riwayat.peringkat}</Badge>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}