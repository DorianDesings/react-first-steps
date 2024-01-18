import { StyledNavLink } from './styles';

const Header = () => {
	return (
		<header>
			<h1>SOY UN HEADER</h1>
			<nav>
				<ul>
					<li>
						<StyledNavLink to='/'>Home</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to='/section'>Enrique Bio</StyledNavLink>
					</li>
					<li>
						<StyledNavLink to='/contact'>Contact</StyledNavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
