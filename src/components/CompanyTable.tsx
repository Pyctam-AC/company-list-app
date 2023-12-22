/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
// CompanyTable.tsx
import { FC, useEffect, useState, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import {
  addCompanies,
  toggleCompanySelection,
  deleteSelectedCompanies,
  editCompany,
  saveCompany,
  cancelEditCompany,
  addNewCompany,
  Company,
  Employee
} from '../store/companies.slice';
import { addEmployee } from '../store/employee.slice';
import { getCompanys, getEmployeesByCompanyId } from '../utils/api';
import { RootState } from '../store';

const CompanyTable: FC = () => {
  const dispatch = useDispatch();

  const { isSelected, isEditing } = useSelector((state: RootState) => state.company);

  const [companiesRow, setCompanies] = useState<Company[]>([]);

  useEffect(() => {
    getCompanys().then((companies: Company[]) => {
      setCompanies(companies);
      dispatch(addCompanies(companies));
    });
  }, [dispatch]);

  const fetchEmployees = (companyId: number) => {
    getEmployeesByCompanyId(companyId)
      .then((employees: Employee[]) => {
        dispatch(addEmployee(employees))
      })
  }

  const handleToggleCompanySelection = useCallback((companyId: number) => {
    dispatch(toggleCompanySelection(companyId));
    fetchEmployees(companyId)
  }, [dispatch, fetchEmployees]);

  const handleDeleteSelectedCompanies = useCallback((companyId: number) => {
    dispatch(deleteSelectedCompanies(companyId));
  }, [dispatch]);

  const handleEditCompany = useCallback((companyId: number) => {
    dispatch(editCompany(companyId));
  }, [dispatch]);

  const handleSaveCompany = useCallback((companyId: number, newData: Record<string, any>) => {
    dispatch(saveCompany({ companyId, newData }));
  }, [dispatch]);

  const handleCancelEditCompany = useCallback((companyId: number) => {
    dispatch(cancelEditCompany(companyId));
  }, [dispatch]);

  const handleAddCompany = useCallback(() => {
    dispatch(addNewCompany());
  }, [dispatch]);



  const columns = [
    { label: 'Название', key: 'name', editable: true },
    { label: 'Количесвто сотрудников', key: 'employees.length' },
    { label: 'Адрес', key: 'address', editable: true },
  ];

  const rows = companiesRow.map((company) => ({
    id: company.id,
    data: {
      name: company.name,
      employees: company.employees,
      address: company.address,
    },
    isSelected,
    isEditing,
  }));

  return (
    <Table
      columns={columns}
      rows={rows}
      onSelect={handleToggleCompanySelection}
      onDeleteSelected={handleDeleteSelectedCompanies}
      onEdit={handleEditCompany}
      onSave={handleSaveCompany}
      onCancelEdit={handleCancelEditCompany}
      onAdd={handleAddCompany}
    />
  );
};

export default CompanyTable;

