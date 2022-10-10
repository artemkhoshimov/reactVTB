import React from 'react'
import style from './modal.module.css'
import { DeleteOutline } from '@vtb-ib/icons-kit'
import BodyChoiceDB from './Body/BodyChoiceDB'

const ModalWindow = ({ active, setActive }) => {
  return (
    <div
      className={active ? style['modalActive'] : style.modalInActive}
      onClick={(e) => setActive(false)}
    >
      <div className={style.modal_content} onClick={(e) => e.stopPropagation()}>
        <div className={style.modal_header}>
          <div>
            Выбор базы данных
          </div>
          <DeleteOutline
            className={style.closeButton}
            onClick={() => setActive(false)}
          />
        </div>
        <div className={style.modal_body}>
          <BodyChoiceDB />
        </div>
        <div className={style.footerButtonFrame}>
          <button className={style.buttonSave}>сохранить</button>
          <button className={style.buttonCancel}>отменить</button>
        </div>
      </div>
    </div>
  )
}

export default ModalWindow
