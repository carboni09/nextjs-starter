import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css';
import App from 'next/app';
import { useRouter, Router } from 'next/router';
//import { SideMenu, NowPlaying, Player, Toast } from '../components';
//import Amplify from 'aws-amplify';
//import config from '../aws-exports';
//import { useSelector } from 'react-redux';
//import { withRedux } from '../lib/redux';
//import { ToastContainer } from 'react-toastify';
//import 'react-toastify/dist/ReactToastify.css';
//import 'react-responsive-modal/styles.css';
//import "react-loader-spinner/dist/loader/css/react-spinner-loader.css"
//import '../styles/custom-modal.css'
//import '../styles/editor.css'
//import { FormMessage } from '../components/common';
//import * as gtag from '../lib/gtag'
import { DefaultSeo } from 'next-seo'
import SEO from '../seo.config'
//import Modal from '../components/Modal'

//Router.events.on('routeChangeComplete', url => gtag.pageview(url))


//Amplify.configure(config);

const MyApp = ({ Component, pageProps }) => {
	let router = useRouter();



	return (
		<div >
			<DefaultSeo {...SEO} />

			<Component {...pageProps} />


			{// display the NowPlaying button panel on all paths except from sermon details and login view
				/*router.pathname !== '/sermon-details' &&
				router.pathname !== '/login' &&
			<NowPlaying />*/}
		</div>
	);
};

export default MyApp;
