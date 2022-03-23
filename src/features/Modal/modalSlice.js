import { createSlice } from '@reduxjs/toolkit';
import modalPages from 'components/Modal/modalPages';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isModalOpen: false,
    modalPage: modalPages.login,
  },
  reducers: {
    setModalOpen: (state, action) => {
      state.isModalOpen = action.payload;
    },
    setModalPage: (state, action) => {
      state.modalPage = action.payload;
    },
  },
});

export const { setModalOpen, setModalPage } = modalSlice.actions;

export const selectModelOpen = (state) => state.modal.isModalOpen;
export const selectModalPage = (state) => state.modal.modalPage;

export default modalSlice.reducer;
