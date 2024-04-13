"use client";
import "./page.css"

import { useMemo } from 'react'

import Navibar from '../components/oftenUsed/Nav'
import { Container } from 'react-bootstrap';
import ContainerCast from '../components/oftenUsed/ContainerCast';
import StatisticsTable from "../components/statistics/StatisticsTable";

import dataTable from '@/app/components/statistics/dataTable.json'
import { ColumnsTableUsers } from '@/app/components/statistics/columnsTable'


export default function page() {
  return (
    <div>
      <Navibar />

      <Container className="bodyStatictic" >
        <ContainerCast className='blockStatictic'>
          <Container className="headStatictic">
            <h1>Статистика по пользователям</h1>
          </Container>
          <Container className="bodyBlockStatictic">
          <StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTableUsers, [])}/>
          </Container>
        </ContainerCast>
      </Container>
    </div>
  )
}
