import React from "react";
import style from './sidebar.module.css'

const SideBar = (props) => {


    return (
        <div className={style.sideBarFrame}
        >
            <div className={style.menuSideBar}
            >
                <div className={style.choicePage}
                >
                    <div className={style.choiceWithoutIMG} />
                    <a href="/data/withoutCorrect/" style={{textDecoration:'none',color:'black'}} className={style.choiceText}
                    >
                        <span>Без корректировок</span>
                    </a>
                </div>
                <div className={style.choicePage}
                >
                    <div className={style.choiceWithIMG} />
                    <a href="/data/withCorrect/" style={{textDecoration:'none',color:'black'}} className={style.choiceText}
                    >
                        <span>С корректировками</span>
                    </a>
                </div>
            </div>
        </div>
    )
}


export default SideBar