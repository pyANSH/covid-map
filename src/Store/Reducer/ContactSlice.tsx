import { createSlice } from "@reduxjs/toolkit";

const initialState: {
  contactArray: object[];
  currentContact: object;
  isOpen: false;
  count: number;
  isEdit: boolean;
  isViewOpen: boolean;
  isHamOpen: boolean;
} = {
  contactArray: [],
  isOpen: false,
  count: 0,
  currentContact: {
    id: 0,
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
  },
  isEdit: false,
  isViewOpen: false,
  isHamOpen: false,
};
export const contactSlice = createSlice({
  name: "contact",
  initialState,
  reducers: {
    addContact: (state, action: any) => {
      state.contactArray.push(action.payload);
      state.count = state.count + 1;
    },
    deleteContact: (state, action: any) => {
      state.contactArray = state.contactArray.filter(
        (item: any) => item.id !== action.payload
      );
    },
    editContact: (state: any, action: any) => {
      state.contactArray.map((item: any) => {
        if (item.id === action.payload.id) {
          item.id = action.payload.id;
          item.firstName = action.payload.firstName;
          item.lastName = action.payload.lastName;
          item.email = action.payload.email;
          item.phoneNumber = action.payload.phoneNumber;
        }
      });
    },
    editCurrentContact: (state, action: any) => {
      state.currentContact = action.payload;
    },
    toggleIsEdit: (state, action: any) => {
      state.isEdit = action.payload;
    },
    togglePopup: (
      state: { isOpen: boolean },
      action: {
        payload: boolean;
      }
    ) => {
      state.isOpen = action.payload;
    },
    toggleIsViewOpen: (
      state: { isViewOpen: boolean },
      action: {
        payload: boolean;
      }
    ) => {
      state.isViewOpen = action.payload;
    },
    toggleIsHamOpen: (
      state: { isHamOpen: boolean },
      action: {
        payload: boolean;
      }
    ) => {
      state.isHamOpen = action.payload;
    },
  },
});

export const {
  addContact,
  deleteContact,
  editContact,
  editCurrentContact,
  togglePopup,
  toggleIsViewOpen,
  toggleIsHamOpen,
} = contactSlice.actions;

export default contactSlice.reducer;
