import React from 'react';
import { Ul } from '../../styles';
import { connect } from 'react-redux';
import { toggleTask } from '../../actions/todos';
import { deleteTask } from '../../actions/todos';

class TaskList extends React.Component {
    render() {
        console.log(this.props.taskList)
        return (
            <Ul>
                {this.props.taskList.filter((task) => {
                    const filter = this.props.filter
                    if(filter === 'todas') {
                        return true
                    }
                    
                    if(filter === 'pendentes') {
                        return task.completed === false
                    }
                    
                    if(filter === 'completas') {
                        return task.completed === true
                    }
                    
                    return true //se não for nenhum dos 3 acima
                }).map(task => {
                    return (
                    <li key={task.id} onClick={() => {this.props.toggleTask(task.id)}}>
                        {task.text} - 
                        Completa: {String(task.completed)} <button onClick={() => {this.props.deleteTask(task.id)}}>Deletar</button>
                    </li>
                    )
                })}
            </Ul>
        )
    }    
}

const mapStateToProps = (state) => {
    return {
        taskList: state.todos.todosList,
        filter: state.todos.filter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        toggleTask: (id) => dispatch(toggleTask(id)),
        deleteTask: (id) => dispatch(deleteTask(id))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TaskList);