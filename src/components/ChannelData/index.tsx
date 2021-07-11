import React, { useRef, useEffect } from 'react';

import ChannelMessage, { Mention } from '../ChannelMessage';
import { Container, Messages, InputWrapper, Input, InputIcon } from './styles';
const ChannelData: React.FC = () => {
	const messageRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	useEffect(() => {
		const div = messageRef.current;

		if (div) {
			div.scrollTop = div.scrollHeight;
		}
	}, [messageRef]);

	return (
		<Container>
			<Messages ref={messageRef}>
				{Array.from(Array(50).keys()).map((message) => (
					<ChannelMessage
						key={message}
						author={'João Bispo'}
						date={'11/07/2021'}
						content={'Bora assistir Parks and Recreation?'}
					/>
				))}

				<ChannelMessage
					author={'DJ do Lofi'}
					date={'11/07/2021'}
					content={
						<>
							{' '}
							<Mention>@João Bispo</Mention>, solicitou tocar Freaks de Surf
							Course 🎵
						</>
					}
					hasMention
					isBot
				/>
			</Messages>

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
