import styled from 'styled-components';
import { AlternateEmail } from 'styled-icons/material';

export const Container = styled.section`
	grid-area: CD;

	display: flex;
	flex-direction: column;
	justify-content: space-between;

	background: var(--primary);
`;

export const Messages = styled.div`
	padding: 20px 0;

	display: flex;
	flex-direction: column;

	max-height: calc(100vh - 46px - 67px);
	overflow-y: scroll;

	::-webkit-scrollbar {
		width: 16px;
		height: 16px;
	}

	::-webkit-scrollbar-corner {
		background-color: transparent;
	}

	::-webkit-scrollbar-thumb {
		background-color: var(--tertiary);
		border: 4px solid transparent;
		background-clip: padding-box;
		border-radius: 8px;
	}

	::-webkit-scrollbar-track {
		border: 4px solid transparent;
		background-clip: padding-box;
		border-radius: 8px;
		background-color: #2e3338;
	}
`;

export const InputWrapper = styled.div`
	width: 100%;

	padding: 0 16px 16px 8px;
`;

export const Input = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	width: 100%;
	height: 44px;

	padding: 0 10px 0 0;
	border-radius: 7px;

	background-color: var(--chat-input);
	position: relative;

	~ svg {
		position: relative;
		top: -50%;
		left: 14px;
		transition: 100ms ease-in-out;
	}

	input {
		width: 100%;
		height: 100%;
		background-color: transparent;

		color: var(--white);

		&::placeholder {
			color: var(--gray);
		}
	}
`;

export const InputIcon = styled(AlternateEmail)`
	width: 24px;
	height: 24px;

	margin: 0 10px;
	color: var(--gray);
`;
