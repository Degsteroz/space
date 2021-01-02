import React from 'react'
import styles from '../../../styles/PreComponent.module.css'

export default function PreComponent(props) {
    return (
        <div className={styles.preAboutContainer}>
            <div className={styles.layer}/>
            <img className={styles.image} src={props.componentData.picture}/>
            <div className={styles.title}>
                {props.componentData.description}
            </div>
        </div>
    )
}