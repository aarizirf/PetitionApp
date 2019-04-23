import React, { Component } from 'react';
import axios from 'axios';

class NewIdea extends Component {
	constructor(props) {
		super(props);
		this.state = {idea: ''};
		
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event) {
		this.setState({ idea: event.target.value });
		console.log('Input: ' + this.state.idea)

		event.preventDefault();
	}

	handleSubmit(event) {
		const text = this.state.idea;

		axios.post('/ideas/new', { text })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })


    event.preventDefault();
  }

	render() {
		return (
			<div className='container'>
				<div className='columns'>
					<div className='column is-three-fifths is-offset-one-fifth'>
						<div className='content is-large mt2'>
							<h1>New Idea</h1>
							<p>
								Eiusmod aliquip consequat est laborum eu duis do ullamco aliquip ea esse. Magna do cillum sint aute esse laborum aute nostrud esse cupidatat velit. Sint consectetur mollit ad sint labore aliquip do nisi exercitation laboris.
								</p>
						</div>

						<div className='field'>
							<div className='control'>
								<input value={this.state.value} onChange={this.handleChange} className='input is-medium is-rounded' type='text' placeholder='Idea' />
							</div>
							<div className='control mt1'>
								<button className='button is-info is-fullwidth is-normal is-rounded' onClick={this.handleSubmit}>Submit</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default NewIdea;
