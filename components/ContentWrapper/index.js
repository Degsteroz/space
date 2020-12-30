import React from 'react'

import styles from '../../styles/ContentWrapper.module.css'
import About from "../sections/About"

let fakeComponent
let imageContainer


const scrollHandle = function () {
    // Отслеживаем положение вертикального скролла
    // Переносим вертикальный скролл в горизонтальную плоскость проскраливаемого компонента
    // Добавляем небольшую задержку с помощью переменной pixelDelay
    imageContainer.scroll(window.pageYOffset, 0)
}

const startScrollComponentAnimation = function () {
    fakeComponent = document.getElementById('fakeWrapper')
    imageContainer = document.getElementById('contentWrapper')

    // Задаём высоту фэйкконтента равную максимальному горизонтальному скролу + высоту компонента.
    fakeComponent.style.height = `${800 * 4}px`
}

export default class ContentWrapper extends React.Component {

    componentDidMount() {
        if (typeof (window) !== "undefined") {
            startScrollComponentAnimation()
            // Начинаем отслеживать прокрутку страницы
            window.addEventListener('scroll', scrollHandle)
        }
    }

    componentWillUnmount() {
        if (typeof (window) !== "undefined") {
            window.removeEventListener('scroll', scrollHandle)
        }
    }
    render() {
        return (
            <div className={styles.container}>
                <div
                    className={styles.contentFakeContainer}
                    id={'fakeWrapper'}
                >
                    <div
                        className={styles.contentComponent}
                        id={'contentWrapper'}
                    >
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                        <About/>
                    </div>
                </div>
            </div>
        )
    }
}
