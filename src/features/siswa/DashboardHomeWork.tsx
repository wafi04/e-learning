"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { BookOpen, CheckCircle, Clock, XCircle, TrendingUp, AlertTriangle, FileText, Calendar } from 'lucide-react';
import { tugasMapel } from '@/data';


export default function DashboardHomeWork() {
    const [selectedMapel, setSelectedMapel] = useState<number | null>(null);

    // Hitung statistik total
    const totalTugas = tugasMapel.reduce((sum, m) => sum + m.totalTugas, 0);
    const totalSelesai = tugasMapel.reduce((sum, m) => sum + m.tugasSelesai, 0);
    const totalTerlambat = tugasMapel.reduce((sum, m) => sum + m.tugasTerlambat, 0);
    const totalBelum = tugasMapel.reduce((sum, m) => sum + m.tugasBelum, 0);
    const persenSelesai = ((totalSelesai / totalTugas) * 100).toFixed(1);
    const rataRataNilai = (tugasMapel.reduce((sum, m) => sum + m.nilai, 0) / tugasMapel.length).toFixed(1);

    // Data untuk pie chart
    const pieData = [
        { name: 'Selesai Tepat Waktu', value: totalSelesai - totalTerlambat, color: '#22c55e' },
        { name: 'Terlambat', value: totalTerlambat, color: '#f59e0b' },
        { name: 'Belum Dikerjakan', value: totalBelum, color: '#ef4444' },
    ];

    // Data untuk radar chart
    const radarData = tugasMapel.map(m => ({
        subject: m.mapel.length > 10 ? m.mapel.substring(0, 8) + '...' : m.mapel,
        nilai: m.nilai,
        persenSelesai: (m.tugasSelesai / m.totalTugas) * 100
    }));

    const getStatusBadge = (status: string) => {
        if (status === 'Selesai') return <Badge className="bg-green-500">Selesai</Badge>;
        if (status === 'Terlambat') return <Badge className="bg-yellow-500">Terlambat</Badge>;
        return <Badge className="bg-red-500">Belum</Badge>;
    };

    const getStatusIcon = (status: string) => {
        if (status === 'Selesai') return <CheckCircle className="h-5 w-5 text-green-600" />;
        if (status === 'Terlambat') return <Clock className="h-5 w-5 text-yellow-600" />;
        return <XCircle className="h-5 w-5 text-red-600" />;
    };

    return (
        <section className="space-y-6">

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Tugas</CardTitle>
                        <FileText className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{totalTugas}</div>
                        <p className="text-xs text-gray-500 mt-1">Semua mata pelajaran</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Selesai</CardTitle>
                        <CheckCircle className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">{totalSelesai}</div>
                        <p className="text-xs text-gray-500 mt-1">{persenSelesai}% completion</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Terlambat</CardTitle>
                        <Clock className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-yellow-600">{totalTerlambat}</div>
                        <p className="text-xs text-gray-500 mt-1">Perlu perhatian</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Belum</CardTitle>
                        <AlertTriangle className="h-4 w-4 text-red-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-red-600">{totalBelum}</div>
                        <p className="text-xs text-gray-500 mt-1">Segera kerjakan</p>
                    </CardContent>
                </Card>

                <Card className="shadow-lg">
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Rata-rata Nilai</CardTitle>
                        <TrendingUp className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-blue-600">{rataRataNilai}</div>
                        <p className="text-xs text-gray-500 mt-1">Dari semua tugas</p>
                    </CardContent>
                </Card>
            </div>

            {/* Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Nilai per Mata Pelajaran */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Nilai Tugas per Mata Pelajaran</CardTitle>
                        <CardDescription>Rata-rata nilai tugas setiap mapel</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={tugasMapel}>
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis
                                    dataKey="mapel"
                                    angle={-45}
                                    textAnchor="end"
                                    height={100}
                                    interval={0}
                                    tick={{ fontSize: 11 }}
                                />
                                <YAxis domain={[0, 100]} />
                                <Tooltip
                                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                                />
                                <Bar dataKey="nilai" fill="#8b5cf6" radius={[8, 8, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Status Tugas */}
                <Card className="shadow-lg">
                    <CardHeader>
                        <CardTitle>Distribusi Status Tugas</CardTitle>
                        <CardDescription>Perbandingan status pengerjaan tugas</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    labelLine={false}
                                    label={({ name, value }) => `${name}: ${value}`}
                                    outerRadius={80}
                                    fill="#8884d8"
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                                <Legend />
                            </PieChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>
            </div>

            {/* Radar Chart */}
            <Card className="shadow-lg">
                <CardHeader>
                    <CardTitle>Perbandingan Nilai dan Tingkat Penyelesaian</CardTitle>
                    <CardDescription>Analisis performa per mata pelajaran</CardDescription>
                </CardHeader>
                <CardContent>
                    <ResponsiveContainer width="100%" height={400} >
                        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData} className={'bg-background'}>
                            <PolarGrid className={'bg-background'} />
                            <PolarAngleAxis dataKey="subject" className={'bg-background'} />
                            <PolarRadiusAxis angle={90} domain={[0, 100]} />
                            <Radar name="Nilai" dataKey="nilai" stroke="#8b5cf6" fill="#8b5cf6" fillOpacity={0.6} />
                            <Radar name="% Selesai" dataKey="persenSelesai" stroke="#22c55e" fill="#22c55e" fillOpacity={0.6} />
                            <Legend />
                            <Tooltip />
                        </RadarChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>

            {/* Detail Tugas per Mapel */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {tugasMapel.map((mapel, index) => (
                    <Card
                        key={index}
                        className="shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => setSelectedMapel(selectedMapel === index ? null : index)}
                    >
                        <CardHeader>
                            <CardTitle className="text-lg flex items-center justify-between">
                                <span>{mapel.mapel}</span>
                                <BookOpen className="h-5 w-5 text-purple-600" />
                            </CardTitle>
                            <CardDescription>Nilai rata-rata: {mapel.nilai}</CardDescription>
                        </CardHeader>
                        <CardContent className="space-y-3">
                            <div className="flex justify-between text-sm">
                                <span className="text-gray-600">Total Tugas:</span>
                                <span className="font-semibold">{mapel.totalTugas}</span>
                            </div>
                            <div className="space-y-2">
                                <div className="flex justify-between text-sm">
                                    <span className="text-green-600">✓ Selesai:</span>
                                    <span className="font-semibold text-green-600">{mapel.tugasSelesai}</span>
                                </div>
                                {mapel.tugasTerlambat > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-yellow-600">⏰ Terlambat:</span>
                                        <span className="font-semibold text-yellow-600">{mapel.tugasTerlambat}</span>
                                    </div>
                                )}
                                {mapel.tugasBelum > 0 && (
                                    <div className="flex justify-between text-sm">
                                        <span className="text-red-600">✗ Belum:</span>
                                        <span className="font-semibold text-red-600">{mapel.tugasBelum}</span>
                                    </div>
                                )}
                            </div>
                            <div className="pt-2">
                                <div className="w-full rounded-full h-2">
                                    <div
                                        className="bg-purple-600 h-2 rounded-full transition-all"
                                        style={{ width: `${(mapel.tugasSelesai / mapel.totalTugas) * 100}%` }}
                                    ></div>
                                </div>
                                <div className="text-xs text-gray-500 text-right mt-1">
                                    {((mapel.tugasSelesai / mapel.totalTugas) * 100).toFixed(0)}% selesai
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Detail Expanded */}
            {selectedMapel !== null && (
                <Card className="shadow-lg border-2 border-card">
                    <CardHeader>
                        <CardTitle className="text-xl">Detail Tugas - {tugasMapel[selectedMapel].mapel}</CardTitle>
                        <CardDescription>Daftar tugas dan deadline</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-3">
                            {tugasMapel[selectedMapel].deadline.map((tugas, idx) => (
                                <div key={idx} className="flex items-center justify-between p-4 bg-primary rounded-lg hover:bg-secondary transition-colors">
                                    <div className="flex items-center gap-4">
                                        {getStatusIcon(tugas.status)}
                                        <div>
                                            <div className="font-semibold text-gray-900">{tugas.judul}</div>
                                            <div className="text-sm text-foreground flex items-center gap-2 mt-1">
                                                <Calendar className="h-3 w-3" />
                                                <span>Deadline: {tugas.tanggal}</span>
                                                {tugas.waktuSubmit && (
                                                    <span className="text-background">• Dikumpulkan: {tugas.waktuSubmit}</span>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        {tugas.nilai && (
                                            <div className="text-right">
                                                <div className="text-2xl font-bold text-purple-600">{tugas.nilai}</div>
                                                <div className="text-xs text-gray-500">Nilai</div>
                                            </div>
                                        )}
                                        {getStatusBadge(tugas.status)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            )}

            {/* Upcoming Deadlines */}
            <Card className="bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-lg">
                <CardHeader>
                    <CardTitle className="text-white flex items-center gap-2">
                        <AlertTriangle className="h-6 w-6" />
                        Deadline Mendatang
                    </CardTitle>
                    <CardDescription className="text-purple-100">
                        Tugas yang perlu segera diselesaikan
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="space-y-2">
                        {tugasMapel
                            .flatMap(m => m.deadline.filter(t => t.status === 'Belum'))
                            .map((tugas, idx) => (
                                <div key={idx} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 flex justify-between items-center">
                                    <div>
                                        <div className="font-semibold">{tugas.judul}</div>
                                        <div className="text-sm text-purple-100">Deadline: {tugas.tanggal}</div>
                                    </div>
                                    <Badge className="text-purple-600">Urgent</Badge>
                                </div>
                            ))}
                        {tugasMapel.flatMap(m => m.deadline.filter(t => t.status === 'Belum')).length === 0 && (
                            <div className="text-center py-4 text-purple-100">
                                🎉 Semua tugas sudah diselesaikan!
                            </div>
                        )}
                    </div>
                </CardContent>
            </Card>
        </section>
    );
}