import React, { useContext } from 'react'

import { Context } from '../../../services/context'

import BaseAccordion from '../../BaseAccordion'

import data from './data'
import styles from './styles.module.sass'


export default function NewProjects () {

    const [context] = useContext(Context)
    const { lang } = context

    return (
        <div className={styles.projects}>
            <div className={styles.projects__header}>
                {data.header[lang] }
            </div>
            <div>
                <BaseAccordion
                    data={data.projects}
                    lang={lang}
                />
            </div>
        </div>
    )
}
