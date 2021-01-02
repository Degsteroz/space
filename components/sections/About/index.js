import React from 'react'
import sectionData from '../../../components-data/about'
import styles from '../../../styles/About.module.css'

export default function About() {
    return (
        <div className={styles.aboutContainer}>
            <div className={styles.layer}/>
            <div className={styles.textColumn}>
               <span className={styles.title}>{sectionData.title}</span>
                {
                    sectionData.description.map(function (item) {
                        return (
                            <div
                                key={item.title}
                                className={styles.description}
                            >
                                <div className={styles.description__title}>{item.title}:</div>
                                {item.link? <a
                                    href={item.link}
                                    target='_blank'
                                    className={styles.description__value}
                                >
                                    {item.value}
                                </a>
                                    : <span className={styles.description__value}>{item.value}</span>}
                            </div>
                        )
                    })
                }
            </div>
            <img className={styles.image} src={sectionData.picture}/>
        </div>
    )
}