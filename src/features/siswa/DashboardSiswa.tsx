"use client"
import { dataSiswa } from "@/data";
import { LineChart, Line, BarChart, Bar, RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { nilaiMapel, radar, trenNilai, tugas, } from "@/hooks";


export function DashboardSiswa() {
    const userName = "Dewi Anggraini";

    // Cari data siswa berdasarkan nama
    const siswaData = dataSiswa.find(s => s.name === userName);

    if (!siswaData) {
        return <div className="p-8 text-center">Data siswa tidak ditemukan</div>;
    }

    // Prepare data untuk chart nilai per mata pelajaran
    const nilaiMapelData = nilaiMapel(siswaData)

    // Data untuk radar chart
    const radarData = radar(siswaData)

    // Data tren nilai dari kelas sebelumnya
    const trenNilaiData = trenNilai(siswaData)

    // Data untuk pie chart tugas
    const tugasData = tugas(siswaData)

    const COLORS = ['hsl(var(--primary))', 'hsl(var(--destructive))'];

    return (
        <section className="space-y-4">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Kehadiran</CardDescription>
                        <CardTitle className="text-2xl text-primary">{siswaData.kehadiran}%</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Nilai Tertinggi</CardDescription>
                        <CardTitle className="text-2xl text-primary">{siswaData.nilaiTertinggi}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Nilai Terendah</CardDescription>
                        <CardTitle className="text-2xl text-primary">{siswaData.nilaiTerendah}</CardTitle>
                    </CardHeader>
                </Card>
                <Card>
                    <CardHeader className="pb-2">
                        <CardDescription>Tugas Terkumpul</CardDescription>
                        <CardTitle className="text-2xl text-primary">{siswaData.persenTugasTerkumpul}%</CardTitle>
                    </CardHeader>
                </Card>
            </div>

            {/* Charts Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Nilai Per Mata Pelajaran - Bar Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Nilai Per Mata Pelajaran</CardTitle>
                        <CardDescription>Perbandingan nilai setiap mata pelajaran</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={nilaiMapelData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                                <XAxis
                                    dataKey="mapel"
                                    angle={-45}
                                    textAnchor="end"
                                    height={100}
                                    className="text-xs fill-muted-foreground"
                                />
                                <YAxis domain={[0, 100]} className="fill-muted-foreground" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px'
                                    }}
                                />
                                <Bar dataKey="nilai" fill="hsl(var(--primary))" />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Radar Chart - Profil Nilai */}
                <Card>
                    <CardHeader>
                        <CardTitle>Profil Nilai (Radar)</CardTitle>
                        <CardDescription>Visualisasi keseimbangan nilai antar mata pelajaran</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <RadarChart data={radarData}>
                                <PolarGrid stroke="hsl(var(--border))" />
                                <PolarAngleAxis dataKey="subject" className="fill-muted-foreground" />
                                <PolarRadiusAxis domain={[0, 100]} className="fill-muted-foreground" />
                                <Radar
                                    name="Nilai"
                                    dataKey="nilai"
                                    stroke="hsl(var(--primary))"
                                    fill="hsl(var(--primary))"
                                    fillOpacity={0.6}
                                />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px'
                                    }}
                                />
                            </RadarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Tren Nilai - Line Chart */}
                <Card>
                    <CardHeader>
                        <CardTitle>Tren Nilai dari Kelas Sebelumnya</CardTitle>
                        <CardDescription>Perkembangan rata-rata nilai dari kelas 8 hingga sekarang</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <LineChart data={trenNilaiData}>
                                <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                                <XAxis dataKey="kelas" className="fill-muted-foreground" />
                                <YAxis domain={[0, 100]} className="fill-muted-foreground" />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px'
                                    }}
                                />
                                <Legend />
                                <Line
                                    type="monotone"
                                    dataKey="rataRata"
                                    stroke="hsl(var(--primary))"
                                    strokeWidth={2}
                                    name="Rata-rata Nilai"
                                />
                            </LineChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Pie Chart - Pengumpulan Tugas */}
                <Card>
                    <CardHeader>
                        <CardTitle>Status Pengumpulan Tugas</CardTitle>
                        <CardDescription>Perbandingan tugas yang sudah dan belum dikumpulkan</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={tugasData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}`}
                                    outerRadius={100}
                                    fill="hsl(var(--primary))"
                                    dataKey="value"
                                >
                                    {tugasData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                                    ))}
                                </Pie>
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'hsl(var(--background))',
                                        border: '1px solid hsl(var(--border))',
                                        borderRadius: '6px'
                                    }}
                                />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Riwayat Kelas Table */}
            <Card>
                <CardHeader>
                    <CardTitle>Riwayat Kelas</CardTitle>
                    <CardDescription>Histori prestasi dari kelas sebelumnya</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Kelas</TableHead>
                                <TableHead>Tahun Ajaran</TableHead>
                                <TableHead>Rata-rata</TableHead>
                                <TableHead>Peringkat</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {siswaData.riwayatKelas.map((riwayat, index) => (
                                <TableRow key={index}>
                                    <TableCell className="font-medium">{riwayat.kelas}</TableCell>
                                    <TableCell>{riwayat.tahunAjaran}</TableCell>
                                    <TableCell>{riwayat.rataRata}</TableCell>
                                    <TableCell>#{riwayat.peringkat}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </section>
    )
}