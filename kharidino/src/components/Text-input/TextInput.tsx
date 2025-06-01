import {  ComponentProps, ReactNode } from "react";

import styles from './TextInput.module.css'

type InputType = 'text' | 'email'

type Props = ComponentProps<'input'> & {
    suffixIcon?: ReactNode,
    inputType : InputType

}

function TextInput({suffixIcon , inputType ='text'  , ...otherPropps} : Props) :ReactNode{

    return(
        <div  className={styles["text-input"]} >
            <input type={inputType} {...otherPropps} />
            <div>{suffixIcon}</div>
        </div>
    )
}

export default TextInput;