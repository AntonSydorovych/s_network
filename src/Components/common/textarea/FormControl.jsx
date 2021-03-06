import React from "react";
import styles from './textarea.module.css'


const FormControl = ({input, meta, children, ...props}) => {
    const hasError = meta.touched && meta.error;

    return <div className={`${styles.formControl} + '' + ${hasError ? styles.error : ''}`}>
        <div>
            {children}
        </div>
        { hasError && <span>{meta.error}</span>}
    </div>
}

export const TextArea = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props} > <textarea {...input} {...restProps} /></FormControl>
}

export const Input = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControl {...props} > <input {...input} {...restProps} /></FormControl>
}