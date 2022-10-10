import React, { useState } from 'react'
import style from './bodyChoiceDB.module.css'

const BodyChoiceDB = () => {
  // const headerCustomTable = ['first header', 'second header']
  const [contentCustomTable, setContentCustomTable] = useState([
    { id: 1, nameDB: 'база данных №1', selected: false },
    { id: 2, nameDB: 'база данных №2', selected: false },
    { id: 3, nameDB: 'база данных №3', selected: false },
    { id: 4, nameDB: 'база данных №4', selected: false },
    { id: 5, nameDB: 'база данных №5', selected: false },
    { id: 6, nameDB: 'база данных №6', selected: false },
    { id: 7, nameDB: 'база данных №7', selected: false },
    { id: 8, nameDB: 'база данных №8', selected: false },
  ])

  // let resHeader = headerCustomTable.map((h) => {
  //   return <th className={style.th}>{h}</th>
  // })

  let selectDB = (id) => {
    let changeTable = contentCustomTable.map((content) => {
      if (content.id === id) content.selected = !content.selected
      else content.selected = false
      return content
    })
    setContentCustomTable(changeTable)
  }

  const CustomTable = () => {
    return (
      <table className={style.table}>
        <tbody>
          {/* <tr>{resHeader}</tr> */}
          {contentCustomTable.map((content) => {
            return (
              <tr className={style.tr}>
                <td className={style.td}>{content.nameDB}</td>
                <td style={{ textAlign: 'center', width: '100px' }}>
                  <input
                    className={style.checkbox}
                    type="checkbox"
                    checked={content.selected}
                    onClick={(e) => selectDB(content.id)}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }

  return (
    <div className={style.content}>
      <CustomTable />
    </div>
  )
}

export default BodyChoiceDB
