export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //Remove after finished developing...
    //token: 'BQA9bGAV9lkUdT4L8050RGzSbEW0udM4LQOztcmI10eIcEsXg6QfhoAc2L4O_eLEEaoANiI5BDwk-qU3KlsroJPT28bYr0RckTD26gDtVquA6Zd6VjvWku1ghL7sWzRb3670OTq0ak5IeRu0Q7VLt7PAIUKYBl4n5oSLsN6VgcxMiIRF',
};

const reducer = (state, action) => {
    console.log(action);
    //Action -> type, [payload]
    switch(action.type) {
        case "SET_USER":
            return {
              ...state,
              user: action.user,
            };

        case "SET_TOKEN": 
          return{
              ...state,
              token: action.token,
          };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };
        default:
            return state 
    }
}

export default reducer;