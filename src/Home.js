import React, { useState } from "react";

const Home = () => {
  const [lists, setLists] = useState(["Istiak", "Limon"]);

  const addFriend = () => {
    //Write Code Here
  };
  const removeFriend = (e) => {
    // Remove Friend
    console.log(e, "is Clicked");
  };
  return (
    <div>
      <div className="create">
        <h2>Add A Friend</h2>
        <form>
          <label>Friend's Name</label>
          <input type="test" required />
          <button onClick={addFriend}>Add Friend</button>
        </form>
      </div>
      <div className="blog-list">
        {lists.map((list, index) => (
          <div className="blog-preview" key={index}>
            <h2 onClick={() => removeFriend(list)}>{list}</h2>
          </div>
        ))}
        <p style={{ textAlign: "center" }}>Click To Remove Friend</p>
      </div>
    </div>
  );
};

export default Home;
