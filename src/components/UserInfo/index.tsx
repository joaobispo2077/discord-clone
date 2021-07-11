import React from 'react';

import {
	Container,
	Profile,
	Avatar,
	UserData,
	Controls,
	MicIcon,
	HeadphoneIcon,
	SettingsIcon,
} from './styles';

const UserInfo: React.FC = () => {
	return (
		<Container>
			<Profile>
				<Avatar
					src={'https://avatars.githubusercontent.com/u/43768058'}
					alt="Usuário: João Bispo"
				/>
				<UserData>
					<strong>João Bispo</strong>
					<span>#7627</span>
				</UserData>
			</Profile>
			<Controls>
				<MicIcon />
				<HeadphoneIcon />
				<SettingsIcon />
			</Controls>
		</Container>
	);
};

export default UserInfo;
