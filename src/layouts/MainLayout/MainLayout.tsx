import { ReactNode } from "react";
import SideBar from "../../components/SideBar";
import Header from "../../components/Header";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen overflow-hidden w-[100vw]">
      <div className="flex flex-row gap-0 w-full justify-start transition-all duration-300 ease-in-out">
        <SideBar />
        <div className="flex-grow flex flex-col">
          <Header />
          <div className="flex-1 transition-all duration-300 ease-in-out">
            {children}
          </div>{" "}
        </div>
      </div>
    </div>
  );
}
