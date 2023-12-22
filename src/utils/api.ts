//import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import COMPANIES from './constans/companies'
import { Company } from '../store/companies.slice'

const getCompanys:() => Promise<Company[]> = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(COMPANIES), 250)
  })
}

export {getCompanys}

