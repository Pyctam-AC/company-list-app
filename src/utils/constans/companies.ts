import { Company } from "../../store/companies.slice"

const companys: Company[] = [
  { id: 1, name: 'ООО "Рога и копыта"',
  employees: [
    { id: 1, companyId: 1, firstName: 'Иван', lastName: 'Иванов', position: 'Разработчик',  },
    { id: 2, companyId: 1, firstName: 'Мария', lastName: 'Иванова', position: 'Менеджер',  },
    { id: 3, companyId: 1, firstName: 'Алексей', lastName: 'Сидоров', position: 'Тестировщик',  },
  ],
    address: 'Москва',
  },
  { id: 2, name: 'ООО "Суперстрой"',
  employees: [
    { id: 1, companyId: 2, firstName: 'Дмитрий', lastName: 'Петров', position: 'Инженер',  },
    { id: 2, companyId: 2, firstName: 'Елена', lastName: 'Смирнова', position: 'Бухгалтер',  },
    { id: 3, companyId: 2, firstName: 'Анна', lastName: 'Иванова', position: 'Продавец',  },
  ],
  address: 'Ленинград', },
  { id: 3, name: 'ООО "Принеси-подай"',
  employees: [
    { id: 1, companyId: 3, firstName: 'Сергей', lastName: 'Сергеев', position: 'Курьер',  },
    { id: 2, companyId: 3, firstName: 'Ольга', lastName: 'Ольгина', position: 'Официантка',  },
  ], address: 'Екатеринубрг',  },
  { id: 4, name: 'ООО "Ломать не строить"', employees: [
    { id: 1, companyId: 4, firstName: 'Андрей', lastName: 'Смирнов', position: 'Строитель',  },
    { id: 2, companyId: 4, firstName: 'Елена', lastName: 'Смирнова', position: 'Бухгалтер',  },
  ],
   address: 'Самара', },
]

export default companys
