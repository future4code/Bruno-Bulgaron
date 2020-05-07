import React from "react";
import { connect } from "react-redux";
import NewTask from "../NewTask/NewTask";
import { getTasks } from '../../actions/tasks';
import Task from "../../components/Task";
import { ContainerSemana, DivDeCadaDia } from './style'

const daysOfTheWeek = ["Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado", "Domingo"]

class Planner extends React.Component {    

    componentDidMount() {
        this.props.getTasks()
    }

    renderTasks = () => {
        const { tasks } = this.props

        return (
            daysOfTheWeek.map((day) => {
                return (
                    <DivDeCadaDia>
                        {day}
                    </DivDeCadaDia>
                )
            })
        )
    }
    
    render() {        
        return (
            <div>
                <NewTask />
                <hr />
                <ContainerSemana>
                    {this.renderTasks()}
                </ContainerSemana>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        tasks: state.task.tasks
    }
}

const mapDispatchToProps = (dispatch) => {  
    return {
        getTasks: () => dispatch(getTasks())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Planner);