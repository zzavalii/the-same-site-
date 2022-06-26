import axios from 'axios';
const SET_DATING = 'SET_DATING'
const SET_STATE = 'SET_STATE'

export const setDatingActionCreator =  (id, isDating) => {
    return{type: SET_DATING, id, isDating}
}

export const setStateActionCreator = (users) => {
  return {type: SET_STATE, users}
}

export const getUsersThunkCreator = () => {
    return(dispatch) =>{
        axios.get('http://localhost:5000/users')
        .then((data) => {
            dispatch(setStateActionCreator(data.data));
        })
    }
}

let initialState = {
    users: [
        {id:0, name: 'Andriy', age: 24, gender: 'M', photoURL:'https://media-cdn.tripadvisor.com/media/photo-s/15/a4/9b/77/legacy-hotel-at-img-academy.jpg', isDating: false},
        {id:1, name: 'Sonya', age: 14, gender: 'W', photoURL:'', isDating: false},
        {id:2, name: 'Vlados', age: 17, gender: 'M', photoURL:'', isDating: false}
    ]
}

const datingReducer = (state = initialState, action) => {
    switch(action.type) {
       case SET_DATING:
           return{
               ...state,
             users: state.users.map(u => u.id === action.id ? {...u, isDating: action.isDating} :u) 
           }
           case SET_STATE:
            return{
                ...state,
                users: action.users
            }
           default:
               return state;
    }
}
export default datingReducer;
