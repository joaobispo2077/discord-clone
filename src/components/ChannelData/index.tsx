import React from 'react';

import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';

const ChannelData: React.FC = () => {
	return (
		<Container>
			<Messages />

			<InputWrapper>
				<Input>
					<InputIcon />
					<input type="text" placeholder="Conversar em chat-livre" />
				</Input>
			</InputWrapper>
		</Container>
	);
};

export default ChannelData;
