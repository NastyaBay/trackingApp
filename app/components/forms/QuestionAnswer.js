import {Form } from 'react-bootstrap'
import '../styles/questionAnswer.css'
import ContainerCastForm from './ContainerCastForm'
import ButtonUpDown from '../oftenUsed/ButtonUpDown'

// блок вопроса с развернутым ответом
const QuestionAnswer = ({onDelete, moveQuestionDown, moveQuestionUp}) => {
    return (
        <>
        <ContainerCastForm onDelete={onDelete} placeholderHead='Вопрос'>
            <Form.Control disabled className='formAnswer textFont' placeholder='Развернутый ответ' />
            <ButtonUpDown moveBlockUp={moveQuestionUp} moveBlockDown={moveQuestionDown}/>
        </ContainerCastForm>
      </>
    )
}

export default QuestionAnswer
