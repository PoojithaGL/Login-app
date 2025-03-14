// import React from "react";
// import Counter from "./counter";
// function Counters(){
//     const users = [
//         { id: 1, value: 0 },
//         { id: 2, value: 0 },
//         { id: 3, value: 0 }
//     ];
//    function handleDelete(props){
//     console.log("event Handler called");
//    }
//         return (
//             <div>
//            {users.map(user => (
//                 <li key={user.id} onDelete={handleDelete}>{user.value}</li> // Using "id" as the key
//             ))}
//         </div>
       
// }


// export default Counters;


// import React from "react";

// function Counters() {
//   const users = [
//     { id: 1, value: 0 },
//     { id: 2, value: 0 },
//     { id: 3, value: 0 }
//   ];

//   function handleDelete(CounterId) {
//     console.log("event handler called",CounterId);
//   }

//   return (
//     <div>
//       <ul>{users.map(user => (
//           <li key={user.id}>{user.value}  <button 
//               onClick={function() { handleDeleteClick(user); }}
//               className="btn btn-danger btn-sm m-2">
//               Delete
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// export default Counters;