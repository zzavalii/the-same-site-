import classes from "./Dating.module.css"

const Dating = (props) => {
 console.log(props)
  let users = props.users.map(u=>
  <div className={classes.user}key={u.id}>
    <img wigth="100"src={u.photoURL} alt="ava" />
    <h3>{u.name}</h3>
    <p>Age: {u.age} Gender: {u.gender}</p>
    <p>Login: {u.login} | Password: {u.password}</p>
  </div>
  );
    return(
      <div>
      <div className={classes.dd}>
        {users}
      </div>
     <form action="http://localhost:5000/register" method="POST">
      <input type="text" name="login" placeholder="login" />
      <input type="text" name="password" placeholder="password" />
      <input type="text" name="name" placeholder="name" />
      <input type="text" name="age" placeholder="age" />
      <input type="text" name="gender" placeholder="gender" />
      <input type="submit"/>
      
      </form>
       </div>
    );
}

export default Dating;
