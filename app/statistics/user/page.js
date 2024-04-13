"use client";
import "../page.css"
import { useMemo } from 'react'
import { Container } from 'react-bootstrap';
import ContainerCast from '@/app/components/oftenUsed/ContainerCast';

import Navibar from "@/app/components/oftenUsed/Nav";
import TableStatisticUser from "@/app/components/statistics/TableStatisticUser";
import dataUserPages from "@/app/components/statistics/dataUserPages.json"
import dataTableUser from "@/app/components/statistics/dataTableUser.json"
import dataForm from "@/app/components/statistics/dataForm.json"

export default function page() {
    const handleCrossClick = () => {
        if (typeof window !== 'undefined') {
          window.location.href = '/statistics';
        }
      };
    return (
        <div>
            <Navibar />
            <Container className="bodyStatictic" >
                <ContainerCast className='blockStatictic'>
                    <Container className="headStatictic">
                        <h1>Статистика по пользователю</h1>
                        <img src="/icons/cross.svg" onClick={handleCrossClick}></img>
                    </Container>
                    <Container className="bodyBlockStatictic blockUser">
                        <Container className="blockBody">
                            <h1>Общая информация</h1>
                            <TableStatisticUser data={useMemo(() => dataTableUser)}/>
                        </Container>
                        <Container className="blockBody">
                            <h1>По страницам</h1>
                            <TableStatisticUser data={useMemo(() => dataUserPages)}/>
                        </Container>
                        <Container className="blockBody">
                            <h1>По формам обратной связи</h1>
                            <TableStatisticUser data={useMemo(() => dataForm)}/>
                        </Container>
                    </Container>
                </ContainerCast>
            </Container>
        </div>
    )
}