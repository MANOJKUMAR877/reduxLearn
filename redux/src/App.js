import React, { Component } from "react";
    import Checkbox from "./Checkbox";

    class App extends Component {
        constructor(props) {
            super(props);

            this.state = {
                checkedItems: new Map()
            };

            this.handleChange = this.handleChange.bind(this);
        }

        handleChange = e => {
            const item = e.target.name;
            const isChecked = e.target.checked;
            this.setState(prevState => ({
                checkedItems: prevState.checkedItems.set(item, isChecked)
            }));
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
                    name: "check-box-1",
                    key: "checkBox1",
                    label: "Check Box 1"
                },
                {
                    name: "check-box-2",
                    key: "checkBox2",
                    label: "Check Box 2"
                },
                {
                    name: "check-box-3",
                    key: "checkBox3",
                    label: "Check Box 3"
                },
                {
                    name: "check-box-4",
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

            return (
                <div className="App">
                    {checkboxesToRender}
                    <hr /> 
                    <button onClick={this.clearAllCheckboxes}>clear all</button>
                </div>
            );
        }
    }

    export default App;