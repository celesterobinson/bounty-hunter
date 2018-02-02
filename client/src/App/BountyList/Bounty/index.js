import React, { Component } from 'react';
import { connect } from "react-redux";
import { deleteBounty } from "../../redux/bounty";
import Form from "../../shared/Form";
import "../../styles/Bounty.css";

class Bounty extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false
        }
        this.toggleEdit = this.toggleEdit.bind(this);
    }
    toggleEdit() {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    render() {
        let style = {color: "green"}
        let { firstName, lastName, bountyAmount, living, type, _id, deleteBounty } = this.props;
        if (this.state.isEditing) {
            return (
                <div>
                    <h1>Edit Bounty</h1>
                    <Form {...this.props} options={{toggle: this.toggleEdit }}/>
                    <button onClick={this.toggleEdit}>Cancel</button>
                </div>
            )
        }
        return (
            
            <div className="bounty">
                <h1>{firstName} {lastName}</h1>
                <h2 style={style}>REWARD: ${bountyAmount}</h2>
                <h3>STATUS: {living ? "ALIVE" : "TERMINATED"}</h3>
                <h3>TYPE: {type}</h3>
                <button onClick={this.toggleEdit}>EDIT</button>
                <button className="delete" onClick={() => deleteBounty(_id)}>DELETE</button>
            </div>
        )
    }
}

export default connect(null, { deleteBounty })(Bounty);
