import { HeaderDashboard } from "@/components/layouts/HeaderDashboard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DashboardKelas } from "@/features/kepala-sekolah/DashboardKelas";
import { Search } from "lucide-react";

export default function Page() {
  return (
    <>
      <HeaderDashboard title="Dashboard Kelas">
        <div className="relative">
          <Input className="rounded-full" placeholder="Search..." />
          <Button className="absolute top-0 right-0 px-2 rounded-r-full">
            <Search className=" size-4 text-white" />
          </Button>
        </div>
        <Button className="text-white">Create</Button>
      </HeaderDashboard>
      <DashboardKelas />
    </>
  );
}
