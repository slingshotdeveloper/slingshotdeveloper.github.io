import React, { ReactElement } from 'react';
import './home.scss';

// interface IHomeProps {
//   title: string;
// }

const Home = (): ReactElement => {
	return (
		<>
			<div className='h-screen flex'>
				<div>
					<h1>
						<span>DAVID</span> 
						<span>DAVIS</span>
					</h1>
				</div>
				<div>
					<p>some content text</p>
				</div>
			</div>
		</>
	); 
};

export default Home;
