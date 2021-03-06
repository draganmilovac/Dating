import React from "react";
import UserItem from "./userItem";

const UserList = (props) => {
  return (
    <div className="container mt-5">
      <div className="row row-cols-1 row-cols-md-6">
        {props.users.map((user) => (
          <UserItem
            id={user.id}
            photoUrl={user.photoUrl}
            knownAs={user.knownAs}
            age={user.age}
            introduction={user.introduction}
          />
        ))}
      </div>
    </div>
  );
};

export default UserList;
