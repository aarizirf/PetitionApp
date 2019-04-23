import React, { Component } from 'react';
import axios from 'axios';

import Idea from './Idea';

class Home extends Component {
	state = { ideas: [] }

	componentDidMount() {
		axios.get('/ideas')
		.then(res => {
			const ideas = res.data;
			this.setState({ ideas });
		})
  }


	render() {
		console.log(this.state)

		return (
			<div>
				<div className='container'>
					<div className='columns'>
						<div className='column is-three-fifths is-offset-one-fifth'>

							{this.state.ideas.map((idea) =>
								<Idea text={idea.text} />
							)}

						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
