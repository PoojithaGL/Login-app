// import React from "react";
// function CreateCounter(){
//     let count = 10;

// function handleStart(){
//   count++;
//   console.log(count);

// }
// function handleStop(){
//   count++;
//   console.log(count);
// }
//     return (
//         <div>
//           <h1>Timer: {count} seconds</h1>
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handleStop}>Stop</button>
//         </div>
//       );
// }
// export default CreateCounter;


// import React, { useState } from "react";
// function CreateCounter(){
//     // let count = 10;
//     const[count,setCount] = useState(0);

// function handleStart(){
 
//   setCount(prevCount => prevCount + 1); 
//   console.log(count + 1);

// }
// function handleStop(){
   
//   setCount(prevCount => prevCount - 1); 
//   console.log(count - 1);
// }
//     return (
//         <div>
//           <span>Timer: {count} seconds</span><br></br>
//           <button onClick={handleStart}>Start</button>
//           <button onClick={handleStop}>Stop</button>
//         </div>
//       );
// }
// export default CreateCounter;


// import React from "react"
// function List(){
//   const fruits = ["apple","mango","pineapple"];
//   const listItems = fruits.map(fruits =><li>{fruits}</li>)
//   return(<ol>{listItems}</ol>)
// }
// export default List


// import React from "react";

// function UserList() {
//     const users = [
//         { id: 1, name: "Alice" },
//         { id: 2, name: "Bob" },
//         { id: 3, name: "Charlie" }
//     ];

//     return (
//         <ul>
//             {users.map(user => (
//                 <li key={user.id}>{user.name}</li> // Using "id" as the key
//             ))}
//         </ul>
//     );
// }

// export default UserList;