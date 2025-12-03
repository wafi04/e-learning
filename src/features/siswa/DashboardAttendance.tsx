"use client"
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { dataSiswa, kehadiranBulanan, kehadiranMapel, kehadiranMingguan } from '@/data';
import { AlertCircle, Calendar, Check, Clock, X } from 'lucide-react';
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

export default function DashboardAttendance() {
    const nameSiswa = 'Budi Santoso'
    const siswa = dataSiswa.find(s => s.name === nameSiswa);
    if (!siswa) {
        return (
            <div className="min-h-screen  p-6 flex items-center justify-center">
                <Card className="max-w-md">
                    <CardHeader>
                        <CardTitle className="text-red-600">Siswa Tidak Ditemukan</CardTitle>
                        <CardDescription>Data siswa dengan nama "{nameSiswa}" tidak tersedia</CardDescription>
                    </CardHeader>
                </Card>
            </div>
        );
    }
    const totalHadir = kehadiranBulanan.reduce((sum, m) => sum + m.hadir, 0);
    const totalIzin = kehadiranBulanan.reduce((sum, m) => sum + m.izin, 0);
    const totalSakit = kehadiranBulanan.reduce((sum, m) => sum + m.sakit, 0);
    const totalAlpha = kehadiranBulanan.reduce((sum, m) => sum + m.alpha, 0);
    const totalHari = totalHadir + totalIzin + totalSakit + totalAlpha;

    const getStatusIcon = (status: string) => {
        if (status === 'Hadir') return <Check className="h-4 w-4 text-green-600" />;
        if (status === 'Izin') return <Clock className="h-4 w-4 text-blue-600" />;
        if (status === 'Sakit') return <AlertCircle className="h-4 w-4 text-yellow-600" />;
        return <X className="h-4 w-4 text-red-600" />;
    };

    const getStatusBadge = (status: string) => {
        if (status === 'Hadir') return <Badge className="bg-green-500">Hadir</Badge>;
        if (status === 'Izin') return <Badge className="bg-blue-500">Izin</Badge>;
        if (status === 'Sakit') return <Badge className="bg-yellow-500">Sakit</Badge>;
        return <Badge className="bg-red-500">Alpha</Badge>;
    };

    return (
        <div className="min-h-screen  p-6">
            <div className="max-w-7xl mx-auto space-y-6">
                {/* Header - Profil Siswa */}


                {/* Stats Cards */}
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                    <Card className="shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Total Hari</CardTitle>
                            <Calendar className="h-4 w-4 text-gray-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{totalHari}</div>
                            <p className="text-xs text-gray-500 mt-1">Hari efektif</p>
                        </CardContent>
                    </Card>

                    <Card className=" shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Hadir</CardTitle>
                            <Check className="h-4 w-4 text-green-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-green-600">{totalHadir}</div>
                            <p className="text-xs text-gray-500 mt-1">{((totalHadir / totalHari) * 100).toFixed(1)}%</p>
                        </CardContent>
                    </Card>

                    <Card className=" shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Izin</CardTitle>
                            <Clock className="h-4 w-4 text-blue-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-blue-600">{totalIzin}</div>
                            <p className="text-xs text-gray-500 mt-1">{((totalIzin / totalHari) * 100).toFixed(1)}%</p>
                        </CardContent>
                    </Card>

                    <Card className=" shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Sakit</CardTitle>
                            <AlertCircle className="h-4 w-4 text-yellow-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-yellow-600">{totalSakit}</div>
                            <p className="text-xs text-gray-500 mt-1">{((totalSakit / totalHari) * 100).toFixed(1)}%</p>
                        </CardContent>
                    </Card>

                    <Card className=" shadow-lg">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">Alpha</CardTitle>
                            <X className="h-4 w-4 text-red-600" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold text-red-600">{totalAlpha}</div>
                            <p className="text-xs text-gray-500 mt-1">{((totalAlpha / totalHari) * 100).toFixed(1)}%</p>
                        </CardContent>
                    </Card>
                </div>

                {/* Charts */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Trend Kehadiran Bulanan */}
                    <Card className=" shadow-lg">
                        <CardHeader>
                            <CardTitle>Trend Kehadiran Bulanan</CardTitle>
                            <CardDescription>Persentase kehadiran per bulan tahun ajaran ini</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <AreaChart data={kehadiranBulanan}>
                                    <defs>
                                        <linearGradient id="colorPersentase" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                                            <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="bulan" />
                                    <YAxis domain={[0, 100]} />
                                    <Tooltip
                                        formatter={(value) => `${value}%`}
                                        contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                                    />
                                    <Area
                                        type="monotone"
                                        dataKey="persentase"
                                        stroke="#3b82f6"
                                        fillOpacity={1}
                                        fill="url(#colorPersentase)"
                                    />
                                </AreaChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>

                    {/* Detail Kehadiran Bulanan */}
                    <Card className=" shadow-lg">
                        <CardHeader>
                            <CardTitle>Detail Kehadiran Bulanan</CardTitle>
                            <CardDescription>Breakdown status kehadiran per bulan</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <ResponsiveContainer width="100%" height={300}>
                                <BarChart data={kehadiranBulanan}>
                                    <CartesianGrid strokeDasharray="3 3" />
                                    <XAxis dataKey="bulan" />
                                    <YAxis />
                                    <Tooltip contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }} />
                                    <Legend />
                                    <Bar dataKey="hadir" fill="#22c55e" name="Hadir" />
                                    <Bar dataKey="izin" fill="#3b82f6" name="Izin" />
                                    <Bar dataKey="sakit" fill="#f59e0b" name="Sakit" />
                                    <Bar dataKey="alpha" fill="#ef4444" name="Alpha" />
                                </BarChart>
                            </ResponsiveContainer>
                        </CardContent>
                    </Card>
                </div>

                {/* Kehadiran per Mata Pelajaran */}
                <Card className=" shadow-lg">
                    <CardHeader>
                        <CardTitle>Kehadiran per Mata Pelajaran</CardTitle>
                        <CardDescription>Rincian kehadiran berdasarkan mata pelajaran</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <ResponsiveContainer width="100%" height={300}>
                            <BarChart data={kehadiranMapel} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" />
                                <XAxis type="number" domain={[0, 100]} />
                                <YAxis dataKey="mapel" type="category" width={100} />
                                <Tooltip
                                    formatter={(value) => `${value}%`}
                                    contentStyle={{ backgroundColor: 'white', border: '1px solid #ccc' }}
                                />
                                <Bar dataKey="persentase" fill="#3b82f6" radius={[0, 8, 8, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </CardContent>
                </Card>

                {/* Tabel Kehadiran per Mapel */}
                <Card className=" shadow-lg">
                    <CardHeader>
                        <CardTitle>Detail Kehadiran Mata Pelajaran</CardTitle>
                        <CardDescription>Statistik lengkap per mata pelajaran</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="overflow-x-auto">
                            <Table>
                                <TableHeader>
                                    <TableRow>
                                        <TableHead>Mata Pelajaran</TableHead>
                                        <TableHead>Total Pertemuan</TableHead>
                                        <TableHead>Hadir</TableHead>
                                        <TableHead>Tidak Hadir</TableHead>
                                        <TableHead>Persentase</TableHead>
                                    </TableRow>
                                </TableHeader>
                                <TableBody>
                                    {
                                        kehadiranMapel.map((mapel) => (

                                            <TableRow key={mapel.mapel}>
                                                <TableCell>{mapel.mapel}</TableCell>
                                                <TableCell>{mapel.totalPertemuan}</TableCell>
                                                <TableCell>{mapel.hadir}</TableCell>
                                                <TableCell>{mapel.totalPertemuan - mapel.hadir}</TableCell>
                                                <TableCell className='justify-center'>
                                                    <div className="flex items-center gap-2">
                                                        <div className="w-full bg-gray-200 rounded-full h-2" style={{ maxWidth: '120px' }}>
                                                            <div
                                                                className="bg-blue-600 h-2 rounded-full"
                                                                style={{ width: `${mapel.persentase}%` }}
                                                            ></div>
                                                        </div>
                                                        <span className="text-sm font-medium text-foreground min-w-[45px]">{mapel.persentase}%</span>
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                    }
                                </TableBody>
                            </Table>
                        </div>
                    </CardContent>
                </Card>

                {/* Kehadiran Minggu Ini */}
                <Card className=" shadow-lg">
                    <CardHeader>
                        <CardTitle>Kehadiran Minggu Ini</CardTitle>
                        <CardDescription>Riwayat kehadiran 5 hari terakhir</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {kehadiranMingguan.map((item, index) => (
                                <div key={index} className="flex items-center justify-between p-4 bg-primary rounded-lg hover:bg-secondary transition-colors">
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-100">
                                            {getStatusIcon(item.status)}
                                        </div>
                                        <div>
                                            <div className="font-semibold text-gray-900">{item.hari}</div>
                                            <div className="text-sm text-foreground">{item.waktuMasuk} WIB</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-sm ${item.keterangan === 'Terlambat' ? 'text-orange-600 font-semibold' : 'text-gray-600'}`}>
                                            {item.keterangan}
                                        </span>
                                        {getStatusBadge(item.status)}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>


            </div>
        </div>
    );
}