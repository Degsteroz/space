import React, {useContext} from 'react'
import Image from 'next/image'
import { Context } from '../../../services/context'

import data from './data'
import styles from './styles.module.sass'

export default function NewAbout() {
    const [context] = useContext(Context)
    let displayWidth = 1440 / 3
    if (typeof window !== 'undefined') {
        displayWidth = window.innerWidth / 3
    }
    const { lang } = context
    return (
        <div
            id={data.id}
            className={styles.about}
        >
            <Image
                className={styles.about__photo}
                width={displayWidth}
                height={displayWidth * 1.2}
                src={data.picture}
            />
            <div className={styles.informationContainer__header}>
                <div className={styles.header__title}>
                    {data.title[lang]}
                </div>
                <div className={styles.header__subtitle}>
                    {data.subtitle[lang]}
                </div>
                <div className={styles.header__icons}>
                    {data.stackIcons.map((icon, index) => {
                        const animationDelay = index * 200
                        return (
                            <img
                                className={styles.icons__icon}
                                style={{animationDelay: animationDelay + 'ms'}}
                                src={'stack/' + icon}
                            />
                        )
                    })}
                </div>
            </div>

        </div>
    )
}
