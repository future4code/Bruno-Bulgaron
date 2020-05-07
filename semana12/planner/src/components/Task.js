import React from 'react'

export default class Task extends React.Component {
    render() {
        return (
            <div>
                <h4>{this.props.day}</h4>
                <p>{this.props.text}</p>                
            </div>
        )
    }
}