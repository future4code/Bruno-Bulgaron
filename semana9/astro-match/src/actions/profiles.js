import axios from 'axios'

export const clearSwipes = () => async (dispatch) => {
	const body = 
	
	await axios.put('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/clear')
}

export const getProfileToSwipe = () => async (dispatch) => {
	const response = await axios.get('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruno/person')

	console.log(response.data.profile)

	dispatch(setProfileToSwipe(response.data.profile))
}

export const setProfileToSwipe = (profileFromApi) => {
	return {
		type: 'SET_PROFILE_TO_SWIPE',
		payload: {
			profileToSwipe: profileFromApi
		}
	}
}