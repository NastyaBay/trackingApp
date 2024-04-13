"use client";
import "./page.css"
import ContainerCast from '@/app/components/oftenUsed/ContainerCast';
import Navibar from '@/app/components/oftenUsed/Nav'
import React from 'react'
import { Container } from 'react-bootstrap';
import ButtonsFilterDate from "@/app/components/statistics/ButtonsFilterDate";
import ChartsLine from "@/app/components/statistics/ChartsLine";
import StatisticsTable from "@/app/components/statistics/StatisticsTable";

import dataTable from '@/app/components/statistics/dataTable.json'
import { ColumnsTablePage, ColumnsTableUrls } from '@/app/components/statistics/columnsTable'

import { useMemo } from 'react'

export default function StatisticPage() {
	return (
		<div>
			<Navibar name1='Конструктор' name2='Статистика' href1='/page'/>

			<Container className="bodyStaticticPage">
				<ContainerCast className='blockStaticticPage'>
					<Container className="headStaticticPage">
						<h1>Статистика по странице</h1>
					</Container>
					<Container className="bodyBlockStaticticPage">
						<ButtonsFilterDate />

						<Container className="blockChart">
							<StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTablePage, [])} />
							<ChartsLine isData={true} dataViews={[20, 16, 22, 18, 10, 6]} dataVisits={[12,11,16,7,6,2]} dataUniq={[1,0,3,1,0,0]}/>
							<StatisticsTable data={useMemo(() => dataTable)} columns={useMemo(() => ColumnsTableUrls, [])} />
							<ChartsLine dataAll={[15, 10, 6, 7, 14, 20]} data1={[8,2,4,5,0,10]} data2={[3,0,3,1,0,0]} data3={[1,2,1,2,4,2]} data4={[3,0,0,0,0,0]}/>
						</Container>
					</Container>
				</ContainerCast>
			</Container>
		</div>
	)
}
