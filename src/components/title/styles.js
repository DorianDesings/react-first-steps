import styled from 'styled-components';

const StyledTitle = styled.h1`
	color: ${({ color }) => color};
	font-size: ${({ size }) => size};
	background-color: steelblue;

	&:hover {
		color: limegreen;
	}
`;

export { StyledTitle };
