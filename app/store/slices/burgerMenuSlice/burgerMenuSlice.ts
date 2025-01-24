import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  isOpenBurgerMenu: false,
};


const burgerMenuSlice = createSlice({
  name: "viewBurgerMenu",
  initialState,

  reducers: {
    toggleBurgerMenu: (state) => {
      state.isOpenBurgerMenu =!state.isOpenBurgerMenu;
    },
  },

});

export const selectIsOpenBurgerMenu = (state:any) =>  state.viewBurgerMenu.isOpenBurgerMenu

export const {
    toggleBurgerMenu
} = burgerMenuSlice.actions;

export default burgerMenuSlice.reducer;