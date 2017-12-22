import React, { Component } from "react"
import { string } from "prop-types"
import { Link } from "react-router-dom"

export default class extends Component {
    static propTypes = {
        name: string.isRequired,
        hairColor: string,
        homeworldName: string.isRequired
    }

    render() {
        return(
            <div>
                <h1>{this.props.name}</h1>
                <p>{this.props.hairColor}</p>
                <Link to="/homeworld">{this.props.homeworldName}</Link>
            </div>
        )
    }
}