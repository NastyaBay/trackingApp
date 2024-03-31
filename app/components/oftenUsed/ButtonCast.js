import '../styles/buttonCast.css'
import { Button } from 'react-bootstrap'

// кнопка действий
const ButtonCast = (props) => {
  return (
    <Button href={props.href} onClick={props.onClick}
      className={`btnCast ${props.className}`}>{props.name}</Button>
  )
}

export default ButtonCast
