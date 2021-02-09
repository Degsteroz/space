import React from 'react'


import About from '../sections/About'
import PreComponent from '../sections/PreComponent'

import preAbout from '../../components-data/preAbout'
import preStack from '../../components-data/preStack'
import preProjects from '../../components-data/preProjects'

import styles from '../../styles/ContentWrapper.module.css'
import Stack from '../sections/Stack'
import Projects from '../sections/Projects'

let fakeComponent
let contentContainer
let content


const scrollHandle = function () {
    // Отслеживаем положение вертикального скролла
    // Переносим вертикальный скролл в горизонтальную плоскость проскраливаемого компонента
    // Добавляем небольшую задержку с помощью переменной pixelDelay
    contentContainer.scroll(window.pageYOffset, 0)
}

const startScrollComponentAnimation = function () {
    fakeComponent = document.getElementById('fakeWrapper')
    contentContainer = document.getElementById('contentWrapper')
    content = document.getElementById('content')


    // Из ширины скрола компонента вычитаем высоту видимой области.
    // Получаем нужную высоту фейкового компонента
    fakeComponent.style.height = `${content.scrollWidth - window.innerHeight}px`
}

export default class ContentWrapper extends React.Component {

    componentDidMount() {
        if (typeof (window) !== 'undefined') {
            startScrollComponentAnimation()
            // Начинаем отслеживать прокрутку страницы
            window.addEventListener('scroll', scrollHandle)
        }
    }

    componentWillUnmount() {
        // Из-за ССР необходимо делать проверку,
        // т.к. ССР не имеет window и сборка закончится ошибкой
        if (typeof (window) !== 'undefined') {
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
                        className={styles.contentContainer}
                        id={'contentWrapper'}
                    >
                        <div
                            className={styles.sectionScrollComponentContainer}
                            id={'content'}
                        >
                            <PreComponent
                                componentData={preAbout}
                            />

                            <About/>

                            <PreComponent
                                componentData={preStack}
                            />
                            <Stack/>

                            <PreComponent
                                componentData={preProjects}
                            />

                            <Projects />

                        </div>
                    </div>

                </div>
                {/* Компонент для мобильного отображения.*/}
                {/* Из-за логики смены направления скрола нет возможности*/}
                {/* использовать предыдущий компонент*/}
                <div className={styles.mobileContainer}>
                    <PreComponent
                        componentData={preAbout}
                    />

                    <About/>

                    <PreComponent
                        componentData={preStack}
                    />
                    <Stack/>

                    <PreComponent
                        componentData={preProjects}
                    />

                    <Projects />
                </div>
            </div>
        )
    }
}
