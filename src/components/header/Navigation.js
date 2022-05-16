import React, { Fragment } from 'react';
import Logo from '../resources/Logo';
import Drawer from './Drawer';
import Nav from './Nav';

const Navigation = () => {
	return (
		<Fragment>
			<nav
				style={{
					display: 'flex',
					padding: '2% 4%',
					maxHeight: '5vh',
					background: 'black',
					alignItems: 'center',
					justifyContent: 'space-between',
					color: 'white'
				}}
			>
				<Logo />
				<Nav />
				<Drawer />
			</nav>
		</Fragment>
	);
};

export default Navigation;
