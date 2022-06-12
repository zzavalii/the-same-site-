const SET_DATING = 'SET_DATING'

export const setDatingActionCreator =  (id, isDating) => {
    return{type: SET_DATING, id, isDating}
}

let initialState = {
    users: [
        {id:0, name: 'Andriy', age: 24, gender: 'M', photoURL:'', isDating: false},
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
           default:
               return state;
    }
}
export default datingReducer;