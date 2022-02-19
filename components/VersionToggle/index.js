import React from 'react'
import Toggle from 'react-toggle'
import 'react-toggle/style.css'

import data from '../../components-data/versionToggle'
import style from '../../styles/VersionToggle.module.css'

export default function VersionToggle(props) {


    return (
        <component className={style.container}>
            {props.value ? data.message.new : data.message.old }
            <div className={style.toggleContainer}>
                <span>old</span>
                <Toggle
                    defaultChecked={props.value}
                    onChange={() => props.changeState(!props.value)}
                    icons={false}
                    className={style.toggleButton}
                />
                <span>new</span>
            </div>

        </component>
    )
}