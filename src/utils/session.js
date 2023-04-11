import { isBrowser } from './isBrowser'

export const storeSession = ( session ) => {
	if (!isBrowser()) return null
	
	if(!session.length) return null
	
	localStorage.setItem( 'x-wc-session', session )
}

export const getSession = () => {
	if (!isBrowser()) return null
	
	return localStorage.getItem( 'x-wc-session' )
}