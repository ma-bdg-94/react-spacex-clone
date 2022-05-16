import React, { Fragment } from 'react'
import { useToggleDrawer } from '../../hooks/useToggle';
import Hamburger from '../resources/Hamburger'



const Drawer = () => {
  const [activateDrawer, setActivateDrawer] = useToggleDrawer()
  return (
		<Fragment>
			<button
				style={{ background: 'none', border: 'none', cursor: 'pointer' }}
				onClick={setActivateDrawer}
			>
				{!activateDrawer ? (
					<i className="fa fa-solid fa-bars" style={{ color: 'white' }}></i>
				) : (
					<i className="fa fa-solid fa-ban" style={{ color: 'white' }}></i>
				)}
			</button>
			{activateDrawer && (
				<div
					style={{
						position: 'absolute',
						//left: '95%',
						background: 'gray',
						zIndex: 10,
						width: '20%',
						marginLeft: '75%',
						marginTop: '30%',
						//height: '90%'
					}}
				>
					<ul
						style={{
							listStyle: 'none',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							//minWidth: '60%',
							fontSize: '2rem',
						}}
					>
						<li
							style={{
								color: 'inherit',
								marginInline: '0%',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								fontSize: '1.1rem',
                margin: '3%'
							}}
						>
							Shop
						</li>
						<li
							style={{
								marginInline: '0%',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								fontSize: '1.1rem',
                margin: '3%'
							}}
						>
							Mission
						</li>
						<li
							style={{
								marginInline: '0%',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								fontSize: '1.1rem',
                margin: '3%'
							}}
						>
							Launches
						</li>
						<li
							style={{
								marginInline: '0%',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								fontSize: '1.1rem',
                margin: '3%'
							}}
						>
							Careers
						</li>
						<li
							style={{
								marginInline: '0%',
								fontWeight: 'bold',
								textTransform: 'uppercase',
								fontSize: '0.75rem',
								whiteSpace: 'nowrap',
								overflow: 'hidden',
								fontSize: '1.1rem',
                margin: '3%'
							}}
						>
							Updates
						</li>
						{/* <li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Mission</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Launches</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Careers</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>updates</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Shop</li> */}
					</ul>
				</div>
			)}
		</Fragment>
	);
}

export default Drawer