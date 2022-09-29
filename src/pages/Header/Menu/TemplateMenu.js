import React from "react";
import styles from './menuHeader.module.css'

const TemplateMenu =  (props) => {   

    return(
        <div className={styles.menuTextFrame}>
            <span className={styles.textMenu}>
            <a href={props.refT} style={{textDecoration:'none',color:'black'}}> {props.children} {props.text}</a>              
            </span>
        </div>
        )
    }


export default TemplateMenu