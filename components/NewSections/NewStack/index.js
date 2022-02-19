import React, {
    useContext
} from 'react'
import { Context } from '../../../services/context'

import data from './data'
import styles from './styles.module.sass'

export default function NewStack() {
    const [context] = useContext(Context)
    const { lang } = context

    if (typeof window !== 'undefined') {
        setTimeout(() => {
            const options = {
                root: null,
                rootMargin: '0% 0px 0% 0px',
                threshold: 1
            }
            const list = document.getElementsByClassName('title')

            const callback = function(entries, observer) {
                entries.forEach(element => {
                    if (element.isIntersecting) {
                        Array.prototype
                            .forEach.call(
                                list,
                                function (item, index) {
                                    setTimeout(() => {
                                        item.style.opacity = '1'
                                    }, 100 * index)
                        })
                        observer.unobserve(element.target)
                    }
                })
            }
            const observer = new IntersectionObserver(callback, options)
            const target = document.querySelector(`#${data.id}`)

            observer.observe(target)
        }, 300)
    }

    return (
        <div className={styles.stack} id={data.id}>
            <div className={styles.header}>
                {data.title[lang]}
            </div>
            <div className={styles.technologiesContainer}>
                {data.technologies.map((item) => (
                    <a
                        className={styles.technologyWrapper}
                        href={item.link}
                    >
                        <div
                            className={styles.technology__title + ' ' + 'title'}
                            id={item.title}
                        >
                            {item.title}
                        </div>
                        <img
                            className={`
                                ${styles.technology__logo}
                                ${item.isBlack ? styles.inverted : ''}
                            `}
                             src={'stack/' + item.icon}/>
                    </a>
                ))}
            </div>

        </div>
    )
}
