import { useDispatch, useSelector } from "react-redux";

function VIewContact() {
  const dispatch = useDispatch();
  const { isViewOpen, currentContact } = useSelector(
    (state: any) => state.contact
  );
  return (
    <div
      className={`fixed inset-0 overflow-y-auto x
        ${isViewOpen ? "ease-out duration-300 opacity-100" : "hidden"}
       `}
      onKeyUpCapture={(e) => {
        if (e.key === "Escape") {
          dispatch({ type: "contact/togglePopup", payload: false });
        }
      }}
    >
      <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block z-50 sm:p-0">
        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
          <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
        </div>
        <span
          className="hidden sm:inline-block sm:align-middle sm:h-screen"
          aria-hidden="true"
        ></span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3
                  className="text-lg leading-6 font-medium text-gray-900"
                  id="modal-headline"
                >
                  Contact
                </h3>
                <div className="mt-2">
                  <div className="flex justify-between items-start flex-col gap-3">
                    <div className="text-base font-medium text-gray-500">
                      First Name :
                      <span className="mx-2 text-base">
                        {" "}
                        {currentContact.firstName}
                      </span>
                    </div>
                    <div className="text-base font-medium text-gray-500">
                      Last Name :
                      <span className="mx-2 text-base">
                        {" "}
                        {currentContact.lastName}
                      </span>
                    </div>
                    <div className="text-base font-medium text-gray-500">
                      Email :
                      <span className="mx-2 text-base">
                        {currentContact.email}
                      </span>
                    </div>
                    <div className="text-base font-medium text-gray-500">
                      phone Number :
                      <span className="mx-2 text-base">
                        {" "}
                        {currentContact.phoneNumber}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              onClick={() => {
                dispatch({ type: "contact/toggleIsViewOpen", payload: false });
                dispatch({
                  type: "contact/editCurrentContact",
                  payload: {
                    id: "",
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                  },
                });
              }}
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VIewContact;
