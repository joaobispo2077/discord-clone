import React from 'react';

import { Button } from './styles';

import discordLogoWhite from '../../assets/svg/discordLogoWhite.svg';

export interface ServerButtonProps {
	selected?: boolean;
	isHome?: boolean;
	hasNotifications?: boolean;
	mentions?: number;
}

const ServerButton: React.FC<ServerButtonProps> = ({
	selected,
	isHome,
	mentions,
	hasNotifications,
}) => {
	return (
		<Button
			isHome={isHome}
			hasNotifications={hasNotifications}
			mentions={mentions}
			className={selected ? 'active' : ''}
		>
			{isHome && <img src={discordLogoWhite} alt="Discord" />}
		</Button>
	);
};

export default ServerButton;
