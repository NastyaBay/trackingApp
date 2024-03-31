import { Container, Form } from 'react-bootstrap'
import '../styles/questionCheckboxRadio.css'
import ContainerCastForm from './ContainerCastForm'
import { useState } from 'react'
import ButtonUpDown from '../oftenUsed/ButtonUpDown'

// блок вопроса с множественным выбором
const QuestionCheckboxRadio = ({imgSrc, onDelete, moveQuestionDown, moveQuestionUp}) => {
    const [repetitions, setRepetitions] = useState([1, 2, 3]); 
    const handleAddOption = () => {
        const newRepetitions = [...repetitions, repetitions.length + 1]; 
        setRepetitions(newRepetitions); 
    };
    const handleRemoveOption = (indexToRemove) => {
        const newRepetitions = repetitions.filter((item, index) => index !== indexToRemove);
        setRepetitions(newRepetitions);
    };
    return (
        <ContainerCastForm onDelete={onDelete} placeholderHead='Вопрос'>
            <Container className='blockChecks'>
                {repetitions.map((item, index) => (
                    <Container key={index} className='formBlockCheck'>
                        <img src={imgSrc} />
                        <Form.Control className='textFont formCheck' 
                        placeholder='Добавить вариант' value={`Вариант ${item}`} />
                        <img src='/icons/cross.svg' onClick={() => handleRemoveOption(index)} />
                    </Container>
                ))}
                <Container className='formBlockCheck'>
                    <img src={imgSrc} />
                    <Form.Control onClick={handleAddOption} className='textFont formCheck' 
                    placeholder='Добавить вариант' />
                </Container>
            </Container>
            <ButtonUpDown moveBlockUp={moveQuestionUp} moveBlockDown={moveQuestionDown}/>
        </ContainerCastForm>
    )
}

export default QuestionCheckboxRadio
