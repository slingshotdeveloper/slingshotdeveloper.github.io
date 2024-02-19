import React, { ReactElement } from 'react';

// interface IHomeProps {
//   title: string;
// }

const Home = (): ReactElement => {
	return (
		<div>
			<div className='bg-gray-200 p-4'>
				<button className='bg-primary text-white px-4 py-2 rounded-md hover:bg-blue-700'>
    				Click me
				</button>
				<h1 className='text-3xl font-bold underline text-red-600'>
      				Simple React Typescript Tailwind Sample
				</h1>
			</div>
			<p>This is the home page content.</p>
		</div>
	); 
};

export default Home;
