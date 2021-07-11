import styled from 'styled-components';
import { Mic, Headset, Settings } from 'styled-icons/material';

export const Container = styled.section`
	grid-area: UI;

	display: flex;
	align-items: center;
	justify-content: space-between;

	padding: 10px;
	background-color: var(--quaternary);
	box-shadow: rgba(0, 0, 0, 0.2);
`;

export const Profile = styled.div`
	display: flex;
	align-items: center;
`;

export const Avatar = styled.img`
	width: 32px;
	height: 32px;
	border-radius: 50%;
	background: pink center / cover;
	/* background: center / cover
		url('https://avatars.githubusercontent.com/u/43768058'); */
`;

export const UserData = styled.div`
	display: flex;
	flex-direction: column;

	margin-left: 8px;

	> strong {
		color: var(--white);
		display: block;
		font-size: 13px;
	}

	> span {
		color: var(--gray);
		font-size: 13px;
	}
`;

export const Controls = styled.div`
	display: flex;
	align-items: center;

	> svg:not(:first-child) {
		margin-left: 7px;
	}
`;

export const MicIcon = styled(Mic)`
	width: 20px;
	height: 20px;

	border-radius: 10%;

	color: var(--white);
	opacity: 0.7;
	cursor: pointer;

	transition: opacity, background-color 0.2s;

	&:hover {
		opacity: 1;
		background-color: var(--quinary);
	}
`;

export const HeadphoneIcon = styled(Headset)`
	width: 20px;
	height: 20px;

	border-radius: 10%;

	color: var(--white);
	opacity: 0.7;
	cursor: pointer;

	transition: opacity, background-color 0.2s;

	&:hover {
		opacity: 1;
		background-color: var(--quinary);
	}
`;

export const SettingsIcon = styled(Settings)`
	width: 20px;
	height: 20px;

	border-radius: 10%;

	color: var(--white);
	opacity: 0.7;
	cursor: pointer;

	transition: opacity, background-color 0.2s;

	&:hover {
		opacity: 1;
		background-color: var(--quinary);
	}
`;
