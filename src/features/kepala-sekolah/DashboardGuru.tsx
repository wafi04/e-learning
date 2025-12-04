import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { dataGuru } from "@/data/KepalaSekolah";
export function DashboardGuru() {
  return (
    <Table className="mt-4">
      <TableHeader>
        <TableRow className="border rounded-t-full">
          <TableHead>Name</TableHead>
          <TableHead>Nip</TableHead>
          <TableHead>Nomor Telepon</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {dataGuru.map((item) => (
          <TableRow key={item.name} className="border">
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.nip}</TableCell>
            <TableCell>{item.no_telepon}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
