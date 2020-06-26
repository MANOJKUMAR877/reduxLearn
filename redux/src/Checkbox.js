import React from "react";

class Checkbox extends React.Component {
    render() {
        return (
            <div>
            <input
                type={this.props.type}
                name={this.props.name}
                checked={this.props.checked}
                onChange={this.props.onChange}
            />
            
            </div>
        );
    }
}

export default Checkbox;