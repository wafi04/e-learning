"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Award,
  BookOpen,
  GraduationCap,
  School,
  TrendingUp,
  UserCheck,
  Users,
  Wrench,
  Calendar,
  Clock,
} from "lucide-react";
import moment from "moment";
import { useState, useMemo } from "react";
import { momentLocalizer, Calendar as BigCalendar } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

// Mock data
const statsData = {
  totalSiswa: 480,
  totalGuru: 32,
  totalKelas: 15,
  rataRataNilai: 85.5,
  kehadiranSiswa: 94.2,
  kehadiranGuru: 97.8,
};

const maintenanceData = [
  {
    id: 1,
    item: "AC Ruang Kelas 10A",
    kategori: "Elektronik",
    status: "urgent",
    deskripsi: "AC tidak dingin, perlu pengecekan freon",
    tanggalLapor: "2024-12-01",
    prioritas: "Tinggi",
  },
  {
    id: 2,
    item: "Proyektor Lab Komputer",
    kategori: "Elektronik",
    status: "progress",
    deskripsi: "Lampu proyektor redup",
    tanggalLapor: "2024-11-28",
    prioritas: "Sedang",
  },
  {
    id: 3,
    item: "Pintu Toilet Lantai 2",
    kategori: "Bangunan",
    status: "pending",
    deskripsi: "Engsel pintu rusak",
    tanggalLapor: "2024-11-25",
    prioritas: "Rendah",
  },
  {
    id: 4,
    item: "Meja Guru Ruang Staff",
    kategori: "Furniture",
    status: "completed",
    deskripsi: "Kaki meja goyang sudah diperbaiki",
    tanggalLapor: "2024-11-20",
    prioritas: "Sedang",
  },
  {
    id: 5,
    item: "Lampu Koridor Lantai 3",
    kategori: "Elektronik",
    status: "urgent",
    deskripsi: "5 lampu mati perlu diganti",
    tanggalLapor: "2024-12-02",
    prioritas: "Tinggi",
  },
  {
    id: 6,
    item: "Keran Air Toilet Lantai 1",
    kategori: "Sanitasi",
    status: "progress",
    deskripsi: "Keran bocor, air tidak berhenti",
    tanggalLapor: "2024-11-30",
    prioritas: "Tinggi",
  },
];

const topSiswa = [
  { name: "Ahmad Fauzi", kelas: "12 IPA 1", nilai: 95.5, ranking: 1 },
  { name: "Siti Nurhaliza", kelas: "12 IPA 2", nilai: 94.8, ranking: 2 },
  { name: "Budi Santoso", kelas: "11 IPA 1", nilai: 93.2, ranking: 3 },
  { name: "Dewi Lestari", kelas: "12 IPS 1", nilai: 92.7, ranking: 4 },
  { name: "Rizky Pratama", kelas: "11 IPA 2", nilai: 91.9, ranking: 5 },
];

const performaKelas = [
  { kelas: "12 IPA 1", rataRata: 88.5, siswa: 32, kehadiran: 96.2 },
  { kelas: "12 IPA 2", rataRata: 87.3, siswa: 30, kehadiran: 95.1 },
  { kelas: "11 IPA 1", rataRata: 86.8, siswa: 33, kehadiran: 94.8 },
  { kelas: "12 IPS 1", rataRata: 85.2, siswa: 31, kehadiran: 93.5 },
  { kelas: "11 IPS 1", rataRata: 84.6, siswa: 32, kehadiran: 92.9 },
];

