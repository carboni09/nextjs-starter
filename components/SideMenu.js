import React, { useState } from 'react';
//import { withRedux } from '../lib/redux'
//import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from './common';
import { useRouter } from 'next/router'
//import { OPEN_NAVIGATION, CLOSE_NAVIGATION } from '../src/redux/actions/types';
//import { LogoutUser } from '../src/redux/actions/Auth'

const SideMenu = (props) => {
	let router = useRouter()
	//let dispatch = useDispatch()
	//let isOpen = useSelector(({ layout }) => layout.showNavigation)
	return (

		<div>
			<div className="md:hidden fixed top-0 left-0  w-full bg-white h-screen z-50 p-6">
				<div className="flex flex-row justify-between  mb-12 ">
					<h1 className="logo text-2xl font-bold">MY APP</h1>


				</div>

			</div>
			<div className="md:hidden fixed top-0 left-0 w-full opacity-25 bg-gray-300 h-screen z-40" />
		</div>

	);
};

export default SideMenu
