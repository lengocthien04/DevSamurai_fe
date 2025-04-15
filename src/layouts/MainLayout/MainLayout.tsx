import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MainLayout({ children }: Props) {
  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-row gap-0">
        {/* <SideBar /> */}

        <div className="">{children}</div>
      </div>
    </div>
  );
}
