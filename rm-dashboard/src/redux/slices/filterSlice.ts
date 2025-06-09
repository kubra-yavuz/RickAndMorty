import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

type FilterState = {
  status: string;
  gender: string;
};

const initialState: FilterState = {
  status: '',
  gender: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setStatusFilter: (state, action: PayloadAction<string>) => {
      state.status = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    clearFilters: (state) => {
      state.status = '';
      state.gender = '';
    },
  },
});

export const { setStatusFilter, setGender, clearFilters } = filterSlice.actions;
export default filterSlice.reducer;

//vakit kalırsa species filtresi ekle!