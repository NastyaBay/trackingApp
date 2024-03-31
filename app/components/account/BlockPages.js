import ButtonPageAdd from './ButtonPageAdd';
import ButtonPage from './ButtonPage';
import { Container } from 'react-bootstrap';
import '../styles/blockPages.css'

// компонент с ссылками на страницы
const BlockPages = (props) => {
  return (
    <Container className={`blockPages ${props.className}`}>
        <h2 className='h2-block'>{props.name}</h2>
        {props.isAdd && <ButtonPageAdd />}
        <ButtonPage href='/page'/>
        <ButtonPage />
    </Container>
  )
}

export default BlockPages
