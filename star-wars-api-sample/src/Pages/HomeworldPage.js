import React, { Component } from "react"
import { string } from "prop-types"
import { Link } from "react-router-dom"
//Could just do this like PersonPage
class HomeworldPage extends Component {
    static propTypes = {
        name: string.isRequired
    }


    render(){
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>Diameter: {this.props.diameter}</p>
                <Link to="/homeworld">{this.props.homeworldName}</Link>
            </div>
        )
    }
}

export default HomeworldPage