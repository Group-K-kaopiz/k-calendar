import PrimaryAppBar from "../components/PrimaryAppBar";
import SideNav from "../components/SideNav";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex h-screen w-screen flex-col">
      <div className="w-full">
        <PrimaryAppBar />
      </div>
      <div className="w-full flex flex-row h-full">
        <div className={`h-full`}>
          <SideNav />
        </div>
        <div className="p-6 w-full">{children}</div>
      </div>
    </div>
  );
}
