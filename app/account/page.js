import { Container } from 'react-bootstrap'
import './page.css'
import ButtonCast from '../components/oftenUsed/ButtonCast'
import ContainerCast from "../components/oftenUsed/ContainerCast";
import BlockPages from '../components/account/BlockPages';
import BorderButton from '../components/account/BorderButton'

// страница аккаунта
export default function Account() {
    return (
        <div className='test'>
        <ContainerCast className='blockAcc'>
            <Container className='headBlockAcc'>
                <h1 className="textAcc ">Мой профиль</h1>
                <ButtonCast name='Выйти' href='/' />
            </Container>
            <BorderButton className='btn-analytics' href="/statistics">Статистика по посетителям</BorderButton>
            <h3 className='h3-acc'>Страницы</h3>
            <BlockPages name="В разработке" isAdd={true} href='/page' text1='День открытых дверей' text2='Тест драйв' />
            <BlockPages name="Опубликовано" isAdd={false} className='block-pub' text1='Школа Екатеринбург' text2='Пик ИТ' />
            <h3 className='h3-acc h3-forms'>Формы обратной связи</h3>
            <BlockPages isAdd={true} href='/form' text1='Фестиваль радиоэлектроники' text2='День открытых дверей' />
        </ ContainerCast >
        </div>
    )
}