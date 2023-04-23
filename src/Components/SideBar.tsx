import { useNavigate } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { BsMap } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useDispatch, useSelector } from "react-redux";
function SideBar() {
  const { isHamOpen } = useSelector((state: any) => state.contact);
  const dispatch = useDispatch();
  console.log(window.location.pathname);
  const navigate = useNavigate();

  return (
    <div
      className={`flex flex-col text-xl h-full w-52 justify-start gap-4 absolute left-0 z ${
        isHamOpen ? "sidebar" : ""
      } `}
      style={{ top: "-24px", height: "calc(100% + 24px)" }}
    >
      <GiHamburgerMenu
        onClick={() => {
          dispatch({ type: "contact/toggleIsHamOpen", payload: !isHamOpen });
        }}
      />
      {isHamOpen ? (
        <>
          <p
            className={`h-10 flex items-center justify-start gap-2 cursor-pointer hover:text-[#3b4bd5] }`}
            onClick={() => {
              navigate("/contact");
            }}
            style={{
              color:
                window.location.pathname === "/contact" ? "#3b4bd5" : "black",
            }}
          >
            <RiContactsLine />
            Contacts
          </p>
          <p
            className={`h-10 flex items-center justify-start gap-2 cursor-pointer hover:text-[#3b4bd5]`}
            style={{
              color:
                window.location.pathname === "/dashboard" ? "#3b4bd5" : "black",
            }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            <MdOutlineSpaceDashboard /> Dashboard
          </p>
          <p
            className={`h-10 flex items-center justify-start gap-2 cursor-pointer text-black hover:text-[#3b4bd5] ${
              window.location.pathname === "/map" && "text-[#3b4bd5]"
            }`}
            onClick={() => {
              navigate("/map");
            }}
            style={
              window.location.pathname === "/map"
                ? { color: "#3b4bd5" }
                : { color: "black" }
            }
          >
            <BsMap /> Map
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
