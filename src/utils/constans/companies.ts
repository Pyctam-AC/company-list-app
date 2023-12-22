import { Company } from "../../store/companies.slice"

const companys: Company[] = [
  { id: 1, name: 'ООО "Рога и копыта"',
    employees: [
      { id: 1, companyId: 1, firstName: 'John', lastName: 'Doe', position: 'Developer', isSelected: false, isEditing: false },
      { id: 2, companyId: 1, firstName: 'Jane', lastName: 'Doe', position: 'Manager', isSelected: false, isEditing: false },
    ],
    address: 'Москва',
  },
  { id: 2, name: 'ООО "Суперстрой"', employees: 3, address: 'Ленинград', },
  { id: 3, name: 'ООО "Принеси-подай"', employees: 1, address: 'Екатеринубрг',  },
  { id: 4, name: 'ООО "Ломать не строить"', employees: 2, address: 'Самара', },
]

export default companys
