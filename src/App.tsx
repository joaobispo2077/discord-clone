import React from 'react';

import GlobalStyles from './styles/GlobalStyles';
import Layout from './components/Layout';

function App(): JSX.Element {
	return (
		<>
			<GlobalStyles />
			<Layout />
			<h1>Echo Mundo</h1>
		</>
	);
}

export default App;
