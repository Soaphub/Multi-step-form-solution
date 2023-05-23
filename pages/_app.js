
import "bootstrap/dist/css/bootstrap.css";
import Layout from '@/Components/Layout';
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import Script from 'next/script';
import Head from "next/head";
import { useEffect } from 'react';
import '@/styles/globals.css';

export default function App({ Component, pageProps }) {

	useEffect(()=>{
		import("bootstrap/dist/css/bootstrap.css");
	},[])

  	return (
	<>	
		<Provider store={store}>
			
			<Head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Website for multipage form"/>
                <meta name="keywords" content="Frontend Mentor, Multipage form app Landing Page Challenge"/>

                <title>Multi Step Form</title>
                <link rel="icon" type="image/x-icon" href="./images/favicon-32x32.png"></link>

            </Head>
			<Layout>
					<Component {...pageProps} />
					
      	  	    	<Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" 
			    	integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" 
			    	crossOrigin="anonymous" />
			</Layout>
		
		</Provider>
	</>)
}
