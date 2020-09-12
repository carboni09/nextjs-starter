import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducers from './redux/reducers';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'primary',
    storage,
    whitelist: ['auth']
};

const initialState = {};

const persistedReducer = persistReducer(persistConfig, reducers);

export const initializeStore = (preloadedState = initialState) => {
    return createStore(persistedReducer, preloadedState, composeWithDevTools(applyMiddleware(ReduxThunk)));
};

/*
"@apollo/react-hooks": "^3.1.3",
    "@apollo/react-ssr": "^3.1.3",
    "@sentry/browser": "^5.17.0",
    "@sentry/node": "^5.17.0",
    "@sentry/webpack-plugin": "^1.11.1",
    "@svgr/webpack": "^5.1.0",
    "@zeit/next-source-maps": "0.0.3",
    "amazon-cognito-identity-js": "^3.2.5",
    "animate.css": "^3.7.2",
    "apollo-cache-inmemory": "^1.6.5",
    "apollo-client": "^2.6.3",
    "apollo-link-http": "^1.5.16",
    "aws-amplify": "^3.0.15",
    "aws-appsync": "https://github.com/carboni09/appsync3.git",
    "aws-appsync-react": "^3.0.2",
    "classnames": "^2.2.6",
    "cross-env": "^7.0.0",
    "date-fns": "^2.12.0",
    "draft-js": "^0.11.5",
    "framer-motion": "^1.10.3",
    "graphql": "^14.6.0",
    "graphql-tag": "^2.10.3",
    "isomorphic-unfetch": "^3.0.0",
    "js-cookie": "^2.2.1",
    "lodash": "^4.17.15",

    "next-compose-plugins": "^2.2.0",
    "next-cookies": "^2.0.3",
    "next-fonts": "^1.1.0",
    "next-images": "^1.3.1",
    "next-optimized-images": "^2.5.7",
    "next-seo": "^4.4.0",
    "nodemon": "^2.0.2",
    "nprogress": "^0.2.0",

    "react-apollo": "^3.1.3",
    "react-audio-player": "^0.11.1",
    "react-beforeunload": "^2.2.0",
    "react-bidirectional-infinite-scroll": "^2.0.1",

    "react-infinite-scroll-component": "^5.0.4",
    "react-infinite-scroller": "^1.2.4",
    "react-loader-spinner": "^3.1.5",
    "react-loading-skeleton": "^2.0.1",
    "react-notifications-component": "^2.4.0",
    "react-player": "^1.15.3",
    "react-progressbar": "^15.4.1",
    "react-redux": "^7.2.0",
    "react-responsive-modal": "^5.0.2",
    "react-share": "^4.1.0",
    "react-slider": "^1.0.3",
    "react-tiny-popover": "^4.0.0",
    "react-toast-notifications": "^2.4.0",
    "react-toastify": "^5.5.0",
    "redux": "^4.0.5",
    "redux-devtools-extension": "^2.13.8",
    "redux-persist": "^6.0.0",
    "redux-thunk": "^2.3.0",
    "reselect": "^4.0.0",
    "uuid": "^7.0.2",
	"validator": "^13.0.0",

	*/