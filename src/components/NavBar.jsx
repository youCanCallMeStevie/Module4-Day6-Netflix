import React, { Component } from "react";
import logo from "../netflix-logo.png";
import "../App.css";
class NavBar extends Component {
	state = {};
	render() {
		return (
			<nav className='navbar navbar-expand-lg navbar-dark'>
				<a className='navbar-brand my-1 mx-4' href='index.html'>
					<img src={logo} width='125' />
				</a>

				<div
					className='collapse navbar-collapse'
					id='navbarSupportedContent'>
					<ul className='navbar-nav mr-auto'>
						<li className='nav-item mr-3 active'>
							<a className='nav-link' href='#'>
								Home
							</a>
						</li>
						<li className='nav-item mr-3'>
							<a className='nav-link' href='#'>
								Series
							</a>
						</li>
						<li className='nav-item mr-3'>
							<a className='nav-link' href='#'>
								Films
							</a>
						</li>
						<li className='nav-item mr-3'>
							<a className='nav-link' href='#'>
								New & Popular
							</a>
						</li>
						<li className='nav-item mr-3'>
							<a className='nav-link' href='#'>
								My List
							</a>
						</li>
					</ul>
					<div className='form-inline my-2 my-lg-0'>
						{/* searchbar */}

						<form action=''>
							<input type='search' />
							<i class='fa fa-search'></i>
						</form>

						<div className='bell-container'>
							<i className='fa fa-bell mr-3 fa-lg'></i>
						</div>
						<span className='avatar mr-3'>
							<img src='https://pbs.twimg.com/profile_images/1198967349312991232/lXeo3AMv_400x400.png' />
						</span>
						<div className='dropdown dropdown-navbar-account'>
							<div
								className='dropdown-toggle transparent'
								data-toggle='dropdown'
								aria-haspopup='true'
								aria-expanded='false'></div>
							<div
								className='dropdown-menu dropdown-menu-right mt-4'
								aria-labelledby='navbarDropdown'>
								<a className='dropdown-item' href='#'>
									<span className='mini-avatar'>
										<img src='assets/red-netflix-smile.png' />
									</span>
									Orhan
								</a>
								<a className='dropdown-item' href='#'>
									<span className='mini-avatar'>
										<img src='assets/navy-netflix-smile.png' />
									</span>
									Manuel
								</a>
								<a className='dropdown-item' href='#'>
									<span className='mini-avatar'>
										<img src='assets/Blue-netflix-smile.png' />
									</span>
									Stephanie
								</a>
								<a
									href='profile.html'
									className='dropdown-item'>
									Manage Profiles
								</a>
								<div className='dropdown-divider'></div>
								<a
									className='dropdown-item'
									href='backoffice.html'>
									Back Office
								</a>
								<a
									className='dropdown-item'
									href='accounts.html'>
									Accounts
								</a>
								<a className='dropdown-item' href='intro.html'>
									Sign out
								</a>
							</div>
						</div>
					</div>
				</div>
			</nav>
		);
	}
}

export default NavBar;
