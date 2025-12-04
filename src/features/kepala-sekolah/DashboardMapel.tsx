import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { MataPelajaran } from "@/data/KepalaSekolah";

export function DashboardMapel() {
  return (
    <>
      <Table className="mt-4">
        <TableHeader>
          <TableRow className="border rounded-t-full">
            <TableHead>No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Kode</TableHead>
            <TableHead>Kkm</TableHead>
            <TableHead>Kelas</TableHead>
            <TableHead>Pengampu</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {MataPelajaran.map((item, i) => (
            <TableRow key={item.kode} className="border">
              <TableCell>{i + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>{item.kode}</TableCell>
              <TableCell>{item.kkm}</TableCell>
              <TableCell>{item.kelas}</TableCell>
              <TableCell>{item.pengampu}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}
