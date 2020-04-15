import React from 'react';
import { Input, BtnAdd } from '../../styles';
import { connect } from 'react-redux';
import { addTask } from '../../actions/todos';

class TaskForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            inputText: ''
        }
    }

    onChangeInput = (event) => {
        this.setState({
            inputText: event.target.value
        })
    }
    
    onClickAdicionar = (event) => {
        event.preventDefault()
        this.props.addTask(this.state.inputText)
        this.setState({
            inputText: ''
        })
    }
    
    render() {
        return (
            <form>
                <Input 
                type="text"
                placeholder="O que tem que ser feito?"
                value={this.state.inputText}
                onChange={this.onChangeInput}
                >
                </Input>
                <BtnAdd onClick={this.onClickAdicionar}>Adicionar</BtnAdd>
            </form>
        )
    }
}

const mapStateToProps = state => {
    return {}
}

const mapDispatchToProps = dispatch => {
    return {
        addTask: (text) => dispatch(addTask(text))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
    )
(TaskForm);