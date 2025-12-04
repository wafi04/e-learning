"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataSiswa } from "@/data/KepalaSekolah";
import { ChevronDown, ChevronRight } from "lucide-react";
import React, { useState } from "react";

export function DashboardSiswa() {
  const [expandedRows, setExpandedRows] = useState({});

  const toggleRow = (nisn: string) => {
    setExpandedRows((prev) => ({
      ...prev,
      [nisn]: !prev[nisn],
    }));
  };
  return (
    <>
      <Table className="mt-4  rounded-lg shadow">
        <TableHeader>
          <TableRow className="border-b-2">
            <TableHead className="w-12"></TableHead>
            <TableHead>No</TableHead>
            <TableHead>Nama</TableHead>
            <TableHead>NISN</TableHead>
            <TableHead>Absen</TableHead>
            <TableHead>Kelas Sekarang</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataSiswa.map((siswa, index) => (
            <React.Fragment key={siswa.nisn}>
              <TableRow className="hover:bg-blue-500 transition-colors">
                <TableCell>
                  <button
                    onClick={() => toggleRow(siswa.nisn)}
                    className="p-1 hover:bg-blue-200 rounded transition-colors"
                    aria-label="Toggle riwayat kelas"
                  >
                    {expandedRows[siswa.nisn] ? (
                      <ChevronDown className="w-5 h-5 text-gray-600" />
                    ) : (
                      <ChevronRight className="w-5 h-5 text-gray-600" />
                    )}
                  </button>
                </TableCell>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell className="font-medium">{siswa.name}</TableCell>
                <TableCell>{siswa.nisn}</TableCell>
                <TableCell>{siswa.absen}</TableCell>
                <TableCell>
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                    {siswa.kelas_sekarang}
                  </span>
                </TableCell>
              </TableRow>

              {expandedRows[siswa.nisn] && (
                <TableRow className="">
                  <TableCell colSpan={6} className="p-0">
                    <div className="p-4 ml-12">
                      <h3 className="font-semibold text-sm  text-white mb-3">
                        Riwayat Kelas ({siswa.kelas.length} tahun)
                      </h3>
                      <div className="space-y-2">
                        {siswa.kelas.map((kelasItem, idx) => (
                          <div
                            key={idx}
                            className="flex items-start p-3 border rounded-lg hover:shadow-md transition-shadow"
                          >
                            <div className="flex-shrink-0 w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center font-bold text-sm mr-3">
                              {idx + 1}
                            </div>
                            <div className="flex-1">
                              <div className="font-semibold  mb-1">
                                {kelasItem.name}
                              </div>
                              <div className="text-sm">
                                <div>
                                  Wali Kelas:{" "}
                                  <span className="font-medium">
                                    {kelasItem.wali_kelas}
                                  </span>
                                </div>
                                <div>
                                  Ketua Kelas:{" "}
                                  <span className="font-medium">
                                    {kelasItem.ketua_kelas}
                                  </span>
                                </div>
                              </div>
                            </div>
                            {idx === siswa.kelas.length - 1 && (
                              <span className="px-2 py-1 bg-green-100 text-green-700 text-xs font-medium rounded">
                                Aktif
                              </span>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
