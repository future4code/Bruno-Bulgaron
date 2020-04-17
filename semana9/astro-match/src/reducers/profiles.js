const initialState = {
  profileToSwipe: {}
}

const profiles = (state = initialState, action) => {
  switch(action.type) {
    case 'SET_PROFILE_TO_SWIPE': {
      return {
        ...state,
        profileToSwipe: action.payload.profileToSwipe
      }
    }
  }
  
  return state
}

export default profiles
