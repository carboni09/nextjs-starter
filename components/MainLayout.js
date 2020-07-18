
import { Navbar } from './';
//import Sidebar from './Sidebar';
//import SideMenu from './SideMenu';
//import { withRedux } from '../lib/redux';
const MainLayout = (props) => {
	return (
		<div>




			<Navbar />


		</div>
	)
};

MainLayout.defaultProps = {
	disableSearch: false,
	showSidebar: true,
	hideNavbar: false,
	alternateNavbar: false
};

export default MainLayout;
