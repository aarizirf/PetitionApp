import React, { Component } from 'react';

import Idea from "./Idea";

class Home extends Component {
	state = { ideas: [] }

	componentDidMount() {
    fetch('/ideas')
      .then(res => res.json())
      .then(ideas => this.setState({ ideas }));
  }


	render() {
		console.log(this.state)

		return (
			<div>
				<div className="container">
					<div className="columns">
						<div className="column is-three-fifths is-offset-one-fifth">

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
