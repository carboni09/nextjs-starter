import { useState, useEffect } from 'react'
import MainLayout from '../components/MainLayout';
import { HomeHero, SermonListItem, SermonListBlock, SermonScrollItem, SermonScrollGroup, SectionBlock, HomeHeroMobile } from '../components';
import { compose } from 'redux';
import { withRedux } from '../lib/redux';
import { useDispatch, useSelector } from 'react-redux'
import { withApollo } from '../lib/apollo';
import { withAuthSync } from '../lib/auth';
import { useQuery } from 'react-apollo'
import gql from 'graphql-tag'
import { ListSermons, GetUserSermons, ListSubjects } from '../src/graphql/custom-queries'
import _ from 'lodash'
import { PlaySermon } from '../src/redux/actions/Sermon';
import { SET_NEXT_SERMON } from '../src/redux/actions/types';
import ItemLoading from '../components/common/loading/ItemLoading';
import HeroLoading from '../components/common/loading/HeroLoading';
import SermonListLoading from '../components/common/loading/ListItemLoading';
import Skeleton from 'react-loading-skeleton';
import HomeHeroMobileLoading from '../components/common/loading/HomeHeroLoading';



let GET_SERMONS = gql(ListSermons)
let GET_USER_SERMONS = gql(GetUserSermons)
let GET_SUBJECTS = gql(ListSubjects)

