import React, { Component } from 'react';

class Idea extends Component {
	render() {
		return (
			<div className='box mt2'>
				<article className='media'>
					<div className='media-content'>
						<div className='content is-size-5'>
							{this.props.text}
							<div className='is-pulled-right'>
								<button className='button is-outlined is-info is-rounded'>
									<i className='fas fa-heart fa-sm'></i>
								</button>
							</div>
						</div>
					</div>
				</article>
			</div>
		);
	}
}

export default Idea;
