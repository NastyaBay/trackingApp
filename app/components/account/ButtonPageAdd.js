import '../styles/buttonPage.css'

import BorderButton from './BorderButton'

// кнопка страницы
const ButtonPageAdd = () => {
  return (
    <BorderButton className='btnPageAdd'>
        <img src='/icons/add.svg' alt='add'></img>
    </BorderButton>
  )
}

export default ButtonPageAdd
