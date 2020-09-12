import React, { useState, useEffect, useRef } from 'react';
import '../styles/index.css';
import App from 'next/app';
import { useRouter, Router } from 'next/router';
import { DefaultSeo } from 'next-seo'
import SEO from '../../seo.config'

const MyApp = ({ Component, pageProps }) => {
	let router = useRouter();



	return (
		<div >
			<DefaultSeo {...SEO} />
			<Component {...pageProps} />
		</div>
	);
};

export default MyApp;
