import React from 'react';
import ServerButton from '../ServerButton';

import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
	return (
		<Container>
			<ServerButton isHome />
			<Separator />

			<ServerButton hasNotifications mentions={65165} />
			<ServerButton hasNotifications />
			<ServerButton mentions={3} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton mentions={50} />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton />
			<ServerButton hasNotifications />
		</Container>
	);
};

export default ServerList;
