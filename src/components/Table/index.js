import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './styles.css'

const months = [
  { id: 1, label: 'Магазины' },
  { id: 2, label: 'Янв' },
  { id: 3, label: 'Фев' },
  { id: 4, label: 'Март' },
  { id: 5, label: 'Апр' },
  { id: 6, label: 'Май' },
  { id: 7, label: 'Июнь' },
  { id: 8, label: 'Июнь' },
  { id: 9, label: 'Авг' },
  { id: 10, label: 'Сен' },
  { id: 11, label: 'Окт' },
  { id: 12, label: 'Нояб' },
  { id: 13, label: 'Дек' },
  { id: 14, label: 'Итого по магазину' },
]

const Table = () => {
  const [budgets, setBudgets] = useState([])

  useEffect(() => {
    try {
      axios.get('http://localhost:8080/data').then((response) => {
        const data = response.data
        setBudgets(data)
      })
    } catch (error) {
      console.log(error)
    }
  }, [])

  const handleBudgetChange = (storeIndex, monthIndex, value) => {
    const newBudgets = [...budgets]
    newBudgets[storeIndex].months[monthIndex].value = value
    setBudgets(newBudgets)
  }

  const getTotalByStore = (storeIndex) => {
    const storeBudgets = budgets[storeIndex].months
    return storeBudgets.reduce((total, month) => total + month.value, 0)
  }

  const getTotalByMonth = (monthIndex) => {
    return budgets.reduce(
      (total, store) => total + store.months[monthIndex].value,
      0
    )
  }

  const calculateTotalOverall = () => {
    return budgets.reduce((total, store) => {
      const storeTotal = getTotalByStore(budgets.indexOf(store))
      return total + storeTotal
    }, 0)
  }

  return (
    <div className="table">
      <table className="budget-table">
        <thead>
          <tr>
            {months.map((item) => (
              <th key={item.id}>{item.label}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {budgets.map((store, storeIndex) => (
            <tr key={store.store.id}>
              <td className="title">{store.store.name}</td>
              {store.months.map((month, monthIndex) => (
                <td key={month.id}>
                  <input
                    className="table__input"
                    type="number"
                    value={month.value}
                    onChange={(e) =>
                      handleBudgetChange(
                        storeIndex,
                        monthIndex,
                        parseInt(e.target.value)
                      )}/>
                </td>
              ))}
              <td className="total">{getTotalByStore(storeIndex)}</td>
            </tr>
          ))}
          <tr>
            <td className="title">Итого по месяцу</td>
            {budgets.length > 0 &&
              budgets[0].months.map((month, monthIndex) => (
                <td className="total" key={month.id}>
                  {getTotalByMonth(monthIndex)}
                </td>
              ))}
            <td className="total">
              <span>{calculateTotalOverall()}</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default Table
