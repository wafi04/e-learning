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
} from "lucide-react";
import moment from "moment";
import { useState } from "react";
import { momentLocalizer, Calendar } from "react-big-calendar";

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
  const maintenanceUrgent = maintenanceData.filter(
    (m) => m.status === "urgent",
  ).length;
  const maintenanceProgress = maintenanceData.filter(
    (m) => m.status === "progress",
  ).length;
  const maintenancePending = maintenanceData.filter(
    (m) => m.status === "pending",
  ).length;
  // const maintenanceCompleted = maintenanceData.filter(
  //   (m) => m.status === "completed",
  // ).length;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "urgent":
        return "bg-red-500";
      case "progress":
        return "bg-blue-500";
      case "pending":
        return "bg-yellow-500";
      case "completed":
        return "bg-green-500";
      default:
        return "bg-gray-500";
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "urgent":
        return <Badge variant="destructive">Urgent</Badge>;
      case "progress":
        return <Badge className="bg-blue-500">Progress</Badge>;
      case "pending":
        return <Badge variant="secondary">Pending</Badge>;
      case "completed":
        return <Badge className="bg-green-500">Selesai</Badge>;
      default:
        return <Badge variant="outline">{status}</Badge>;
    }
  };

  const localizer = momentLocalizer(moment);
  const [events, setEvents] = useState([
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

  return (
    <section className="space-y-4">
      {/* Header */}

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <Card>
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

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Guru</CardTitle>
            <GraduationCap className="h-4 w-4 text-green-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalGuru}</div>
            <p className="text-xs text-gray-500 mt-1">Guru & Staff pengajar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Kelas</CardTitle>
            <School className="h-4 w-4 text-purple-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.totalKelas}</div>
            <p className="text-xs text-gray-500 mt-1">Rombongan belajar</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              Rata-rata Nilai
            </CardTitle>
            <TrendingUp className="h-4 w-4 text-yellow-600" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{statsData.rataRataNilai}</div>
            <p className="text-xs text-gray-500 mt-1">Seluruh sekolah</p>
          </CardContent>
        </Card>
      </div>

      {/* Kehadiran Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <Card>
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

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Kehadiran Guru
            </CardTitle>
            <CardDescription>Persentase kehadiran guru & staff</CardDescription>
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
      <Card>
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <Wrench className="h-5 w-5" />
                Status Maintenance & Perbaikan
              </CardTitle>
              <CardDescription>
                Monitoring fasilitas & sarana sekolah
              </CardDescription>
            </div>
            <div className="flex gap-2">
              <Badge variant="destructive">{maintenanceUrgent} Urgent</Badge>
              <Badge className="bg-blue-500">
                {maintenanceProgress} Progress
              </Badge>
              <Badge variant="secondary">{maintenancePending} Pending</Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            {maintenanceData.map((item) => (
              <div
                key={item.id}
                className="flex items-start gap-4 p-4 border rounded-lg transition-colors"
              >
                <div
                  className={`w-2 h-2 rounded-full mt-2 ${getStatusColor(item.status)}`}
                ></div>
                <div className="flex-1">
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold">{item.item}</h4>
                      <p className="text-sm text-foreground mt-1">
                        {item.deskripsi}
                      </p>
                      <span className="text-sm mt-5 text-primary">
                        Lapor: {item.tanggalLapor}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-2">
                      <Badge variant="outline" className="text-xs">
                        {item.kategori}
                      </Badge>
                      {getStatusBadge(item.status)}
                      <Badge
                        variant={
                          item.prioritas === "Tinggi"
                            ? "destructive"
                            : item.prioritas === "Sedang"
                              ? "default"
                              : "secondary"
                        }
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
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Award className="h-5 w-5 text-yellow-500" />
              Top 5 Siswa Berprestasi
            </CardTitle>
            <CardDescription>Siswa dengan nilai tertinggi</CardDescription>
          </CardHeader>
          <CardContent>
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
                  <TableRow key={siswa.ranking}>
                    <TableCell>
                      <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                          siswa.ranking === 1
                            ? "bg-yellow-100 text-yellow-700"
                            : siswa.ranking === 2
                              ? "bg-gray-100 text-gray-700"
                              : siswa.ranking === 3
                                ? "bg-orange-100 text-orange-700"
                                : "bg-blue-50 text-blue-700"
                        }`}
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
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Performa Per Kelas
            </CardTitle>
            <CardDescription>Rata-rata nilai dan kehadiran</CardDescription>
          </CardHeader>
          <CardContent>
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
                  <TableRow key={index}>
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
          </CardContent>
        </Card>
      </div>

      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        views={["month", "week", "day", "agenda"]}
        defaultView="agenda"
        style={{ margin: "50px", height: "300px" }}
      />
    </section>
  );
}
