import React, { Component } from 'react';
import { connect } from "react-redux";
import { postBounty, updateBounty } from "../redux/bounty";
import "../styles/Form.css";

class Form extends Component {
    constructor(props) {
        super(props);
        let { firstName, lastName, bountyAmount, living, type } = props;
        this.state = {
            inputs: {
                firstName: firstName || "",
                lastName: lastName || "",
                bountyAmount: bountyAmount || "",
                living: living || true,
                type: type || "Jedi"
            }
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.clearInputs = this.clearInputs.bind(this);
    }

    handleChange(e) {
        let { name, value, type, checked } = e.target;
        this.setState((prevState) => {
            return {
                inputs: {
                    ...prevState.inputs,
                    [name]: type === "checkbox" ? checked : value
                }
            }
        })
    }

    handleSubmit(e) {
        let { _id, add, postBounty, updateBounty, clear, options } = this.props;
        e.preventDefault();
        if (add) {
            postBounty(this.state.inputs);
        } else {
            updateBounty(this.state.inputs, _id);
            options.toggle();
        }
        if (clear) {
            this.clearInputs();
        }
    }
    clearInputs() {
        this.setState({
            inputs: {
                firstName: "",
                lastName: "",
                bountyAmount: "",
                living: "",
                type: "Jedi"
            }
        })
    }
    render() {
        let { firstName, lastName, bountyAmount, living, type } = this.state.inputs;
        return (
            <div className="form-wrapper">
                <form onSubmit={this.handleSubmit}>
                    <input className="text-input" name="firstName" onChange={this.handleChange} value={firstName} type="text" placeholder="First Name" />
                    <input className="text-input" name="lastName" onChange={this.handleChange} value={lastName} type="text" placeholder="Last Name" />
                    <input className="text-input" name="bountyAmount" max="1000000" onChange={this.handleChange} value={bountyAmount} type="number" placeholder="Bounty Amount" />

                    <div className="other">
                        Living <input onChange={this.handleChange} checked={living} name="living" type="checkbox" />
                        <label htmlFor="">Sith or Jedi? </label>
                        <select onChange={this.handleChange} name="type" id="" value={type}>
                            <option value="Sith">Sith</option>
                            <option value="Jedi">Jedi</option>
                            <option value="Other">Other</option>
                        </select>
                        <button>Submit</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, ({ postBounty, updateBounty }))(Form);
