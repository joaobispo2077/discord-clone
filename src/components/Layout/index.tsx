import React from 'react';
import ServerList from '../ServerList';

import { Grid } from './styles';

const Layout: React.FC = () => {
	return (
		<Grid>
			<ServerList />
		</Grid>
	);
};

export default Layout;
