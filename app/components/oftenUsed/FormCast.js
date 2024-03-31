import '../styles/formCast.css'
import {Form } from "react-bootstrap";


// форма Input
const FormCast = (props) => {
    return (
        <Form.Control  type={props.type} className={props.className} 
        placeholder={props.placeholder} value={props.value} onChange={props.onChange}/>
    )
}

export default FormCast
