import React from 'react'
import sectionData from '../../../components-data/stack'
import styles from '../../../styles/Stack.module.css'

export default function Stack() {
    return (
        <div className={styles.stackContainer}>
            <div className={styles.layer}/>
                <div className={styles.icon_wrapper}>
                {
                    sectionData.technologies.map(function (item) {
                        return (
                            <a
                                href={item.link}
                                target='_blank'
                                key={item.title}
                                className={styles.description}
                            >
                                <img className={styles.stack_technologies__image} src={'/stack/' + item.icon}/>
                                <div className={styles.stack_technologies__title}>{item.title}</div>

                            </a>
                        )
                    })
                }
                </div>
            <span className={styles.stack_footer}>
                For more information <a href={sectionData.resumeLink} target='_blank'>click here</a>
            </span>
        </div>
    )
}