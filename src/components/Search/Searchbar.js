import React, { Component } from "react";
import ReactSearchBox from "react-search-box";

const Data = [
  {
    key: "john",
    value: "John Doe",
  },
  {
    key: "jane",
    value: "Jane Doe",
  },
  {
    key: "mary",
    value: "Mary Phillips",
  },
  {
    key: "robert",
    value: "Robert",
  },
  {
    key: "karius",
    value: "Karius",
  },
];

export default function Search() {
  return (
    <div>
      <ReactSearchBox
        placeholder="Placeholder"
        value="Doe"
        Data={this.Data}
        callback={(record) => console.log(record)}
      />
    </div>
  );
}
