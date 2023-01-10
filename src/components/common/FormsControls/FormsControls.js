import React from "react";
import styles from './FormsControls.module.css'
import Field from "redux-form/lib/Field";

const FormControl = ({input, meta: {touched,error}, child, ...props}) => {
    const hasError = touched && error;

    return (
        <div className={styles.formControl + " " + (hasError ? styles.error : "")}>
            <div>
                {props.children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    const {input, meta, child, ...restprops} = props;
    return (
        <FormControl {...props}><textarea {...input} {...restprops} /></FormControl>
    )
}

export const Input = (props) => {
    const {input, meta, child, ...restprops} = props;
    return (
        <FormControl {...props}><input {...input} {...restprops} /></FormControl>
    )
}

export const createField = (placeholder, name, validators, component, props = {}, text = "") =>
    <div>
        <Field placeholder={placeholder} name={name} component={component} validate={validators} {...props}/> {text}
    </div>




