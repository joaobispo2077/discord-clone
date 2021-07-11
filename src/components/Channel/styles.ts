import styled from 'styled-components';
import { Add } from 'styled-icons/material';

export const Container = styled.div`
	margin-bottom: 6px;
`;

export const Category = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;

	margin-bottom: 6px;

	> span {
		cursor: pointer;

		text-transform: uppercase;
		font-size: 12px;
		font-weight: medium;
		color: var(--gray);

		&:hover {
			color: var(--white);
			opacity: 0.75;
		}
	}
`;

export const AddCategoryIcon = styled(Add)`
	width: 21px;
	height: 21px;
	color: var(--symbol);

	cursor: pointer;

	&:hover {
		color: var(--white);
		opacity: 0.75;
	}
`;
