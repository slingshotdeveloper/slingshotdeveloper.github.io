import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

// interface IHeaderProps {
//   title: string;
// }

const Header = (): ReactElement => {
	return (
		<header>
			<nav className='bg-transparent py-4'>
				<div className='mx-6 sm:ml-10 sm:mr-14 flex justify-between items-center'>
					<Link to='/' className='text-lg font-semibold'>
						<img src={avatar} alt='Logo' className='h-14' />
					</Link>
					<ul className='flex space-x-6 sm:space-x-12'>
						<li><Link to='/' className='hover:text-gray-300'>Home</Link></li>
						<li><Link to='/projects' className=' hover:text-gray-300'>Projects</Link></li>
						<li><Link to='/about' className='hover:text-gray-300'>About</Link></li>
						<li><Link to='/contact' className='hover:text-gray-300'>Contact</Link></li>
					</ul>
				</div>
			</nav>
		</header>);
};

export default Header;