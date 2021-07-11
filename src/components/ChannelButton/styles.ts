import styled from 'styled-components';
import { Hashtag } from 'styled-icons/heroicons-outline';
import { PersonAdd, Settings } from 'styled-icons/material';

export const Container = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	cursor: pointer;

	padding: 5px 3px;

	border-radius: 5px;
	background-color: transparent;

	transition: background-color 0.2s;

	&:hover,
	&.active {
		background-color: var(--quinary);
		> div span {
			color: var(--white);
			opacity: 0.75;
		}

		div:nth-child(2) svg {
			display: inline;
		}
	}
	> div {
		display: flex;
		align-items: center;
	}

	> div span {
		margin-left: 5px;
		font-size: 15px;
		color: var(--senary);
	}
`;

export const HashtagIcon = styled(Hashtag)`
	width: 20px;
	height: 20px;

	color: var(--symbol);
`;

export const InviteIcon = styled(PersonAdd)`
	display: none;
	width: 16px;
	height: 16px;

	color: var(--symbol);
	cursor: pointer;

	transition: color 0.2s;

	&:hover {
		color: var(--white);
		opacity: 0.75;
	}
`;
export const SettingsIcon = styled(Settings)`
	display: none;
	width: 16px;
	height: 16px;

	margin-left: 4px;

	color: var(--symbol);
	cursor: pointer;

	transition: color 0.2s;

	&:hover {
		color: var(--white);
		opacity: 0.75;
	}
`;
