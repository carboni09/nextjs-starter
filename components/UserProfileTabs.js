import { useState } from 'react'
import Link from 'next/link'
import { useRouter, withRouter } from 'next/router'
import SavedPageContainer from './saved'
import FavoritesPageContainer from './favourites'
import CompletionsPageContainer from './completed'
import BadgeContainer from './BadgesContainer'

const UserProfileTabs = (props) => {
    //let router = useRouter()
    let { query: { tab } } = props.router;

    let showBadges = tab === 'badges' || tab == null;
    let showSaved = tab === 'saved';
    let showFavourites = tab === 'favourites';
    let showCompleted = tab === 'completed';
    let showPurchased = tab === 'purchased';
    return (
        <React.Fragment>
            <div id="t" className="flex flex-row justify-center md:justify-start  text-sm border-gray border-t-2 border-b-2 overflow-x-scroll md:overflow-auto ">
                <Link href={{ pathname: `/profile`, query: { tab: 'badges' }, }}>
                    <a className={`my-1 mr-4 ${showBadges ? 'font-bold' : ''}`}>Badges</a>
                </Link>


                <Link href={{ pathname: `/profile`, query: { tab: 'saved' } }}>
                    <a className={`my-1 mr-4 ${showSaved ? 'font-bold' : ''}`}>Saved</a>
                </Link>
                <Link href={{ pathname: `/profile`, query: { tab: 'favourites' } }}>
                    <a className={`my-1 mr-4 ${showFavourites ? 'font-bold' : ''}`}>Favourites</a>
                </Link>
                <Link href={{ pathname: `/profile`, query: { tab: 'completed' } }}>
                    <a className={`my-1 mr-4 ${showCompleted ? 'font-bold' : ''}`}>Completed</a>
                </Link>

            </div>
            <div className="">
                {showBadges && (
                    <React.Fragment>
                        <BadgeContainer />
                    </React.Fragment>
                )}

                {showSaved && (
                    <React.Fragment>
                        <SavedPageContainer />
                    </React.Fragment>
                )}
                {showFavourites && (
                    <React.Fragment>
                        <FavoritesPageContainer />
                    </React.Fragment>
                )}
                {showCompleted && (
                    <React.Fragment>
                        <CompletionsPageContainer />
                    </React.Fragment>
                )}
            </div>
        </React.Fragment>

    )
}

export default withRouter(UserProfileTabs)