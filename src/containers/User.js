import React, { Component } from 'react';


function UsersList (props) {
    const users = props.users;
    const userItems = users.map((user) => {
      return(
        <UserItem value={`${user.last_name}, ${user.first_name}`}
                  key={user.id.toString()}
                  setUser={props.setUser.bind(this)}
                  user_id={user.id}/>
      );
    });

    return(
      <ul>
        {userItems}
      </ul>
    );
}

function UserItem(props) {
  return(
    <li onClick={props.setUser.bind(this)} value={props.value} user_id={props.user_id}>{props.value}</li>
  );
}

class User extends Component {
  constructor() {
    super();
  }


  render() {
    return(
      <div>
        <h1>
          Users
        </h1>
        <UsersList users={this.props.users}
                   setUser={this.props.setUser}/>        
      </div>
    );
  }
}

export default User;
