import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";

function Header() {
  const { isHamOpen } = useSelector((state: any) => state.contact);
  const dispatch = useDispatch();
  return (
    <header className="flex  justify-between align-middle h-full">
      <h1 className="font-bold text-3xl flex items-center">
        <GiHamburgerMenu
          className="cursor-pointer mx-5 text-xl"
          onClick={() => {
            dispatch({ type: "contact/toggleIsHamOpen", payload: !isHamOpen });
          }}
        />
        Taiyo
      </h1>
      <h1 className=" text-2xl flex items-center "></h1>
      <div></div>
    </header>
  );
}

export default Header;
