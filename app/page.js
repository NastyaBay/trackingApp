"use client";

import { Form } from "react-bootstrap";
import './page.css'
import ButtonCast from './components/oftenUsed/ButtonCast'
import FormCast from './components/oftenUsed/FormCast'
import ContainerCast from "./components/oftenUsed/ContainerCast";

// страница с авторизацией
export default function Login() {
	return (
		<>
			<ContainerCast className="blockLogin ">
				<h1 className="textLogin ">Авторизация</h1>
				<Form className="formGroups">
					<Form.Group>
						<Form.Label >Почта</Form.Label>
						<FormCast type='email' placeholder='email@gmail.com'/>
					</Form.Group>

					<Form.Group className="formGroup">
						<Form.Label >Пароль</Form.Label>
						<FormCast type='password' placeholder='*********'/>
					</Form.Group>
					<ButtonCast name='Войти' href='/account' className='btnLogin'/>
				</Form>
			</ContainerCast>
		</>
	);
}

