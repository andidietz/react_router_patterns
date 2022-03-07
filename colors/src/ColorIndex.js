import React from 'react'
import {Link} from 'react-router-dom'
import Nav from './Nav'

const ColorIndex = ({colors}) => {
	return (
		<>
			<h1>Color Picker</h1>
			<p>
				<Link to="/colors/new">Add a color</Link>
			</p>
			<Nav colors={colors} />
		</>
	)
}

export default ColorIndex