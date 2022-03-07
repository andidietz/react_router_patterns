import React, {useState} from 'react'
import {Link, useHistory} from 'react-router-dom'

const AddColorForm = ({addColor}) => {
	const INITIAL_STATE = {colorName:'', colorCode:''}
	
	const history = useHistory()

	const [formData, setFormData] = useState(INITIAL_STATE)

	const handleChange = (event) => {
		const {name, value} = event.target
		setFormData(formData => ({
			...formData,
			[name]: value
		}))
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		const {colorName, colorCode} = formData
		addColor({[colorName]: colorCode})
		history.push('/colors')
	}
	
	return (
		<>
			<form onSubmit={handleSubmit}>
				<input
					id='colorName'
					name='colorName'
					type='text'
					placeholder='color name'
					value={formData.colorName}
					onChange={handleChange}
				>
				</input>
				<input
					id='colorCode'
					name='colorCode'
					type='color'
					value={formData.colorCode}
					onChange={handleChange}
				>
				</input>
				<button>Add</button>
			</form>
			<Link to='/colors'>Return to Home</Link>
		</>
	)
}

export default AddColorForm