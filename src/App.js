import React from 'react'
import Table from './components/Table'

const data = [
  {
    store: { id: 1, name: 'Store 1' },
    months: [
      { id: '1_1', name: 'JAN', value: 0 },
      { id: '2_1', name: 'FEB', value: 0 },
      { id: '3_1', name: 'MAR', value: 0 },
      { id: '4_1', name: 'APR', value: 0 },
      { id: '5_1', name: 'MAY', value: 0 },
      { id: '6_1', name: 'JUN', value: 0 },
      { id: '7_1', name: 'JUL', value: 0 },
      { id: '8_1', name: 'AUG', value: 0 },
      { id: '9_1', name: 'SEP', value: 0 },
      { id: '10_1', name: 'OCT', value: 0 },
      { id: '11_1', name: 'NOV', value: 0 },
      { id: '12_1', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 2, name: 'Store 2' },
    months: [
      { id: '1_2', name: 'JAN', value: 0 },
      { id: '2_2', name: 'FEB', value: 0 },
      { id: '3_2', name: 'MAR', value: 0 },
      { id: '4_2', name: 'APR', value: 0 },
      { id: '5_2', name: 'MAY', value: 0 },
      { id: '6_2', name: 'JUN', value: 0 },
      { id: '7_2', name: 'JUL', value: 0 },
      { id: '8_2', name: 'AUG', value: 0 },
      { id: '9_2', name: 'SEP', value: 0 },
      { id: '10_2', name: 'OCT', value: 0 },
      { id: '11_2', name: 'NOV', value: 0 },
      { id: '12_2', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 5, name: 'Store 3' },
    months: [
      { id: '1_5', name: 'JAN', value: 0 },
      { id: '2_5', name: 'FEB', value: 0 },
      { id: '3_5', name: 'MAR', value: 0 },
      { id: '4_5', name: 'APR', value: 0 },
      { id: '5_5', name: 'MAY', value: 0 },
      { id: '6_5', name: 'JUN', value: 0 },
      { id: '7_5', name: 'JUL', value: 0 },
      { id: '8_5', name: 'AUG', value: 0 },
      { id: '9_5', name: 'SEP', value: 0 },
      { id: '10_5', name: 'OCT', value: 0 },
      { id: '11_5', name: 'NOV', value: 0 },
      { id: '12_5', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 6, name: 'Store 4' },
    months: [
      { id: '1_6', name: 'JAN', value: 0 },
      { id: '2_6', name: 'FEB', value: 0 },
      { id: '3_6', name: 'MAR', value: 0 },
      { id: '4_6', name: 'APR', value: 0 },
      { id: '5_6', name: 'MAY', value: 0 },
      { id: '6_6', name: 'JUN', value: 0 },
      { id: '7_6', name: 'JUL', value: 0 },
      { id: '8_6', name: 'AUG', value: 0 },
      { id: '9_6', name: 'SEP', value: 0 },
      { id: '10_6', name: 'OCT', value: 0 },
      { id: '11_6', name: 'NOV', value: 0 },
      { id: '12_6', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 7, name: 'Store 5' },
    months: [
      { id: '1_7', name: 'JAN', value: 0 },
      { id: '2_7', name: 'FEB', value: 0 },
      { id: '3_7', name: 'MAR', value: 0 },
      { id: '4_7', name: 'APR', value: 0 },
      { id: '5_7', name: 'MAY', value: 0 },
      { id: '6_7', name: 'JUN', value: 0 },
      { id: '7_7', name: 'JUL', value: 0 },
      { id: '8_7', name: 'AUG', value: 0 },
      { id: '9_7', name: 'SEP', value: 0 },
      { id: '10_7', name: 'OCT', value: 0 },
      { id: '11_7', name: 'NOV', value: 0 },
      { id: '12_7', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 8, name: 'Store 6' },
    months: [
      { id: '1_8', name: 'JAN', value: 0 },
      { id: '2_8', name: 'FEB', value: 0 },
      { id: '3_8', name: 'MAR', value: 0 },
      { id: '4_8', name: 'APR', value: 0 },
      { id: '5_8', name: 'MAY', value: 0 },
      { id: '6_8', name: 'JUN', value: 0 },
      { id: '7_8', name: 'JUL', value: 0 },
      { id: '8_8', name: 'AUG', value: 0 },
      { id: '9_8', name: 'SEP', value: 0 },
      { id: '10_8', name: 'OCT', value: 0 },
      { id: '11_8', name: 'NOV', value: 0 },
      { id: '12_8', name: 'DEC', value: 0 },
    ],
  },
  {
    store: { id: 9, name: 'Store 7' },
    months: [
      { id: '1_9', name: 'JAN', value: 0 },
      { id: '2_9', name: 'FEB', value: 0 },
      { id: '3_9', name: 'MAR', value: 0 },
      { id: '4_9', name: 'APR', value: 0 },
      { id: '5_9', name: 'MAY', value: 0 },
      { id: '6_9', name: 'JUN', value: 0 },
      { id: '7_9', name: 'JUL', value: 0 },
      { id: '8_9', name: 'AUG', value: 0 },
      { id: '9_9', name: 'SEP', value: 0 },
      { id: '10_9', name: 'OCT', value: 0 },
      { id: '11_9', name: 'NOV', value: 0 },
      { id: '12_9', name: 'DEC', value: 0 },
    ],
  },
]

function App() {
  return (
    <>
      <Table data={data} />
    </>
  )
}

export default App
