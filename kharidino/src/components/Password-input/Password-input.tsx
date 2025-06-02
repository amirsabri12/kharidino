import {ComponentProps, ReactNode , useState} from "react";

import MingcuteEye2Line from "../../icons/MingcuteEye2Line.tsx";
import MingcuteEyeCloseFill from "../../icons/MingcuteEyeCloseFill.tsx";


import styles from './Password-input.module.css'

type Props = ComponentProps<'input'> &{
    label? : string
}

function PasswordInput({ label , ...otherPropps} : Props) :ReactNode{

    const [isVisible , setIsVisible] = useState(false)

    const toggleView = () => {
        setIsVisible(!isVisible)
    }


    return(
        <div className={styles.password}>
            <label>{label}</label>
            <div className={styles['password-input']}>
                <input type={isVisible === true ? 'email' : 'password'} {...otherPropps} />

                <div className={styles.suffixIcon}>
                    {isVisible === true ? <MingcuteEyeCloseFill onClick={toggleView}/> :
                        <MingcuteEye2Line onClick={toggleView}/>}
                </div>
            </div>

        </div>
    )
}

export default PasswordInput;