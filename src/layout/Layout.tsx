import Header from "../Components/Header";
import SideBar from "../Components/SideBar";

function Layout({ children }: { children: JSX.Element }) {
  return (
    <div
      className="grid w-11/12 mx-auto  h-screen gap-4"
      style={{ gridTemplateRows: `10% 85%` }}
    >
      <Header />
      <div className="grid gap-4" style={{ gridTemplateColumns: `10% 85%` }}>
        <SideBar />
        <div className="h-full w-full">
          <div className="h-full w-full">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
