import React, {
    useState
} from 'react'

import { Context} from '../../services/context'

import NewHeader from '../NewSections/NewHeader'
import NewAbout from "../NewSections/NewAbout"
import NewInfo from '../NewSections/NewInfo'

import styles from './style.module.sass'
import NewStack from "../NewSections/NewStack";


export default function NewContentWrapper() {
    const [context, setContext] = useState({
        lang: 'en'
    })

    return (
        <Context.Provider value={[context, setContext]}>
            <div className={styles.newWrapper}>
                <div className={styles.contentWrapper__Mobile}>
                    MOBILE VERSION ARE NOT READY
                </div>
                <div className={styles.contentWrapper}>
                    <div className={styles.info__observerRoot} id={'root'}/>
                    <NewHeader />
                    <div className={styles.content}>
                        <NewAbout/>
                        <NewInfo/>
                        <NewStack/>
                    </div>

                </div>
            </div>

        </Context.Provider>
    )
}
