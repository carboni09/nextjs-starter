import { useState } from 'react'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import { Tabs } from '../components'
//import { compose } from 'redux'
//import { redirectIfAuth } from '../lib/auth'





const Home = (props) => {
	return (
		<div >
			<Tabs />

		</div>

	);
};

export default Home
