import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavLink = styled(NavLink)`
	display: inline-block;
	color: 'red';
	text-decoration: none;
	margin-bottom: 1rem;

	&.active {
		color: 'blue';
		border-bottom: 2px solid blue;
	}
`;

export { StyledNavLink };
