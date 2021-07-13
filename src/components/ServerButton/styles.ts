import styled from 'styled-components';
import { ServerButtonProps } from '.';

export const Button = styled.button<ServerButtonProps>`
	display: flex;
	align-items: center; // vertical align
	justify-content: center; // horizontal align
	flex-shrink: 0; // block element to compress

	width: 48px;
	height: 48px;

	margin-bottom: 8px;
	border-radius: 50%;

	background-color: var(--primary);

	position: relative;
	cursor: pointer;

	> img {
		width: 24px;
		height: 24px;
	}

	&::before {
		width: 9px;
		height: 9px;

		position: absolute;
		left: -17px;
		top: calc(50% - 4.5px);

		background-color: var(--white);
		border-radius: 50%;

		content: '';
		display: ${(props) => (props.hasNotifications ? 'inline' : 'none')};
	}

	&::after {
		background-color: var(--notification);

		width: auto;
		height: 16px;

		padding: 0 4px;

		position: absolute;
		bottom: -4px;
		right: -4px;

		border-radius: 12px;
		border: 4px solid var(--quaternary);

		text-align: center;
		font-size: 13px;
		font-weight: bold;

		color: var(--white);

		content: '${(props) => props.mentions ?? `${String(props.mentions)}`}';
		display: ${(props) =>
			props.mentions && props.mentions > 0 ? 'inline' : 'none'};
	}

	transition: border-radius 0.2s, background-color 0.2s;

	&.active,
	&:hover {
		border-radius: 16px;
		background: var(--discord);
	}
`;
