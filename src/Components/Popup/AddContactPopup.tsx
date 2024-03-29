import { useSnackbar } from "notistack";
import { useSelector, useDispatch } from "react-redux";

function AddContactPopup() {
  // this component is used to render the popup for adding a new contact
  // it is used to render the form for editing a contact

  const { enqueueSnackbar } = useSnackbar(); // this is used to show the snackbar
  const dispatch: any = useDispatch(); // this is used to dispatch the actions to the redux store
  const { currentContact, isOpen, count, isEdit } = useSelector(
    (state: any) => state.contact
  ); // this is used to get the current contact from the redux store and the state of the popup

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto x ${
        !isOpen ? `hidden` : ""
      } `}
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
        >
          &#8203;
        </span>
        <div
          className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-headline"
        >
          <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <div className="sm:flex sm:items-start">
              <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                <h3 className="text-lg leading-6 font-medium text-gray-900">
                  Add Contact
                </h3>
                <div className="mt-2">
                  <form className="w-full max-w-sm">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name"
                        >
                          First Name
                        </label>
                        <input
                          value={currentContact.firstName}
                          onChange={(e) =>
                            dispatch({
                              type: "contact/editCurrentContact",
                              payload: {
                                ...currentContact,
                                firstName: e.target.value,
                              },
                            })
                          }
                          min={4}
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          type="text"
                          placeholder="Jane"
                          required
                        />
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name"
                        >
                          Last Name
                        </label>
                        <input
                          min={4}
                          value={currentContact.lastName}
                          onChange={(e) =>
                            dispatch({
                              type: "contact/editCurrentContact",
                              payload: {
                                ...currentContact,
                                lastName: e.target.value,
                              },
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          placeholder="Doe"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          E-mail
                        </label>
                        <input
                          type="email"
                          value={currentContact.email}
                          onChange={(e) =>
                            dispatch({
                              type: "contact/editCurrentContact",
                              payload: {
                                ...currentContact,
                                email: e.target.value,
                              },
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          placeholder="******************"
                        />
                      </div>
                    </div>
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-password"
                        >
                          Phone Number
                        </label>
                        <input
                          value={currentContact.phoneNumber}
                          onChange={(e) =>
                            dispatch({
                              type: "contact/editCurrentContact",
                              payload: {
                                ...currentContact,
                                phoneNumber: e.target.value,
                              },
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          type="text"
                          placeholder="*********"
                          min={10}
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
            <button
              type="submit"
              className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-green-600 text-base font-medium text-white hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                if (
                  currentContact.firstName === "" ||
                  currentContact.lastName === "" ||
                  currentContact.email === "" ||
                  currentContact.phoneNumber === ""
                ) {
                  enqueueSnackbar("Please fill all the fields", {
                    variant: "error",
                  });
                  return;
                }
                function validationEmail(email: string) {
                  var re = /\S+@\S+\.\S+/;
                  return re.test(email);
                }
                if (!validationEmail(currentContact.email)) {
                  enqueueSnackbar("Please enter a valid email", {
                    variant: "error",
                  });
                  return;
                }
                function validationPhone(phone: string) {
                  var re = /^\d+$/;
                  return re.test(phone);
                }
                if (!validationPhone(currentContact.phoneNumber)) {
                  enqueueSnackbar("Please enter a valid phone number", {
                    variant: "error",
                  });
                  return;
                }
                function validationName(name: string) {
                  var re = /^[a-zA-Z]+$/;
                  return re.test(name);
                }
                if (!validationName(currentContact.firstName)) {
                  enqueueSnackbar("Please enter a valid first name", {
                    variant: "error",
                  });
                  return;
                }
                if (!validationName(currentContact.lastName)) {
                  enqueueSnackbar("Please enter a valid last name", {
                    variant: "error",
                  });
                  return;
                } else {
                  if (isEdit) {
                    dispatch({
                      type: "contact/editContact",
                      payload: currentContact,
                    });
                    enqueueSnackbar("Edit Successfully", {
                      variant: "success",
                    });
                  } else {
                    dispatch({
                      type: "contact/addContact",
                      payload: currentContact,
                    });
                    enqueueSnackbar("Add Successfully", {
                      variant: "success",
                    });
                  }
                  dispatch({
                    type: "contact/editCurrentContact",
                    payload: {
                      id: count + 1,
                      firstName: "",
                      lastName: "",
                      email: "",
                      phoneNumber: "",
                    },
                  });
                  dispatch({
                    type: "contact/togglePopup",
                    payload: false,
                  });
                  dispatch({
                    type: "contact/toggleIsEdit",
                    payload: false,
                  });
                }
              }}
            >
              {isEdit ? "Edit " : "Add "}
            </button>
            <button
              type="button"
              className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
              onClick={() => {
                dispatch({
                  type: "contact/togglePopup",
                  payload: false,
                });
                dispatch({
                  type: "contact/toggleIsEdit",
                  payload: false,
                });
                dispatch({
                  type: "contact/editCurrentContact",
                  payload: {
                    id: count + 1,
                    firstName: "",
                    lastName: "",
                    email: "",
                    phoneNumber: "",
                  },
                });
                enqueueSnackbar("Tap on list to see all details", {
                  variant: "success",
                });
              }}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddContactPopup;
