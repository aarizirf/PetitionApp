import React, { Component } from 'react';

class Navbar extends Component {
	render() {
		return (
			<div>
				<nav className="navbar is-light" role="navigation" aria-label="main navigation">
					<div className="navbar-brand">
						<a className="navbar-item" href="https://bulma.io">
							<img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: Free, open source, & modern CSS framework based on Flexbox" width="112" height="28" />
						</a>

						<a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
							<span aria-hidden="true"></span>
						</a>
					</div>

					<div id="navbarBasicExample" className="navbar-menu">
						<div className="navbar-start">
							<a className="navbar-item" href="/">
								Home
							</a>

							<a className="navbar-item" href="/ideas/new">
								New Idea
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}

export default Navbar;
