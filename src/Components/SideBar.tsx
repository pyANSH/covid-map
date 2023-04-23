import { useNavigate } from "react-router-dom";
import { RiContactsLine } from "react-icons/ri";
import { BsMap } from "react-icons/bs";
import { MdOutlineSpaceDashboard } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { useSnackbar } from "notistack";
function SideBar() {
  // what is the use of this component ? - It is used to render the sidebar of the app. It is also used to render the title of the page depending on the route.
  const { isHamOpen } = useSelector((state: any) => state.contact);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar(); // this is used to show the snackbar notifications
  return (
    <div
      className={`flex flex-col text-xl h-full  justify-start gap-4 absolute left-0 z  ${
        isHamOpen ? "sidebar w-52" : ""
      } `}
    >
      {isHamOpen ? (
        <>
          <p
            className={`h-10 flex items-center justify-start gap-2 cursor-pointer hover:text-[#3b4bd5] }`}
            onClick={() => {
              navigate("/contact");
              enqueueSnackbar("Use '+' button to Add Contact", {
                variant: "info",
              });
              dispatch({ type: "contact/toggleIsHamOpen", payload: false });
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
              dispatch({ type: "contact/toggleIsHamOpen", payload: false });
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
              enqueueSnackbar("Click On marker to see current cases ", {
                variant: "info",
              });
              enqueueSnackbar("Use scroll to zoom", {
                variant: "info",
              });
              dispatch({ type: "contact/toggleIsHamOpen", payload: false });
            }}
            style={
              window.location.pathname === "/map"
                ? { color: "#3b4bd5" }
                : { color: "black" }
            }
          >
            <BsMap />
            Covid Map
          </p>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default SideBar;
