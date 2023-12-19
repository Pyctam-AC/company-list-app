// employeeSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '.';

interface Employee {
  id: number;
  companyId: number;
  firstName: string;
  lastName: string;
  position: string;
}

interface EmployeeState {
  employees: Employee[];
  selectedEmployeeIds: number[];
}

const initialState: EmployeeState = {
  employees: [],
  selectedEmployeeIds: [],
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    // написать необходимые экшены для управления сотрудниками
  },
});

//export const { toggleEmployeeSelection, deleteSelectedEmployees } = employeeSlice.actions;
export const selectEmployees = (state: RootState) => state.employee.employees;
export const selectSelectedEmployeeIds = (state: RootState) => state.employee.selectedEmployeeIds;

export default employeeSlice.reducer;