const FeedPage = (props) => {
	let dispatch = useDispatch()
	let userId = useSelector(({ auth }) => auth.userDetails.sub)
	let nextSermon = useSelector(({ sermon }) => sermon.nextSermon)

	let [userHasInterests, setUserHasInterests] = useState(false)
	let [userHasSubscribed, setUserHasSubscribed] = useState(false)
	let [userHasSavedSermons, setUserHasSavedSermons] = useState(false)
	let [userHasFavouriteSermons, setUserHasFavouriteSermons] = useState(false)


	//Get a handful of sermons
	let { loading: getSermonsLoading, data: sermons, error: getSermonsError } = useQuery(GET_SERMONS, {
		variables: { userId: userId, limit: 50 }
	})
	//get intrests, subscriptions, saves and favourites
	let { loading: getUserSermonsLoading, data: userSermons, error: getUserSermonsError } = useQuery(GET_USER_SERMONS, {
		variables: { userId: userId }
	})

	useEffect(() => {
		if (userSermons && userSermons.getUser) {
			userSermons.getUser.interests.items.length > 0 && setUserHasInterests(true)
			userSermons.getUser.subscriptions.items.length > 0 && setUserHasSubscribed(true)
			userSermons.getUser.saves.items.length > 0 && setUserHasSavedSermons(true)
			userSermons.getUser.favourites.items.length > 0 && setUserHasFavouriteSermons(true)
		}
	}, [userSermons])

	useEffect(() => {
		if (sermons && sermons.listSermons) {

			let sermon = _.sample([...sermons.listSermons.items], 1) //pick one sermon
			//save next sermon
			dispatch({
				type: SET_NEXT_SERMON,
				payload: sermon
			})
		}
	}, [sermons])

	//get subjects
	let { loading: getSubjectsLoading, data: subjects, error: getSubjectsError } = useQuery(GET_SUBJECTS, {
		variables: { userId: userId }
	})










	return (
		<MainLayout disableSearch={true}>
			<div className="lg:flex justify-between lg:flex-row lg:flex-auto">
				<div className="md:w-2/3 flex flex-col md:pr-5  ">
					<p className="hidden sm:text-xs lg:hidden text-gray-500 text-center hero_header_text-mobile">Unfinished</p>

					<p className="hidden md:block text-md md:text-xl font-semibold text_dark_gray mb-4 md:mb-8">Up next</p>
					<div className="hidden md:block">
						{/*Hero for tabs and desktop*/}
						{!getSermonsLoading &&
							sermons && sermons.listSermons &&
							sermons.listSermons.items.length > 0 &&
							<HomeHero
								data={nextSermon}
								handleListenButtonClick={() =>
									console.log('')
									// dispatch(PlaySermon({
									// 	sermonData: {
									// 		id: nextSermon.id,
									// 		title: nextSermon.title,
									// 		preacher: nextSermon.preacher.name,
									// 		url: nextSermon.url,
									// 		image: nextSermon.preacherImage
									// 	}
									// }))
								}
							/>

						}

						{getSermonsLoading && <HeroLoading />}
					</div>

					<div className="mx-4 md:hidden">
						{/*Hero for mobile devices*/}
						{!getSermonsLoading &&
							sermons && sermons.listSermons &&
							sermons.listSermons.items.length > 0 &&
							<HomeHeroMobile
								data={nextSermon}
								handleListenButtonClick={() =>
									console.log('')
									// dispatch(PlaySermon({
									// 	sermonData: {
									// 		id: nextSermon.id,
									// 		title: nextSermon.title,
									// 		preacher: nextSermon.preacher.name,
									// 		url: nextSermon.url,
									// 		image: nextSermon.preacherImage
									// 	}
									// }))
								}
							/>

						}

						{getSermonsLoading && <HomeHeroMobileLoading />}
					</div>



					<div className=" md:hidden mt-12 mx-2">
						{/*Main content for mobile devices */}
						{userHasSavedSermons &&
							<div className="mb-20">
								<SectionBlock sectionTitle="Saved">
									{!getUserSermonsLoading &&
										userSermons && userSermons.getUser &&
										userSermons.getUser.saves.items.length > 0 &&
										_.take(userSermons.getUser.saves.items, 3).map((item, index) => {
											return (
												<SermonListItem key={index} id={item.sermon.id} title={item.sermon.title} preacher={item.sermon.preacher.name} />
											)
										})
									}
								</SectionBlock>
							</div>
						}

						{/*Messages from preachers a user has subscribed to */}
						{userHasSubscribed &&
							<div>
								{!getUserSermonsLoading &&
									userSermons && userSermons.getUser &&
									userSermons.getUser.subscriptions.items.length > 0 &&
									_.filter(userSermons.getUser.subscriptions.items, (o) => _.size(o.preacher.sermons.items) > 0).map((item, index) => {
										return (
											<div key={index} className="mt-12 ">
												<SermonScrollGroup sectionTitle={item.preacher.name} data={_.take(item.preacher.sermons.items, 8).map(item => item)} />
											</div>
										)
									})
								}


							</div>}


						{/*Random subjects for users who have not indicated interests */}
						{!userHasInterests &&
							<div>
								{!getSubjectsLoading &&
									subjects && subjects.listSubjects &&
									subjects.listSubjects.items.length > 0 &&
									_.take(_.shuffle(_.filter(subjects.listSubjects.items, (o) => _.size(o.sermons.items) > 2)), 4).map((item) => {
										return (
											<div key={item.id} className="mb-20">
												<SermonListBlock sectionTitle={item.subject} data={_.take(item.sermons.items, 4).map(item => item)} />
											</div>
										)
									})
								}
							</div>
						}

						{/*Sermons from subjects the user is interested in*/}
						{userHasInterests &&
							<div>
								{!getUserSermonsLoading &&
									userSermons && userSermons.getUser &&
									userSermons.getUser.interests.items.length > 0 &&
									_.take(_.shuffle(_.filter(userSermons.getUser.interests.items, (o) => _.size(o.subject.sermons.items) > 2)), 4).map((item, index) => {
										return (
											<div key={item.id} className=" mb-12">
												<SermonListBlock sectionTitle={item.subject.subject} data={_.take(item.subject.sermons.items, 4).map(item => item)} />
											</div>
										)
									})
								}
							</div>
						}


						{getUserSermonsLoading &&
							<div className="inline-flex flex-col w-full ">
								<p className="text-md md:text-xl font-semibold text_dark_gray mb-4 md:mb-8 w-1/3"><Skeleton /></p>
								<SermonListLoading number={8} />
							</div>
						}


					</div>









					<div className="hidden md:block">
						{/*Main content section for tabs and desktop */}
						{!userHasInterests && !userHasSubscribed &&
							!getSubjectsLoading &&
							subjects && subjects.listSubjects &&
							subjects.listSubjects.items.length > 0 &&
							<div className="mt-12 md:mt-20">
								<SectionBlock sectionTitle="Recommendations">
									<div className="inline-flex flex-row flex-wrap ">
										{_.take(_.shuffle(_.filter(subjects.listSubjects.items, (o) => _.size(o.sermons.items) > 2)), 5).map((item, index) => {
											return (
												item.sermons.items.map(item => {
													return (<SermonScrollItem
														key={item.id}
														id={item.id}
														title={item.title}
														preacher={item.preacher.name}
														preacherId={item.preacher.id}
														listenCount={item.listenCount}
													/>
													)
												})

											)
										})
										}
									</div>
								</SectionBlock>
							</div>}

						{userHasSubscribed &&
							<div>
								{!getUserSermonsLoading &&
									userSermons && userSermons.getUser &&
									userSermons.getUser.subscriptions.items.length > 0 &&
									_.filter(userSermons.getUser.subscriptions.items, (o) => _.size(o.preacher.sermons.items) > 0).map((item, index) => {
										return (
											<div key={index} className="mt-12 md:mt-20">
												<SermonScrollGroup sectionTitle={item.preacher.name} data={_.take(item.preacher.sermons.items, 8).map(item => item)} />
											</div>
										)
									})
								}


							</div>}

						{getUserSermonsLoading && <div className="mt-20">
							<p className="text-md md:text-xl font-semibold text_dark_gray mb-4 md:mb-8 w-1/3"><Skeleton /></p>
							<div className="inline-flex flex-row flex-wrap">
								<ItemLoading number={8} />
							</div>
						</div>}
					</div>
				</div>




				<div className="hidden md:block md:px-8  w-1/3">
					{/*Sidebar of desktop devices*/}
					{userHasSavedSermons &&
						<div className="mb-20">
							<SectionBlock sectionTitle="Saved">
								{!getUserSermonsLoading &&
									userSermons && userSermons.getUser &&
									userSermons.getUser.saves.items.length > 0 &&
									_.take(userSermons.getUser.saves.items, 3).map((item, index) => {
										return (
											<SermonListItem key={index} id={item.sermon.id} title={item.sermon.title} preacher={item.sermon.preacher.name} />
										)
									})
								}
							</SectionBlock>
						</div>

					}


					{!userHasInterests &&
						<div>
							{!getSubjectsLoading &&
								subjects && subjects.listSubjects &&
								subjects.listSubjects.items.length > 0 &&
								_.take(_.shuffle(_.filter(subjects.listSubjects.items, (o) => _.size(o.sermons.items) > 2)), 4).map((item) => {
									return (
										<div key={item.id} className="mb-20">
											<SermonListBlock sectionTitle={item.subject} data={_.take(item.sermons.items, 4).map(item => item)} />
										</div>
									)
								})
							}
						</div>
					}


					{userHasInterests &&
						<div>
							{!getUserSermonsLoading &&
								userSermons && userSermons.getUser &&
								userSermons.getUser.interests.items.length > 0 &&
								_.take(_.shuffle(_.filter(userSermons.getUser.interests.items, (o) => _.size(o.subject.sermons.items) > 2)), 4).map((item) => {
									return (
										<div key={item.id} className=" mb-12">
											<SermonListBlock sectionTitle={item.subject.subject} data={_.take(item.subject.sermons.items, 4).map(item => item)} />
										</div>
									)
								})
							}
						</div>
					}

					{getUserSermonsLoading &&
						<div className="inline-flex flex-col w-full ">
							<p className="text-md md:text-xl font-semibold text_dark_gray mb-4 md:mb-8 w-1/3"><Skeleton /></p>
							<SermonListLoading number={8} />
						</div>
					}
				</div>
			</div>
		</MainLayout >
	);
};

export default compose(withApollo, withAuthSync, withRedux)(FeedPage);


