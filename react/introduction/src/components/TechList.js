import React, { Component } from 'react'

import TechItem from './TechItem'

class TechList extends Component {
    state = {
        newTech: '',
        techs: []
    }

    // Executed when component show in the screen
    componentDidMount() {
        const techs = localStorage.getItem('techs')

        if (techs) {
            this.setState({ techs: JSON.parse(techs) })
        }
    }

    // Executed always when the component changes or the state
    componentDidUpdate(_, prevState) {
        // this.props, this.state
        if (prevState.techs !== this.state.techs) {
            localStorage.setItem('techs', JSON.stringify(this.state.techs))
        }
    }

    // Executed when component dies
    componentWillUnmount() {}

    handleInputChange = e => {
        this.setState({ newTech: e.target.value })
    }

    handleSubmit = e => {
        e.preventDefault()
        this.setState({
            techs: [...this.state.techs, this.state.newTech],
            newTech: ''
        })
    }

    handleDelete = tech => {
        this.setState({ techs: this.state.techs.filter(t => t !== tech) })
    }

    render() {
        return (
            <>
                <form onSubmit={this.handleSubmit}>
                    <ul>
                        {this.state.techs.map(tech => (
                            <TechItem
                                key={tech}
                                tech={tech}
                                onDelete={() => this.handleDelete(tech)}
                            />
                        ))}
                        {/* <TechItem /> */}
                    </ul>
                    <input
                        type="text"
                        onChange={this.handleInputChange}
                        value={this.state.newTech}
                    />
                    <button type="submit">Add tech</button>
                </form>
            </>
        )
    }
}

export default TechList
