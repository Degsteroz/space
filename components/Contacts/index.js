import React from 'react'
import sectionData from '../../components-data/links'
import styles from '../../styles/Links.module.css'

export default function Links() {
    return (
        <div className={styles.linksContainer}>
                {
                    sectionData.links.map(function (item) {
                        return (
                            <a
                                href={item.link}
                                target='_blank'
                                key={item.icon}
                            >
                                <img className={styles.contacts__image} src={'/contacts/' + item.icon}/>
                            </a>
                        )
                    })
                }
        </div>
    )
}