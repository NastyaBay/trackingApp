"use client";
import "./page.css"
import { useState } from "react";
import { Container } from "react-bootstrap";
import Navibar from "../../components/oftenUsed/Nav";
import ContainerCast from "../../components/oftenUsed/ContainerCast";
import AnswerCheckboxRadio from "../../components/forms/AnswerCheckboxRadio";
import AnswerExpanded from "../../components/forms/AnswerExpanded";

import ModalQr from '@/app/components/modal/ModalQr'

export default function Answer() {
    const [showQr, setShowQr] = useState(false);
	const handleCloseQr = () => setShowQr(false);
    const handleShowQr = () => setShowQr(true);
    return (
        <>
            <Navibar name1='Конструктор формы' name2='Ответы' name3='Ссылка' href1='/form' href3={handleShowQr}/>
            
            <Container className="bodyFormAnswer">
            <ContainerCast className='blockFormAnswer '>
                <Container className='borderFormAnswer'>
                    <p className="textAnswerCount">
                        Получено ответов: 3
                    </p>
                </Container>
                <AnswerExpanded />
                <AnswerCheckboxRadio question={'Статус'} labels={['Студент', 'Школьники']} data={[1, 2]}/>
                <AnswerCheckboxRadio question={'Как вы узнали о мероприятии?'} labels={['Из социальных сетей', 'В учебном заведении', 'От друзей']} data={[2, 3, 1]}/>

            </ContainerCast>
            </Container>
            <ModalQr show={showQr} handleClose={handleCloseQr} />
        </>
    )
}
