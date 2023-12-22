import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

export interface Employee {
  id: number;
  companyId: number;
  firstName: string;
  lastName: string;
  position: string;
}

export interface Company {
  id: number;
  name: string;
  employees: Employee[];
  address: string;
}

interface CompanyState {
  companies: Company[];
  selectedCompanyIds: number[];
  isSelected: boolean;
  isEditing: boolean;
}

const initialState: CompanyState = {
  companies: [],
  selectedCompanyIds: [],
  isSelected: false,
  isEditing: false,
};

const companiesSlice = createSlice ({
  name: 'company',
  initialState,
  reducers: {
    addCompanies: (state, action: PayloadAction<Company[]>) => {
      state.companies.push(...action.payload)
    },
    toggleCompanySelection: (state, action: PayloadAction<number>) => {
      const companyId = action.payload;
      const selectedCompany = state.companies.find((company) => company.id === companyId);

      if (selectedCompany) {
        state.isSelected = true;
        if (state.isSelected) {
          state.selectedCompanyIds.push(companyId);
        } else {
          state.selectedCompanyIds = state.selectedCompanyIds.filter((id) => id !== companyId);
        }
      }
    },
    deleteSelectedCompanies: (state, action: PayloadAction<number>) => {
      const indexToRemove = action.payload;
      state.companies = state.companies.filter((company) => company.id !== indexToRemove);
    },
    editCompany: (state, action: PayloadAction<number>) => {
      const companyId = action.payload;
      const editedCompany = state.companies.find((company) => company.id === companyId);

      if (editedCompany) {
        state.isEditing = true;
      }
    },
    saveCompany: (state, action: PayloadAction<{ companyId: number; newData: Partial<Company> }>) => {
      const { companyId, newData } = action.payload;
      const editedCompany = state.companies.find((company) => company.id === companyId);

      if (editedCompany) {
        Object.assign(editedCompany, newData);
        state.isEditing = false;
      }
    },
    cancelEditCompany: (state, action: PayloadAction<number>) => {
      const companyId = action.payload;
      const editedCompany = state.companies.find((company) => company.id === companyId);

      if (editedCompany) {
        state.isEditing = false;
      }
    },
    addNewCompany: (state) => {
      const newCompanyId = state.companies.length + 1;
      const newCompany: Company = {
        id: newCompanyId,
        name: 'название',
        employees: [],
        address: 'адрес',
      };
      state.companies.push(newCompany);
      state.isEditing = false;
    },
  }
})

export const {
  addCompanies,
  toggleCompanySelection,
  deleteSelectedCompanies,
  editCompany,
  saveCompany,
  cancelEditCompany,
  addNewCompany,
} = companiesSlice.actions;
export const selectCompanies = (state: RootState) => state.company.companies;
export const selectSelectedCompanyIds = (state: RootState) => state.company.selectedCompanyIds;

export default companiesSlice.reducer;

