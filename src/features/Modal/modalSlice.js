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
    openLoginModal: (state) => {
      state.isModalOpen = true;
      state.modalPage = modalPages.login;
    },
    openSignUpModal: (state) => {
      state.isModalOpen = true;
      state.modalPage = modalPages.signUp;
    },
    openHighScoreModal: (state) => {
      state.isModalOpen = true;
      state.modalPage = modalPages.highScores;
    },
  },
});

export const {
  setModalOpen,
  setModalPage,
  openLoginModal,
  openSignUpModal,
  openHighScoreModal,
} = modalSlice.actions;

export const selectModalOpen = (state) => state.modal.isModalOpen;
export const selectModalPage = (state) => state.modal.modalPage;

export default modalSlice.reducer;
