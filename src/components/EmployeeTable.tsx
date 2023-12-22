/* eslint-disable @typescript-eslint/no-explicit-any */
// EmployeeTable.tsx
import { FC, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Table from './Table';
import {
  selectEmployees,
  toggleEmployeeSelection,
  deleteSelectedEmployees,
  editEmployee,
  saveEmployee,
  cancelEditEmployee,
  addEmployee,
} from '../store/employee.slice';

const EmployeeTable: FC = () => {
  const dispatch = useDispatch();
  const employees = useSelector(selectEmployees);

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
    dispatch(addEmployee());
  }, [dispatch]);

  const columns = [
    { label: 'Last Name', key: 'lastName', editable: true },
    { label: 'First Name', key: 'firstName', editable: true },
    { label: 'Position', key: 'position', editable: true },
  ];

  const rows = employees.map((employee) => ({
    id: employee.id,
    data: {
      lastName: employee.lastName,
      firstName: employee.firstName,
      position: employee.position,
    },
    isSelected,
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
