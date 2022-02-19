import React, {useContext, useState} from 'react'
import Link from 'next/link'
import { Context } from '../../../services/context'

import styles from './styles.module.sass'
import data from './data'
import style from "../../../styles/VersionToggle.module.css";
import Toggle from "react-toggle";

export default function NewHeader() {
    const [context, setContext] = useContext(Context)
    return (
        <div className={styles.header}>
            <div className={styles.header__contentWrapper}>
                <div className={styles.linkWrapper}>
                    {data.links.map((link) =>
                        <Link href={link.path} key={link.path}>
                            <div className={styles.header__link}>
                                { link.title[context.lang] }
                            </div>
                        </Link>
                    )}
                </div>
                <div className={styles.langChangeToggle}>
                    <span>ru</span>
                    <Toggle
                        defaultChecked={context.lang === 'en'}
                        onChange={() => setContext((prev) => {
                            return {
                                ...prev,
                                lang: context.lang === 'en' ? 'ru' : 'en'
                            }
                        })}
                        icons={false}
                        className={style.toggleButton}
                    />
                    <span>en</span>
                </div>
            </div>
        </div>


    )
}
