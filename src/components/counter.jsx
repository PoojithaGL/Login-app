// import React, { Component } from 'react';
//     state = {
//         count : 5,
//         tags : ["tag1","tag2","tag3"],
//     };
  
//     render() { 

//         return (  
//         <div>
         
//             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button className='but but-secondary btn-sm'>Increment</button>
//         <ul>
//             {this.state.tags.map(tag =><li key={tag}>{tag}</li>)}
//         </ul>
//         </div>
//         );
//     }
//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count) === 0 ? "warning" : "primary";
//         return classes;
//     }

// formatCount(){
//     const {count} = this.state;
//     return count ===0 ? "zero":count;
// }
// }


// import React, { Component } from 'react';

// class Counter extends Component {
  
//     state = {
//         count : 0,
//     };
  //   constructor() {
  //     super();
  //     this.handleIncrement = this.handleIncrement.bind(this); // Binding the method to this
  // }
    // handleIncrement=()=>{
    //   // console.log("Increment clicked",this.state.count);
    //   this.setState({ count: this.state.count + 1 });
    // }


    //    handleIncrement= product =>{
    //    console.log(product);
    //   this.setState({ count: this.state.count + 1 });
    // }

    // doHandleIncrement(){
    //   this.handleIncrement({id:1});
    // }
  
//     render() { 
    

//         return (  
//         <div>
         
//             <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
//         <button onClick = {this.handleIncrement}
//         className='but but-secondary btn-sm'>
//           Increment
//           </button>
//         </div>
//         );
//     }
//     getBadgeClasses() {
//         let classes = "badge m-2 badge-";
//         classes += (this.state.count) === 0 ? "warning" : "primary";
//         return classes;
//     }

// formatCount(){
//     const {count} = this.state;
//     return count ===0 ? "zero":count;
// }
// }


// export default Counter;

// import React, { useState } from 'react';

// function Counter() {
//   const [data, setData] = useState({
//     count: 5,
//     tags: ["js","Python","Java","c"]
//   });

 
//  function renderTags () {
//     if (data.tags.length === 0) return <p>there are no tags</p>;
//     return <ul>{data.tags.map(tag => <li key={tag}>{tag}</li>)}</ul>;
//   };

//   return (
//     <div>
//       {data.tags.length === 0 && "Please create a new tag!"}
      
//       <ul>
//         {data.tags.map(tag => <li key={tag}>{tag}</li>)}
//       </ul>
//     </div>
//   );
// }

// export default Counter;



// import React, { Component } from 'react';

// class Counter extends Component {
  
//     state = {
//        count : 0,
//     };
// handleStart(){
//     this.setState({ count: this.state.count + 1 })
// }

// handleStop(){

// }
// render() {
//   return (
//     <div>
//       <h1>Timer: {this.state.count} seconds</h1>
//       <button onClick={this.handleStart}>Start</button>
//       <button onClick={this.handleStop}>Stop</button>
//     </div>
//   );
// }
// }
// export default Counter;




import React, { useState } from "react";
// import Counter from "./Counter"
function CreateCounter() {
  const [state, setState] = useState({ count: 4, theme: "red" });
  const count = state.count;
  const theme = state.theme;

  function handleStart() {
    setState(prevState => ({
      ...prevState,
      count: prevState.count + 1
    }));
  }

  function handleStop() {
    setState(prevState => ({
      ...prevState,
      count: prevState.count - 1
    }));
  }

   function handleDelete(){

   }
  return (
    <div>
      <span>Timer: {count} seconds</span>
      <span> {theme}</span><br/>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button> <br/>
      <button onClick={handleDelete} className="btn btn-danger btn-sm m-2">Delete</button>
    </div>
  );
}

export default CreateCounter;



