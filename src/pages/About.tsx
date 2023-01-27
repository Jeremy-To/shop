import { Col, Row } from 'react-bootstrap';

export function About() {
	return (
		<>
			<h1 className="d-flex justify-content-center align-items-center">
				About us
			</h1>
			<br />
			<Row md={2} xs={1} lg={3} className="g-3">
				<Col>
					<h2>Here, you are in contact with booksellers</h2>
					<p>
						The principle of our site for the sale of books is based on the use
						of modern channels of information and orders through a site equipped
						with a bibliographic database of one million references, a logistics
						platform with a stock of nearly 350,000 references, the expertise of
						its many booksellers (not algorithms) and finally several thousand
						books reviewed to better advise you.
					</p>
				</Col>
				<Col>
					<h2>Here, you encourage local actors</h2>
					<p>
						Domiciled in France, we are fully subject to French taxation. Our
						SME, which only employs people with permanent contracts, allows
						thousands of booksellers to continue to offer you books in more than
						750 municipalities in France and Belgium.
					</p>
				</Col>
				<Col>
					<h2>Here, you strengthen the social bond</h2>
					<p>
						In France and Belgium, the books are made available at one of the
						2,500 partner Bookseller Points who have chosen to participate in
						this collective and unprecedented approach to independent
						bookstores. By picking up your books ordered on lalibrairie.com, you
						are going to meet an authentic bookseller, you are promoting local
						trade, the one that contributes to the cultural development of the
						territory and which animates the districts.
					</p>
				</Col>
			</Row>
		</>
	);
}
