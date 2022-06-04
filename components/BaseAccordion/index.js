import React from "react"
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion'
import styles from "./styles.module.sass"
import Slider from "react-slick"


export default function BaseAccordion(props) {

    const imageSliderSettings = {
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: 'ondemand',
        dots: true,
    }
    return (
        <Accordion preExpanded={['0']}>
            {props.data.map((element, index) => {
                return (
                    <AccordionItem uuid={String(index)}>
                        <AccordionItemHeading>
                            <AccordionItemButton className={styles.project__titleWrapper}>
                                <div className={styles.project__title}>
                                    {element.title[props.lang || 'eng']}
                                </div>
                                <div className={styles.project__iconsWrapper}>
                                    {element.stack.map(function (icon) {
                                        return(
                                            <img className={styles.project__icon} src={'/stack/' + icon} key={icon}/>
                                        )
                                    })}
                                </div>

                            </AccordionItemButton>
                        </AccordionItemHeading>
                        <AccordionItemPanel className={styles.project__contentWrapper}>
                            <div className={styles.project__content}>
                                <div className={styles.project__description}>
                                    {element.desc[props.lang || 'eng']}
                                </div>
                                <Slider
                                    {...imageSliderSettings}
                                    className={styles.content__slider}
                                >
                                    { element.image.map((img) => (
                                        <img
                                            src={`/static/projects/${img}`}
                                            className={styles.project__image}
                                        />
                                    )) }
                                </Slider>
                            </div>
                        </AccordionItemPanel>
                    </AccordionItem>
                )
            })}
        </Accordion>
    )
}
