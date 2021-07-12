import React from 'react';

import { Container, Role, User, Avatar } from './styles';

export interface UserProps {
	nickname: string;
	isBot?: boolean;
}

const UserRow: React.FC<UserProps> = ({ nickname, isBot }) => {
	return (
		<User>
			<Avatar className={isBot ? 'bot' : ''} />
			<strong>{nickname}</strong>

			{isBot && <span>Bot</span>}
		</User>
	);
};

const UserList: React.FC = () => {
	return (
		<Container>
			<Role>Disponível - 1</Role>
			<UserRow nickname="João Bispo" />
			<UserRow nickname="Viviane Queiroz" />

			<Role>Offline - 17</Role>
			<UserRow nickname="DJ do Lofi" isBot />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
			<UserRow nickname="Fulano" />
		</Container>
	);
};

export default UserList;
