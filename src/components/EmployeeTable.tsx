/* eslint-disable @typescript-eslint/no-explicit-any */
// EmployeeTable.tsx
import { FC, useCallback, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';
import {
  toggleEmployeeSelection,
  deleteSelectedEmployees,
  editEmployee,
  saveEmployee,
  cancelEditEmployee,
  addNewEmployee,
} from '../store/employee.slice';
import { RootState } from '../store';
import { Employee } from '../store/companies.slice';

const EmployeeTable: FC = () => {
  const dispatch = useDispatch();
  const {selectedEmployeeIds, employees, /* isSelected, */ isEditing,} = useSelector((state: RootState) => state.employee);

  const [employeeList, setEmployeeList] = useState <Employee[]>([])

  useEffect (()=> {
    setEmployeeList(employees);
  }, [employees])

  const handleToggleEmployeeSelection = useCallback((employeeId: number) => {
    dispatch(toggleEmployeeSelection(employeeId));
  }, [dispatch]);

  const handleDeleteSelectedEmployees = useCallback((employeeId: number) => {
    return dispatch(deleteSelectedEmployees(employeeId));
  }, [dispatch]);

  const handleEditEmployee = useCallback((employeeId: number) => {
    dispatch(editEmployee(employeeId));
  }, [dispatch]);

  const handleSaveEmployee = useCallback((employeeId: number, newData: Record<string, any>) => {
    dispatch(saveEmployee({ employeeId, newData }));
  }, [dispatch]);

  const handleCancelEditEmployee = useCallback((employeeId: number) => {
    dispatch(cancelEditEmployee(employeeId));
  }, [dispatch]);

  const handleAddEmployee = useCallback(() => {
    dispatch(addNewEmployee());
  }, [dispatch]);

  const columns = [
    { label: 'Фамилия', key: 'lastName', editable: true },
    { label: 'Имя', key: 'firstName', editable: true },
    { label: 'Должность', key: 'position', editable: true },
  ];

  const rows = employeeList.map((employee) => ({
    id: employee.id,
    data: {
      lastName: employee.lastName,
      firstName: employee.firstName,
      position: employee.position,
    },
    isSelected: selectedEmployeeIds === employee.id,
    selected: selectedEmployeeIds === employee.id,
    isEditing,
  }));

  return (
    <Table
      columns={columns}
      rows={rows}
      onSelect={handleToggleEmployeeSelection}
      onDeleteSelected={handleDeleteSelectedEmployees}
      onEdit={handleEditEmployee}
      onSave={handleSaveEmployee}
      onCancelEdit={handleCancelEditEmployee}
      onAdd={handleAddEmployee}
    />
  );
};

export default EmployeeTable;
