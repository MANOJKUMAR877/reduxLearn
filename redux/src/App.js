import React, { Component } from "react";
import Checkbox from "./Checkbox";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      checkedItems: new Map(),
      values:{}
    };

    this.handleChange = this.handleChange.bind(this);
  }
  submit=()=>{
    this.setState({values:this.state.checkedItems},console.log(this.state.values))
  }

  handleChange = e => {
    const item = e.target.name;
    const isChecked = e.target.checked;
    this.setState(prevState => ({
      checkedItems: prevState.checkedItems.set(item, isChecked)
    }),()=>{console.log(this.state.checkedItems)});
  };

  deleteCheckboxState = (name, checked) => {
    const updateChecked = typeof checked === "undefined" ? true : false;
    this.setState(prevState => prevState.checkedItems.set(name, updateChecked));
  };

  clearAllCheckboxes = () => {
    const clearCheckedItems = new Map();
    this.setState({ checkedItems: clearCheckedItems });
  };

  render() {
    const checkboxes = [
      {
        name: "Manojkumar",
        key: "checkBox1",
        label: "Check Box 1"
      },
      {
        name: "Hari Krishna",
        key: "checkBox2",
        label: "Check Box 2"
      },
      {
        name: "Baskaran",
        key: "checkBox3",
        label: "Check Box 3"
      },
      {
        name: "Uma",
        key: "checkBox4",
        label: "Check Box 4"
      }
    ];

    const checkboxesToRender = checkboxes.map(item => {
      return (
        <label key={item.key}>
          {item.name}
          <Checkbox
            name={item.name}
            checked={!!this.state.checkedItems.get(item.name)}
            onChange={this.handleChange}
            type="checkbox"
          />
        </label>
      );
    });
    const checkboxesDeleteHandlers = checkboxes.map(item => {
      return (
        <span
          key={item.name}
          onClick={() =>
            this.deleteCheckboxState(
              item.name,
              this.state.checkedItems.get(item.name)
            )
          }
        >
          {item.name} &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        </span>
      );
    });
    return (
      <form className="App" onSubmit={this.submit} >
        {checkboxesToRender}
        <hr />
        {checkboxesDeleteHandlers}
        <button onClick={this.clearAllCheckboxes}>clear all</button>
        <br/>
        <button type="submit"> Submit</button>
      </form>
    );
  }
}

export default App;