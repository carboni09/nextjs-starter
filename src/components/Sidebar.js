import { NavLink } from './common';
import { useRouter } from 'next/router'

export default (props) => {
	let router = useRouter()
	return (
		<div className="w-1/6 h-full hidden lg:block md:pt-3 md:pl-6 sticky top-0 ">
			<p className="text-xs text-gray-400  mb-4 md:mb-8 justify-center pt-1">MENU</p>
			<div className="flex flex-col pr-8 ">
				<NavLink isActive={router.pathname == '/feed'} buttonText={'Home'} href={'/feed'} icon={require('../assets/icons/home.svg')} />
				<NavLink isActive={router.pathname == '/explore'} buttonText={'Explore'} href={'/explore'} icon={require('../assets/icons/compass.svg')} />
				<NavLink isActive={router.pathname == '/express'} buttonText={<>Express <sup className="text-very-tiny text-red-600"> NEW</sup></>} href={'/express'} icon={require('../assets/icons/clock.svg')} />
				{false && <NavLink
					buttonText={'Collections'}
					isActive={router.pathname == '/collections'}
					href={'/collections'}
					icon={require('../assets/icons/disc (1).svg')}
				/>}
				<NavLink isActive={router.pathname == '/saved'} buttonText={'Saved'} href={'/profile?tab=saved'} icon={require('../assets/icons/bookmark (2).svg')} />
				<NavLink

					isActive={router.pathname == '/favourites'}
					buttonText={'Favourites'}
					href={'/profile?tab=favourites'}
					icon={require('../assets/icons/heart (3).svg')}
				/>
				{false && <NavLink
					isActive={router.pathname == '/purchased'}
					buttonText={'Purchased'}
					href={'/purchased'}
					icon={require('../assets/icons/shopping-cart.svg')}
				/>}
				<NavLink isActive={router.pathname == '/profile'} buttonText={'Profile'} href={'/profile'} icon={require('../assets/icons/user.svg')} />
				{false && <NavLink isActive={router.pathname == '/insights'} buttonText={'Insights'} href={'/insights'} icon={require('../assets/icons/paperclip.svg')} />}



			</div>
		</div>
	);
};
