import classes from "./Dating.module.css"

const Dating = (props) => {
 console.log(props)
  let users = props.users.map(u=>
  <div className={classes.user}key={u.id}>
    <img wigth="100"src={u.photoURL} alt="ava" />
    <h3>{u.name}</h3>
    <p>Age: {u.age} Gender: {u.gender}</p>
  </div>
  );
    return(
      <div className={classes.dd}>
        {users}
      </div>
    );
}

export default Dating;