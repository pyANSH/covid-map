import AddContactPopup from "../../Components/Popup/AddContactPopup";
import { useSelector, useDispatch } from "react-redux";
import { BsPlusLg } from "react-icons/bs";
import { MdModeEditOutline } from "react-icons/md";
import { FiTrash } from "react-icons/fi";
// Objective Page Contacts:
// The app should have a form for adding new contacts
// The app should display a list of all added contacts
// Each contact should have a button to view the contacts details
// The app should be able to edit and delete contacts
// Make use of Redux to store the contact data
function Contact() {
  const dispatch: any = useDispatch();
  const { contactArray } = useSelector((state: any) => state.contact);
  return (
    <div className=" h-full w-full relative ">
      <div className="flex flex-col justify-start items-center max-h-screen">
        {contactArray.map((contact: any) => {
          return (
            <div
              key={contact.id}
              className="flex justify-between items-center w-11/12 h-18 "
            >
              <div className="flex justify-start items-center">
                <div className="h-12 w-12 rounded-full bg-gray-300 flex justify-center items-center">
                  <span className="text-2xl font-bold text-gray-700">
                    {contact.firstName[0]}
                  </span>
                </div>
                <div className="flex flex-col justify-center items-start ml-4">
                  <span className="text-lg font-bold text-gray-700">
                    {contact.firstName} {contact.lastName}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Email: {contact.email}
                  </span>
                  <span className="text-sm font-medium text-gray-500">
                    Phone Number: {contact.phoneNumber}
                  </span>
                </div>
              </div>
              <div className="flex justify-end items-center">
                <button
                  className="text-blue-500 hover:text-blue-700  font-bold h-10 w-10 rounded-full flex justify-center items-center text-2xl mr-4"
                  onClick={() => {
                    dispatch({ type: "contact/toggleIsEdit", payload: true });
                    dispatch({ type: "contact/togglePopup", payload: true });
                    dispatch({
                      type: "contact/editCurrentContact",
                      payload: contact,
                    });
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
    </div>
  );
}

export default Contact;
