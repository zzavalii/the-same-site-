import { connect } from "react-redux";
import { setDatingActionCreator } from "../../redux/datingReducer";
import Dating from "./Dating";


let mapStateToProps = (state) => {
    return{
       users: state.datingState.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return{
      date: (id) => { dispatch(setDatingActionCreator(id, true)) },
      unDate: (id) => { dispatch(setDatingActionCreator(id, false)) }
    }
}


const DatingContainer = connect(mapStateToProps, mapDispatchToProps)(Dating)


export default DatingContainer;