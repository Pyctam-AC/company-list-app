import { FC } from "react"
import styles from './App.module.scss'
import CompanyTable from "../components/CompanyTable"
import EmployeeTable from "../components/EmployeeTable"


const App: FC = () => {

  return (
    <body className={styles.App}>
      <h1 className={styles.AppTitle}>Список компаний и сотрудников</h1>
      <main className={styles.AppContainer}>
        <CompanyTable />
        <EmployeeTable />
      </main>
    </body>
  )
}

export default App
