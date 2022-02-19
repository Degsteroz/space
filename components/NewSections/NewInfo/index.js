import React, {
    useContext
} from 'react'
import { Context } from '../../../services/context'

import data from './data'
import styles from './styles.module.sass'

export default function NewInfo() {

    if (typeof window !== 'undefined') {
        setTimeout(() => {
            const options = {
                root: null,
                rootMargin: '-40% 0px 0% 0px',
                threshold: 1
            }
            const callback = function(entries, observer) {
                entries.forEach(element => {
                    if (element.isIntersecting) {
                        document.getElementById('photo').style.display = 'flex'
                        document.getElementById('infoBlock').style.display = 'flex'
                        observer.unobserve(element.target)
                    }
                })
            }
            const observer = new IntersectionObserver(callback, options)
            const target = document.querySelector(`#${data.id}`)

            observer.observe(target)
        }, 300)
    }

    const [context] = useContext(Context)
    const { lang } = context
    return (
        <div
            id={data.id}
            className={styles.info}
        >
            <div className={styles.informationContainer}>
                <div className={styles.informationContainer__header}>
                    <div className={styles.header__title}>
                        {data.title[lang]}
                    </div>
                </div>
                <div
                    id={'infoBlock'}
                    className={styles.informationBlock}
                >
                    <span>{`{`}</span>
                    {
                        data.description[lang].map((element) => (
                            <div className={styles.informationWrapper}>
                                <span className={styles.information__title}>
                                    {element.title}:
                                </span>
                                <span className={styles.information__text}>
                                    {element.value},
                                </span>
                            </div>
                        ))
                    }
                    <span>{`}`}</span>
                </div>
            </div>
            <img
                id={'photo'}
                className={styles.info__photo}
                src={data.picture}
            />
        </div>
    )
}
