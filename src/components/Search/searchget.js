// import { React, useState } from 'react'
// import data from "./ListData.json";
// import "./Search.css";

// function List(props) {
//     const[total, setTotal]=useState(props.total);
//     const filteredData = total.filter((el) => {
//         //if no input the return the original
//         if (props.input === '') {
//             return el;
//         }
//         //return the item which contains the user input
//         else {
//             return el.text.toLowerCase().includes(props.input)
//         }
//     })
//     return (
//         <ul>
//             {total.map((item) => (
//                 <li key={item.id}>{item.name}</li>
//             ))}
//         </ul>
//     )
// }

// export default List