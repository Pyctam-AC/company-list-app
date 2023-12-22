//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import COMPANIES from './constans/companies'
import { Company, Employee } from '../store/companies.slice'

const getCompanys:() => Promise<Company[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(COMPANIES), 250)
  })
}

const getEmployeesByCompanyId: (companyId: number) => Promise<Employee[]> = (companyId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const company = COMPANIES.find((c) => c.id === companyId);
      const employees = company ? company.employees : [];
      resolve(employees);
    }, 250);
  });
};

export { getCompanys, getEmployeesByCompanyId };