export function DashboardKepalaSekolah() {
  const localizer = momentLocalizer(moment);
  const [events] = useState([
    {
      title: "Meeting with Client",
      start: new Date(2025, 11, 5, 10, 0),
      end: new Date(2025, 11, 5, 11, 0),
    },
    {
      title: "Rapat Evaluasi Semester",
      start: new Date(2025, 11, 5, 12, 0),
      end: new Date(2025, 11, 5, 13, 0),
    },
    {
      title: "Ujian Akhir Semester",
      start: new Date(2025, 11, 7, 8, 0),
      end: new Date(2025, 11, 7, 12, 0),
    },
    {
      title: "Pembagian Rapor",
      start: new Date(2025, 11, 10, 9, 0),
      end: new Date(2025, 11, 10, 11, 0),
    },
    {
      title: "Rapat Orang Tua Siswa",
      start: new Date(2025, 11, 12, 14, 0),
      end: new Date(2025, 11, 12, 16, 0),
    },
  ]);

  // Memoized calculations untuk performa
  const maintenanceStats = useMemo(
    () => ({
      urgent: maintenanceData.filter((m) => m.status === "urgent").length,
      progress: maintenanceData.filter((m) => m.status === "progress").length,
      pending: maintenanceData.filter((m) => m.status === "pending").length,
      completed: maintenanceData.filter((m) => m.status === "completed").length,
    }),
    [],
  );

  const getStatusColor = (status: string) => {
    const colors = {
      urgent: "bg-red-500",
      progress: "bg-blue-500",
      pending: "bg-yellow-500",
      completed: "bg-green-500",
    };
    return colors[status] || "bg-gray-500";
  };

  const getStatusBadge = (status: string) => {
    const badges = {
      urgent: <Badge variant="destructive">Urgent</Badge>,
      progress: <Badge className="bg-blue-500">Progress</Badge>,
      pending: <Badge variant="secondary">Pending</Badge>,
      completed: <Badge className="bg-green-500">Selesai</Badge>,
    };
    return badges[status] || <Badge variant="outline">{status}</Badge>;
  };

  const getPriorityVariant = (prioritas: string) => {
    if (prioritas === "Tinggi") return "destructive";
    if (prioritas === "Sedang") return "default";
    return "secondary";
  };

  const getRankingBadgeColor = (ranking: number) => {
    if (ranking === 1) return "bg-yellow-100 text-yellow-700";
    if (ranking === 2) return "bg-gray-100 text-gray-700";
    if (ranking === 3) return "bg-orange-100 text-orange-700";
    return "bg-blue-50 text-blue-700";
  };

  return (
    <div className="space-y-4">
      <div className=" space-y-6">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Siswa</CardTitle>
              <Users className="h-4 w-4 text-blue-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsData.totalSiswa}</div>
              <p className="text-xs text-gray-500 mt-1">
                Aktif tahun ajaran 2024/2025
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Guru</CardTitle>
              <GraduationCap className="h-4 w-4 text-green-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsData.totalGuru}</div>
              <p className="text-xs text-gray-500 mt-1">
                Guru & Staff pengajar
              </p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Kelas</CardTitle>
              <School className="h-4 w-4 text-purple-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{statsData.totalKelas}</div>
              <p className="text-xs text-gray-500 mt-1">Rombongan belajar</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                Rata-rata Nilai
              </CardTitle>
              <TrendingUp className="h-4 w-4 text-yellow-600" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {statsData.rataRataNilai}
              </div>
              <p className="text-xs text-gray-500 mt-1">Seluruh sekolah</p>
            </CardContent>
          </Card>
        </div>

        {/* Kehadiran Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <UserCheck className="h-5 w-5" />
                Kehadiran Siswa
              </CardTitle>
              <CardDescription>
                Persentase kehadiran siswa keseluruhan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                {statsData.kehadiranSiswa}%
              </div>
              <Progress value={statsData.kehadiranSiswa} className="h-3" />
              <p className="text-sm text-gray-500 mt-2">Target minimal: 90%</p>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <GraduationCap className="h-5 w-5" />
                Kehadiran Guru
              </CardTitle>
              <CardDescription>
                Persentase kehadiran guru & staff
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold mb-2">
                {statsData.kehadiranGuru}%
              </div>
              <Progress value={statsData.kehadiranGuru} className="h-3" />
              <p className="text-sm text-gray-500 mt-2">Target minimal: 95%</p>
            </CardContent>
          </Card>
        </div>

        {/* Maintenance Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <CardTitle className="flex items-center gap-2">
                  <Wrench className="h-5 w-5" />
                  Status Maintenance & Perbaikan
                </CardTitle>
                <CardDescription>
                  Monitoring fasilitas & sarana sekolah
                </CardDescription>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="destructive">
                  {maintenanceStats.urgent} Urgent
                </Badge>
                <Badge className="bg-blue-500">
                  {maintenanceStats.progress} Progress
                </Badge>
                <Badge variant="secondary">
                  {maintenanceStats.pending} Pending
                </Badge>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {maintenanceData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-start gap-3 p-4 border rounded-lg hover:shadow-md transition-all hover:border-gray-400"
                >
                  <div
                    className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${getStatusColor(item.status)}`}
                  />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex-1 min-w-0">
                        <h4 className="font-semibold text-sm truncate">
                          {item.item}
                        </h4>
                        <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                          {item.deskripsi}
                        </p>
                        <div className="flex items-center gap-1 mt-2 text-xs text-gray-500">
                          <Clock className="h-3 w-3" />
                          <span>{item.tanggalLapor}</span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-1.5 flex-shrink-0">
                        <Badge variant="outline" className="text-xs">
                          {item.kategori}
                        </Badge>
                        {getStatusBadge(item.status)}
                        <Badge
                          variant={getPriorityVariant(item.prioritas)}
                          className="text-xs"
                        >
                          {item.prioritas}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Top Students & Performance */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5 text-yellow-500" />
                Top 5 Siswa Berprestasi
              </CardTitle>
              <CardDescription>Siswa dengan nilai tertinggi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-16">Rank</TableHead>
                      <TableHead>Nama Siswa</TableHead>
                      <TableHead>Kelas</TableHead>
                      <TableHead className="text-right">Nilai</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {topSiswa.map((siswa) => (
                      <TableRow
                        key={siswa.ranking}
                        className="hover:bg-gray-50"
                      >
                        <TableCell>
                          <div
                            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${getRankingBadgeColor(siswa.ranking)}`}
                          >
                            {siswa.ranking}
                          </div>
                        </TableCell>
                        <TableCell className="font-semibold">
                          {siswa.name}
                        </TableCell>
                        <TableCell>{siswa.kelas}</TableCell>
                        <TableCell className="text-right">
                          <Badge className="bg-green-500">{siswa.nilai}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Performa Per Kelas
              </CardTitle>
              <CardDescription>Rata-rata nilai dan kehadiran</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Kelas</TableHead>
                      <TableHead className="text-center">Siswa</TableHead>
                      <TableHead className="text-right">Rata-rata</TableHead>
                      <TableHead className="text-right">Kehadiran</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {performaKelas.map((kelas, index) => (
                      <TableRow key={index} className="hover:bg-gray-50">
                        <TableCell className="font-semibold">
                          {kelas.kelas}
                        </TableCell>
                        <TableCell className="text-center">
                          <Badge variant="outline">{kelas.siswa}</Badge>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Progress
                              value={(kelas.rataRata / 100) * 100}
                              className="h-2 w-16"
                            />
                            <span className="font-semibold min-w-[3rem]">
                              {kelas.rataRata}
                            </span>
                          </div>
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end gap-2">
                            <Progress
                              value={kelas.kehadiran}
                              className="h-2 w-16"
                            />
                            <span className="font-semibold min-w-[3rem]">
                              {kelas.kehadiran}%
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Calendar Section */}
        <Card className="hover:shadow-lg transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Agenda & Jadwal Kegiatan
            </CardTitle>
            <CardDescription>Kalender kegiatan sekolah</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="calendar-wrapper">
              <BigCalendar
                localizer={localizer}
                events={events}
                startAccessor="start"
                endAccessor="end"
                views={["month", "week", "day", "agenda"]}
                defaultView="agenda"
                style={{ height: "400px" }}
                className="rounded-lg"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
