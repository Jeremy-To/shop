import { Col, Row } from 'react-bootstrap';

export function About() {
	return (
		<>
			<h1>About us</h1>
			<Row md={2} xs={1} lg={3} className="g-3">
				<Col>
					<h2>Ici, vous êtes en lien avec des libraires</h2>
					<p>
						Le principe de notre site de vente de livres repose sur
						l'utilisation des canaux modernes d'informations et de commandes à
						travers un site doté d'une base de données bibliographiques d'un
						million de références, d'une plate-forme logistique avec un stock de
						près de 350 000 références, de l'expertise de ses nombreux libraires
						(pas des algorithmes) et enfin plusieurs milliers de livres
						chroniqués pour mieux vous conseiller.
					</p>
				</Col>
				<Col>
					<h2>Ici, vous encouragez des acteurs locaux</h2>
					<p>
						Domiciliés en France, nous sommes intégralement soumis à la
						fiscalité française. Notre PME qui emploie uniquement des personnes
						avec des contrats à durée indéterminée permet à des milliers de
						libraires de continuer à vous proposer des livres dans plus de 750
						communes en France et en Belgique.
					</p>
				</Col>
				<Col>
					<h2>Ici, vous renforcez le lien social</h2>
					<p>
						En France et en Belgique*, les livres sont mis à disposition chez
						l'un des 2500 Points Libraires partenaires qui ont choisi de
						participer à cette démarche collective et inédite de la librairie
						indépendante. En retirant vos livres commandés sur lalibrairie.com,
						vous allez à la rencontre d'un authentique libraire, vous favorisez
						le commerce de proximité, celui qui contribue à l'aménagement
						culturel du territoire et qui anime les quartiers.
					</p>
				</Col>
			</Row>
		</>
	);
}
