import React from 'react';

const NavText = props => <a href={props.href} className="text-sm font-bold text-gray-700 px-2 py-1 hover:bg-gray-300 rounded transition-colors duration-300 cursor-pointer">
			{props.text}
	</a>


function Header() {
	return (
		<header className="container rx-auto">
			<nav className="flex justify-center pt-4">
				<div>
					<ul className="flex space-x-2">
						<NavText href="/" text="Home" />
						<NavText href="/about" text="About" />
						<NavText href="/team" text="Team" />
						<NavText href="/contact" text="Contact" />
						<NavText href="/ar" text="Ar" />
					</ul>
				</div>
			</nav>
        <div className="row">
          <div className="col-md-6 pt-32">
            <h1 className="desc">Welcome To Mal B</h1>
          <p>We are An organizational team assigned to host Model Arab League Programs
</p>
		  </div>
          <div className="col-md-6">
            <img src="/img/logo-right.png" alt="" />
          </div>
        </div>
		</header>
	)
}

export default Header;
