//import { useDispatch, useSelector } from 'react-redux'
import { OPEN_NAVIGATION } from '../src/redux/actions/types';
import Link from 'next/link'
export default (props) => {
	//let dispatch = useDispatch()

	return (
		<div className="sticky top-0 bg-white z-50 ">
			<div className="px-5 md:px-8 py-3">
				<div className="flex flex-row justify-between  ">
					<Link href="/feed">
						<h1 className="logo text-2xl font-bold ">MY APP</h1>
					</Link>







				</div>




			</div>
		</div>
	)
};
