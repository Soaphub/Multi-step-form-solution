import '@/styles/globals.css';
import Layout from '@/Components/Layout';
import Head from "next/head";
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

  	return (
	<>	
		<Provider store={store}>
			<Head>
				<meta charset="utf-8" />
			   	<meta name="viewport" content="width=device-width, initial-scale=1" />
				<meta name="description" content="Website for multipage form"/>
				<meta name="keywords" content="Frontend Mentor, Multipage form app Landing Page Challenge"/>

				<title>Multi Step Form</title>
				<link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png"></link>

			</Head>
			<Layout>
					<Component {...pageProps} />
			</Layout>
		
		</Provider>
	</>)
}
