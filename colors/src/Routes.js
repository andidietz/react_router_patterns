import React, {useState} from 'react'
import {Route, Switch, Redirect} from 'react-router-dom'
import ColorIndex from './ColorIndex'
import Color from './Color'
import AddColorForm from './AddColorFrom'

const Routes = () => {
	const INITIAL_STATE = {
		red: "#FF0000",
	}
	
	const [colors, setColors] = useState(INITIAL_STATE)
	const addColor = (newColor) => setColors(previousItems => ({...previousItems, ...newColor}))

	function makeProps(props) {
		const {color} = props.match.params
		const hex = colors[color]
		
		return <Color color={color} hex={hex}/>
	}

	return (
		<Switch>
			<Route exact path='/colors/new'>
				<AddColorForm addColor={addColor}/>
			</Route>
			<Route exact path='/colors/:color' render={makeProps} />
			<Route exact path='/colors'>
				<ColorIndex colors={colors}/>
			</Route>
			<Redirect to='/colors' />
		</Switch>
	)
}

export default Routes