// Fichero src/components/App.js
import '../styles/App.scss';
import initialData from '../data/clubs.json';
import { useState } from 'react';

function App() {
	const [data, setData] = useState(initialData);

	const [newName, setNewName] = useState('');
	const [newWeekdays, setNewWeekdays] = useState(false);
	const [newWeekend, setNewWeekend] = useState(false);

	const handleNewName = (ev) => {
		setNewName(ev.currentTarget.value);
	};
	const handleNewWeekdays = (ev) => {
		setNewWeekdays(ev.currentTarget.checked);
	};
	const handleNewWeekend = (ev) => {
		setNewWeekend(ev.currentTarget.checked);
	};

	const handleClick = (ev) => {
		ev.preventDefault();

		const newClub = {
			name: newName,
			openOnWeekdays: newWeekdays,
			openOnWeekend: newWeekend,
		};
		setData([...data, newClub]);
		setNewName('');
		setNewWeekdays('');
		setNewWeekend('');
	};
	//render html

	const htmlClubList = data.map((oneClub, index) => (
		<li key={index} className="club__item">
			<p className="club__name">
				<label className="club__label">
					{`#${index}: ${oneClub.name}`}
				</label>
			</p>
			<p className="club__openWeekdays">
				<label className="club__label">
					{`Abierto entre semana:${
						oneClub.openOnWeekdays ? `Si` : `No`
					}`}
				</label>
			</p>
			<p className="club__openWeekend">
				<label className="club__label">
					{`Abierto el fin de semana:${
						oneClub.openOnWeekend ? `Si` : `No`
					}`}
				</label>
			</p>
		</li>
	));
	return (
		<div>
			{/* header */}
			<header className="header">
				<h1 className="header__title">Mis clubs</h1>
				{/* <form>
					aquí irá el filtrado del listado de clubs
				</form> */}
			</header>
			<main>
				<ul className="club__list">{htmlClubList}</ul>

				<form className="new-club__form">
					<h2 className="new-club__title">Añade un nuevo club</h2>
					Nombre{' '}
					<input
						className="new-club__input"
						type="text"
						name="name"
						id="name"
						placeholder="Nombre"
						onChange={handleNewName}
						value={newName}
						required
					/>
					¿Abre entre semana?
					<input
						className="new-club__input"
						type="checkbox"
						name="weekdays"
						id="weekdays"
						onChange={handleNewWeekdays}
						checked={newWeekdays ? true : false}
					/>
					¿Abre los fines de semana?
					<input
						className="new-club__input"
						type="checkbox"
						name="weekend"
						id="weekend"
						onChange={handleNewWeekend}
						checked={newWeekend ? true : false}
					/>
					<input
						className="new-club__btn"
						type="submit"
						value="Añadir"
						onClick={handleClick}
					/>
				</form>
			</main>
		</div>
	);
}

export default App;
