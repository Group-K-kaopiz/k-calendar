import PrimaryAppBar from "../components/appbar";
import SideNav from "../components/sidenav";

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
