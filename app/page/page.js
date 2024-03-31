"use client";

import './page.css'
import { useState } from "react";
import Navibar from "../components/oftenUsed/Nav"
import ContainerCast from "../components/oftenUsed/ContainerCast";
import ButtonCast from '../components/oftenUsed/ButtonCast'
import ModalQr from '../components/modal/ModalQr'
import ModalUrl from '../components/modal/ModalUrl'
import BlockUrl from '../components/constructor/BlockUrl';
import BlockText from '../components/constructor/BlockText';
import ModalText from '../components/modal/ModalText';

// конструктор страниц
export default function Page() {
	const [showQr, setShowQr] = useState(false);
	const handleCloseQr = () => setShowQr(false);
	const handleShowQr = () => setShowQr(true);

	const [showUrl, setShowUrl] = useState(false);
	const handleCloseUrl = () => setShowUrl(false);
	const handleShowUrl = () => setShowUrl(true);
	const handleSaveUrl = () => {
		addBlock('url');
		setShowUrl(false);
	}

	const [showText, setShowText] = useState(false);
	const handleCloseText = () => setShowText(false);
	const handleShowText = () => setShowText(true);
	const handleSaveText = () => {
		addBlock('text');
		setShowText(false);
	}


	const [blocks, setBlocks] = useState([{ type: 'url', key: generateKey() }]);
	const addBlock = (selectedType) => {
		setBlocks(prevBlocks => [...prevBlocks, { type: selectedType, key: generateKey() }]);
	};

	const moveBlockUp = (index) => {
		if (index === 0) return; // Нельзя переместить блок выше, если он находится на первом месте

		const newBlocks = [...blocks];
		[newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
		setBlocks(newBlocks);
	};

	const moveBlockDown = (index) => {
		if (index === blocks.length - 1) return; // Нельзя переместить блок ниже, если он находится на последнем месте

		const newBlocks = [...blocks];
		[newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
		setBlocks(newBlocks);
	};

    const removeBlock = (key) => {
        setBlocks(prevBlocks => prevBlocks.filter(block => block.key !== key));
    };

	const [display, setDisplay] = useState({ className: 'constructor phone', url: '/icons/comp.svg' });

    const toggleDisplay = () => {
        const newClassName = display.className === 'constructor phone' ? 'constructor comp' : 'constructor phone';
        const newUrl = display.url === '/icons/comp.svg' ? '/icons/phone.svg' : '/icons/comp.svg';
        setDisplay({ className: newClassName, url: newUrl });
    };

	return (
		<>
			<Navibar name1='Конструктор' name2='Статистика' />
			<div className='bodyConstr'>
				<ContainerCast className={display.className}>
					{blocks.map((block, index) => (
						<div key={block.key}>
							{block.type === 'text' ? (
								<BlockText moveBlockUp={() => moveBlockUp(index)} moveBlockDown={() => moveBlockDown(index)} removeBlock={() => removeBlock(block.key)}  />
							) : (
								<BlockUrl moveBlockUp={() => moveBlockUp(index)} moveBlockDown={() => moveBlockDown(index)} removeBlock={() => removeBlock(block.key)} />
							)}
						</div>
					))}
				</ContainerCast>
				<ContainerCast className="blockBtn">
					<ButtonCast onClick={handleShowQr} className='btn1' name={<img className='img1' src='/icons/qr_code.svg'></img>} />
					<ButtonCast onClick={handleShowText} className='btn2' name='Добавить текст' />
					<ButtonCast onClick={handleShowUrl} className='btn2' name='Добавить ссылку' />
					<ButtonCast onClick={toggleDisplay} className='btn1' name={<img className='img1' src={display.url}></img>} />
				</ContainerCast>
			</div>

			<ModalQr show={showQr} handleClose={handleCloseQr} />
			<ModalUrl show={showUrl} handleClose={handleCloseUrl} handleSave={handleSaveUrl} />
			<ModalText show={showText} handleClose={handleCloseText} handleSave={handleSaveText} />

		</>
	)
}

function generateKey() {
    return Math.random().toString(36);
}
