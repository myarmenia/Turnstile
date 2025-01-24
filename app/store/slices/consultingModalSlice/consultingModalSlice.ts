import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";


const initialState = {
  isOpenConsultingModal: false,
  orderCode: '',
};


const consultingModalSlice = createSlice({
  name: "viewConsultingModal",
  initialState,

  reducers: {
    toggleConsultingModal: (state, {payload}) => {
      state.isOpenConsultingModal = payload.isview;
      state.orderCode = payload.orderCode;
    },
  },

});

export const selectIsOpenConsultingModal= (state:any) =>  state.viewConsultingModal.isOpenConsultingModal
export const selectOrderCode = (state:any) =>  state.viewConsultingModal.orderCode

export const {
    toggleConsultingModal
} = consultingModalSlice.actions;

export default consultingModalSlice.reducer;