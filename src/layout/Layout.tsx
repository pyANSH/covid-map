import { useSelector } from "react-redux";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { useEffect } from "react";

function Layout({ children }: { children: JSX.Element }) {
  const { isHamOpen } = useSelector((state: any) => state.contact);
  useEffect(() => {
    console.log("isHamOpen", isHamOpen);
  }, [isHamOpen]);
  return (
    <div
      className="grid w-11/12 mx-auto  h-screen gap-4
        
        md:grid-cols-2 md:grid-rows-1 md:gap-0 md:w-full md:h-full
      "
      style={{ gridTemplateRows: `10% 85%` }}
    >
      <Header />
      <div className={`grid gap-4 relative   layout_container`}>
        <SideBar />
        <div></div>
        <div className="h-full w-full">
          <div className="h-full w-full mx-auto overflow-y-auto">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
