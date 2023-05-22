import "bootstrap/dist/css/bootstrap.min.css";
import '../styles/globals.css';
import { useEffect } from "react";
import Layout from '@/Components/Layout';
import { store } from '../redux/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {

	useEffect(() => {
	  require("bootstrap/dist/js/bootstrap.bundle.min.js");
	}, []);

  	return (
	<>	
		<Provider store={store}>
			<Layout>
					<Component {...pageProps} />
			</Layout>
		
		</Provider>
	</>)
}
