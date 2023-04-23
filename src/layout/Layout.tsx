import { useSelector } from "react-redux";
import Header from "../Components/Header";
import SideBar from "../Components/SideBar";
import { useEffect } from "react";

function Layout({ children }: { children: JSX.Element }) {
  // what is the use of this component ?
  //It is a High Order Component which is used to wrap the main content of the app.
  // - it is used to render the header and sidebar and the main content depending on the route. Defines the layout of the app.
  const { isHamOpen } = useSelector((state: any) => state.contact); // this is used to get the state of the sidebar from the redux store
  useEffect(() => {}, [isHamOpen]);
  return (
    <div
      className="grid w-11/12 mx-auto  h-screen gap-4"
      style={{ gridTemplateRows: `10% 85%` }}
    >
      <Header />
      <div className={`grid gap-4 relative   layout_container`}>
        <SideBar />
        <div></div>
        <div className="h-full w-full overflow-y-auto">
          <div className="h-full w-full mx-auto">{children}</div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
