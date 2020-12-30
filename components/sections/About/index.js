import React from 'react'
import sectionData from '../../../components-data/about'
import styles from '../../../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.layer}/>
            <div className={styles.textColumn}>
                <div>
                    <span className={styles.export}>export default </span>
                    {'{'}
                </div>
                <div className={styles.description}>title: <span className={styles.value}>{sectionData.title},</span></div>
                <div className={styles.description}>description: <span className={styles.value}>{sectionData.description}</span></div>
                <span>{'}'}</span>
            </div>
            <img className={styles.image} src={sectionData.picture}/>
        </div>
    )
}