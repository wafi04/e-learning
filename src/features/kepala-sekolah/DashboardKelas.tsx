import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataKelas } from "@/data/KepalaSekolah";

export function DashboardKelas() {
  return (
    <>
      <Table className="mt-4">
        <TableHeader>
          <TableRow className="border rounded-t-full">
            <TableHead>Name</TableHead>
            <TableHead>Tingkat</TableHead>
            <TableHead>Wali Kelas</TableHead>
            <TableHead>Ketua Kelas</TableHead>
            <TableHead>Laki Laki</TableHead>
            <TableHead>Perempuan</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {dataKelas.map((item) => (
            <TableRow key={item.name} className="border">
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.tingkat}</TableCell>
              <TableCell>{item.wali_kelas}</TableCell>
              <TableCell>{item.ketua_kelas}</TableCell>
              <TableCell>{item.jumlah_laki_laki}</TableCell>
              <TableCell>{item.jumlah_perempuan}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
