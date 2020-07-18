import { useEffect } from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies';
//import cookie from 'js-cookie';

export const login = ({ token }) => {
	return cookie.set('token', token, { expires: 90 });

};

export const authRedirect = (ctx) => {
	const { token } = nextCookie(ctx);
	if ((token && ctx.req.url == '/')) {
		//it there is a token i.e user is already logged in dont allow user to access log in or sign up page, redirect to home
		if (typeof window === 'undefined') {
			ctx.res.writeHead(302, { Location: '/feed' });
			ctx.res.end();
		} else {
			Router.push('/feed');
		}
	}
}

export const auth = (ctx) => {
	const { token } = nextCookie(ctx);
	// If there's no token, it means the user is not logged in.
	if (!token) {
		if (typeof window === 'undefined') {
			ctx.res.writeHead(302, { Location: '/login' });
			ctx.res.end();
		} else {
			Router.push('/login');
		}
	}

	// if ((token && ctx.req.url == '/')) {
	// 	//it there is a token i.e user is already logged in dont allow user to access log in or sign up page, redirect to home
	// 	if (typeof window === 'undefined') {
	// 		ctx.res.writeHead(302, { Location: '/feed' });
	// 		ctx.res.end();
	// 	} else {
	// 		Router.push('/feed');
	// 	}
	// }

	return token;
};

export const logout = () => {
	cookie.remove('token');
	// to support logging out from all windows
	window.localStorage.setItem('logout', Date.now());
	Router.push('/login');
};

export const withAuthSync = (WrappedComponent) => {
	const Wrapper = (props) => {
		const syncLogout = (event) => {
			if (event.key === 'logout') {
				console.log('logged out from storage!');
				Router.push('/login');
			}
		};

		useEffect(() => {
			window.addEventListener('storage', syncLogout);

			return () => {
				window.removeEventListener('storage', syncLogout);
				window.localStorage.removeItem('logout');
			};
		}, []);

		return <WrappedComponent {...props} />;
	};

	Wrapper.getInitialProps = async (ctx) => {
		const token = auth(ctx);

		const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

		return { ...componentProps, token };
	};

	return Wrapper;
};



export const redirectIfAuth = (WrappedComponent) => {
	const Wrapper = (props) => {

		return <WrappedComponent {...props} />;
	};

	Wrapper.getInitialProps = async (ctx) => {
		const token = authRedirect(ctx);

		const componentProps = WrappedComponent.getInitialProps && (await WrappedComponent.getInitialProps(ctx));

		return { ...componentProps, token };
	};

	return Wrapper;
};