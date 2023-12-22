/* eslint-disable @typescript-eslint/no-explicit-any */
// employee.slice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from './index';

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
  isSelected: boolean;
  isEditing: boolean;
}

const initialState: EmployeeState = {
  employees: [],
  selectedEmployeeIds: [],
  isSelected: false,
  isEditing: false,
};

const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    toggleEmployeeSelection: (state, action: PayloadAction<number>) => {
      const employeeId = action.payload;
      const selectedEmployee = state.employees.find((employee) => employee.id === employeeId);
      if (selectedEmployee) {
        state.isSelected = true;
        if (state.isSelected) {
          state.selectedEmployeeIds.push(employeeId);
        } else {
          state.selectedEmployeeIds = state.selectedEmployeeIds.filter((id) => id !== employeeId);
        }
      }
    },
    deleteSelectedEmployees: (state, action: PayloadAction<number>) => {
      const indexToRemove = action.payload;
      state.employees = state.employees.filter((employee) => employee.id !== indexToRemove);
    },
    editEmployee: (state, action: PayloadAction<number>) => {
      const employeeId = action.payload;
      const editedEmployee = state.employees.find((employee) => employee.id === employeeId);

      if (editedEmployee) {
        state.isEditing = true;
      }
    },
    saveEmployee: (state, action: PayloadAction<{ employeeId: number; newData: Partial<Employee> }>) => {
      const { employeeId, newData } = action.payload;
      const editedEmployee = state.employees.find((employee) => employee.id === employeeId);

      if (editedEmployee) {
        Object.assign(editedEmployee, newData);
        state.isEditing = false;
      }
    },
    cancelEditEmployee: (state, action: PayloadAction<number>) => {
      const employeeId = action.payload;
      const editedEmployee = state.employees.find((employee) => employee.id === employeeId);

      if (editedEmployee) {
        state.isEditing = false;
      }
    },
    addEmployee: (state ) => {
      const newEmployeeId = state.employees.length + 1;
      const newEmployee: Employee = {
        id: newEmployeeId,
        companyId: 1,
        firstName: 'Фамилия',
        lastName: 'Имя',
        position: 'должность',
      };
      state.employees.push(newEmployee);
      state.isEditing = false;
    }
  },
});

export const {
  toggleEmployeeSelection,
  deleteSelectedEmployees,
  editEmployee,
  saveEmployee,
  cancelEditEmployee,
  addEmployee,
} = employeeSlice.actions;
export const selectEmployees = (state: RootState) => state.employee.employees;
export const selectSelectedEmployeeIds = (state: RootState) => state.employee.selectedEmployeeIds;

export default employeeSlice.reducer;
