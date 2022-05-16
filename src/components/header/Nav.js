import React, { Fragment } from 'react'

const Nav = () => {
  return (
		<Fragment>
			<ul style={{ listStyle: 'none', display: 'flex', justifyContent: 'space-between', minWidth: '60%' }}>
				<li style={{ color: 'inherit', marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Falcon 9</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Falcon Heavy</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Dragon</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Starship</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Human Spaceflight</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Rideshare</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Starlink</li>
				{/* <li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Mission</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Launches</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Careers</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>updates</li>
				<li style={{ marginInline: "0%", fontWeight: 'bold', textTransform: 'uppercase', fontSize: '0.75rem', whiteSpace: 'nowrap', overflow: 'hidden' }}>Shop</li> */}
			</ul>
		</Fragment>
	);
}

export default Nav