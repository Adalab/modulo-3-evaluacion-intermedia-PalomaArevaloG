// Fichero src/components/App.js
import '../styles/App.scss';
import initialData from '../data/clubs.json';

function App() {
	return (
		<div>
			{' '}
			{/* header */}
			<header className="header">
				<h1 className="header__title">Mis clubs</h1>
				{/* <form>
					aquí irá el filtrado del listado de clubs
				</form> */}
			</header>
			<main>
				{/* club list */}
				<ul className="club__list">
					<li className="club__item">
						<p className="club__name">
							<label className="club__label">#0: Book club</label>
						</p>
						<p className="club__openLabour">
							<label className="club__label">
								Abierto entre semana:{' '}
							</label>
						</p>
						<p className="club__openWeekend">
							<label className="club__label">
								Abierto el fin de semana:{' '}
							</label>
						</p>
					</li>
					<li className="club__item">
						<p className="club__name">
							<label className="club__label">
								#1: Chess club
							</label>
						</p>
						<p className="club__openLabour">
							<label className="club__label">
								Abierto entre semana:{' '}
							</label>
						</p>
						<p className="club__openWeekend">
							<label className="club__label">
								Abierto el fin de semana:{' '}
							</label>
						</p>
					</li>{' '}
					<li className="club__item">
						<p className="club__name">
							<label className="club__label">
								#2: Escape room club
							</label>
						</p>
						<p className="club__openLabour">
							<label className="club__label">
								Abierto entre semana:{' '}
							</label>
						</p>
						<p className="club__openWeekend">
							<label className="club__label">
								Abierto el fin de semana:{' '}
							</label>
						</p>
					</li>{' '}
					<li className="club__item">
						<p className="club__name">
							<label className="club__label">
								#3: Debate club
							</label>
						</p>
						<p className="club__openLabour">
							<label className="club__label">
								Abierto entre semana:{' '}
							</label>
						</p>
						<p className="club__openWeekend">
							<label className="club__label">
								Abierto el fin de semana:{' '}
							</label>
						</p>
					</li>
				</ul>
			</main>
		</div>
	);
}

export default App;
