import {  ComponentProps, ReactNode } from "react";

import styles from './TextInput.module.css'

type InputType = 'text' | 'email'

type Props = ComponentProps<'input'> & {
    suffixIcon?: ReactNode,
    inputType : InputType
    label? : string

}

function TextInput({suffixIcon , inputType ='text' , label  , ...otherPropps} : Props) :ReactNode{

    return(
        <div  className={styles["text-input"]} >
            <label>{label}</label>
            <input type={inputType} {...otherPropps} />
            <div>{suffixIcon}</div>
        </div>
    )
}

export default TextInput;