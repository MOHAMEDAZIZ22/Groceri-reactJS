import { React, useState } from "react";
import TextField from "@mui/material/TextField";
import List from "./Components/List"
import "./Search.css";
import { React, useState } from 'react'
function App() {
  return (
    <div className="main">
      <h1>React Search</h1>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div>
      <List />
    </div>

    
  );
}

// export default App;
// function List(props) {
//   return (
   
//   )
// }

// export default List

