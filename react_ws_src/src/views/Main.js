import React, { Component} from 'react'
import Header from './layouts/Header'
import MainContent from './layouts/MainContent'
import Footer from './layouts/Footer'

export default class Main extends Component {

	render () {
		const { popup, mainContent } = this.props
		return (
			<div>
				<Header/>
				<MainContent>
					{ mainContent }
				</MainContent>
				<Footer />
				{ popup }
			</div>
		)
	}
}

// property validation
Main.propTypes = {
	mainContent: React.PropTypes.object,
	bottom: React.PropTypes.object,
	popup: React.PropTypes.object
}

