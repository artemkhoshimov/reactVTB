import { React, useState } from 'react'
import style from './body.module.css'
import ModalWindow from './NestedWindows/ChoiceDB/ModalWindow'
import TableCorrect from './TableCorrect/TableCorrect'


const BodyWithoutCorrect = (props) => {
  const [visibleModal, setVisibleModal] = useState(false)

  return (
    <div className={style.mainContentFrame}>
      <div className={style.headerTextFrame}> Данные без корректировок</div>
      <div className={style.dateTextFrame}> на 30.07.2020</div>
      <div className={style.buttonsFrame}>
        <button 
          onClick={() => setVisibleModal(true)}
          className={style.buttons}
        >
          Выбрать базу данных
        </button>
        <button className={style.buttons}>Редактировать</button>
      </div>
      <div className={style.tableCorrect}>
        <TableCorrect />
      </div>
      <ModalWindow active={visibleModal} setActive={setVisibleModal}/>
    </div>
  )
}
export default BodyWithoutCorrect
