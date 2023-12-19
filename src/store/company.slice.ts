import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from ".";

interface Company {
  id: number;
  name: string;
  employees: number[];
}

interface CompanyState {
  companies: Company[];
  selectedCompanyIds: number[];
}

const initialState: CompanyState = {
  companies: [],
  selectedCompanyIds: [],
};

const companySlice = createSlice({
  name: 'company',
  initialState,
  reducers: {
    // написать необходимые экшены для управления компаниями
  },
});

//export const { toggleCompanySelection, deleteSelectedCompanies } = companySlice.actions;
export const selectCompanies = (state: RootState) => state.company.companies;
export const selectSelectedCompanyIds = (state: RootState) => state.company.selectedCompanyIds;

export default companySlice.reducer;
