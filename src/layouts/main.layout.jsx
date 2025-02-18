import { Head } from "../parts/head";
import { Aside } from "../parts/aside";
import { Foot } from "../parts/foot";
import { Particles } from "../parts/particles";
import { Outlet } from "react-router";

export const MainLayout = () => {
  return (
    <div className="relative min-h-screen w-full flex flex-col">
      <div className="absolute top-0 bottom-0 left-0 right-0 bg-black">
        <Particles />
      </div>

      <div className="relative z-10 w-full flex flex-col min-h-screen">
        <Head />
        <div className="flex-grow grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5">
          <div className="md:col-span-3 lg:col-span-4 bg-transparent flex flex-col">
            <Outlet />
          </div>
          <div className="hidden md:block md:col-span-1">
            <Aside />
          </div>
        </div>
        <Foot />
      </div>
    </div>
  );
};
