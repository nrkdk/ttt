import React, {Component} from 'react'

export default class SetName extends Component {

	constructor (props) {
		super(props)

		this.state = {}
	}

//	------------------------	------------------------	------------------------

	render () {
		return (
			<form id='SetName' onSubmit={this.saveName.bind(this)}>

				<h1>Set Name</h1>

				<fieldset ref='nameHolder' className='input_holder left'>
					<label htmlFor='name'>Name</label>
					<input id='name' ref='name' type='text' className='input name' placeholder='Enter name' />
				</fieldset>


				<button type='submit' onClick={this.saveName.bind(this)} className='button'><span>SAVE <span className='fa fa-caret-right'></span></span></button>

			</form>
		)
	}

//	------------------------	------------------------	------------------------

	saveName (e) {
		// const { name } = this.refs
		// const { onSetName } = this.props
		// onSetName(name.value.trim())

    e.preventDefault()
		this.props.onSetName(this.refs.name.value.trim())
	}

}
