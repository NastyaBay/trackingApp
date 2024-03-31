import '../styles/buttonPage.css'
import BorderButton from './BorderButton'

// кнопка страницы
const ButtonPage = (props) => {
  return (
    <BorderButton href={props.href} className='btnPage'>
        <p className='headBtnPage'>Lorem ipsum dolor</p>
        <img src='/icons/delete.svg' alt='add'></img>
    </BorderButton>
  )
}

export default ButtonPage
