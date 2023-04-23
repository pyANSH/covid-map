import AddContactPopup from "../../Components/Popup/AddContactPopup";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
import ViewContact from "../../Components/Popup/VIewContact";
import { useSnackbar } from "notistack";
// Objective Page Contacts:
// The app should have a form for adding new contacts
// The app should display a list of all added contacts
// Each contact should have a button to view the contacts details
// The app should be able to edit and delete contacts
// Make use of Redux to store the contact data
function Contact() {
  // what is the use of this component ? - It is used to render the main content of the contact page. It is used to render the list of contacts and the add contact popup.
  const dispatch: any = useDispatch();
  const { contactArray } = useSelector((state: any) => state.contact); // this is used to get the contactArray from the redux store
  const { enqueueSnackbar } = useSnackbar();

  return (
    <div className=" h-full w-full relative ">
      <div className="flex flex-col justify-start items-center max-h-screen">
        {contactArray.map((contact: any) => {
          return (
            <div
              key={contact.id}
              className="flex justify-between items-center w-full h-18 "
            >
              <div
                className="flex justify-start items-center"
                onClick={() => {
                  dispatch({ type: "contact/toggleIsViewOpen", payload: true });
                  dispatch({
                    type: "contact/editCurrentContact",
                    payload: {
                      id: contact.id,
                      firstName: contact.firstName,
                      lastName: contact.lastName,
                      email: contact.email,
                      phoneNumber: contact.phoneNumber,
                    },
                  }); // this is used to edit the current contact in the redux store
                }}
              >
                <div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center truncate">
                  <span className="text-2xl font-bold text-gray-700">
                    {contact.firstName[0]}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start ml-4">
                  <span className="text-lg font-bold text-gray-700 text-fix w-full">
                    {contact.firstName} {contact.lastName}
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="text-blue-500 hover:text-blue-700  font-bold h-10 rounded-full flex justify-center items-center text-2xl "
                  onClick={() => {
                    dispatch({ type: "contact/toggleIsEdit", payload: true });
                    dispatch({ type: "contact/togglePopup", payload: true });
                    dispatch({
                      type: "contact/editCurrentContact",
                      payload: contact,
                    }); // this is used to edit the current contact in the redux store
                  }}
                >
                  {/* 
                    
                  */}
                  <span className="text-2xl font-bold text-blue-500 hover:text-blue-700 ">
                    <MdModeEditOutline />
                  </span>
                </button>
                <button
                  className="text-red-500 hover:text-red-700 font-bold h-10 w-10 rounded-full flex justify-center items-center text-2xl"
                  onClick={() => {
                    dispatch({
                      type: "contact/deleteContact",
                      payload: contact.id,
                    });
                    enqueueSnackbar("Contact Deleted", {
                      variant: "success",
                    }); // this is used to delete the contact from the redux store
                  }}
                >
                  <span>
                    <FiTrash className="text-2xl font-bold text-red-500 hover:text-red-700" />
                  </span>
                </button>
              </div>
            </div>
          );
        })}
      </div>

      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold h-14 w-14 rounded-full absolute bottom-0 right-0 flex justify-center items-center text-3xl"
        onClick={() => {
          dispatch({ type: "contact/togglePopup", payload: true });
        }}
      >
        <BsPlusLg />
      </button>

      <AddContactPopup />
      <ViewContact />
    </div>
  );
}

export default Contact;
