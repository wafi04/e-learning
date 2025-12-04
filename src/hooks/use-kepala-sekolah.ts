import { MataPelajaran } from "@/data/KepalaSekolah";
import { DataMapel } from "@/types/KepalaSekolah";

export function findKepalaSekolah(search?: string): DataMapel | undefined {
  const data = MataPelajaran.find((v) => {
    return (v.name === search, v.kode === search, v.pengampu === search);
  });
  return data;
}
