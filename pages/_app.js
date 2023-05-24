
import "bootstrap/dist/css/bootstrap.css";
import Layout from '@/Components/Layout';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { useEffect } from 'react';
import Head from "next/head";
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

	useEffect(()=>{
		import("bootstrap/dist/css/bootstrap.css");
	},[])

  	return (
	<>	
		<Provider store={store}>
			<Layout>	
					<Head>
						<meta name="viewport" content="width=device-width, initial-scale=1" />
	
						<title>Multi Step Form</title>
						<link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png"></link>

					</Head>
					<Component {...pageProps} />
			</Layout>
		
		</Provider>
	</>)
}


