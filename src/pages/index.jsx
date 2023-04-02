import Inicio from "@/components/organisms/Inicio";
import Sidebar from "@/components/organisms/Sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <>
      <Sidebar>
        <Inicio />
      </Sidebar>
    </>
  );
}
