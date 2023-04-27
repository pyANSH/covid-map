import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  // what is the use of this component ? - It is used to render the header of the app. It is used to render the hamburger menu and the title of the app. It is also used to render the title of the page depending on the route.

  const { isHamOpen } = useSelector((state: any) => state.contact); // this is used to get the state of the sidebar from the redux store

  const dispatch = useDispatch();
  return (
    <header className="flex justify-between items-center h-full relative">
      <h1 className="font-bold text-3xl flex items-center z-50">
        <GiHamburgerMenu
          className="cursor-pointer mx-5 text-xl"
          onClick={() => {
            dispatch({ type: "contact/toggleIsHamOpen", payload: !isHamOpen });
          }}
        />
        Covid map
      </h1>

      <div className="absolute w-full text-center text-xl underline">
        {window.location.pathname === "/dashboard" ? (
          <h1>Dashboard</h1>
        ) : window.location.pathname === "/contact" ? (
          <h1>Contacts</h1>
        ) : window.location.pathname === "/map" ? (
          <h1>Covid Map</h1>
        ) : (
          ""
        )}
      </div>
      <div></div>
    </header>
  );
}

export default Header;
