import React from 'react';
import { ContainerFiltros, BtnFiltro } from '../../styles';
import { connect } from 'react-redux';
import { completeAllTasks } from '../../actions/todos';
import { deleteAllCompleteTasks } from '../../actions/todos';
import { setFilter } from '../../actions/todos';

const Toolbar = (props) => {
    return (
        <ContainerFiltros>
            <button onClick={props.completeAllTasks}>Marcar todas como completas</button>
            <p>Filtros:</p>
            <BtnFiltro onClick={() => props.setFilter('todas')}>Todas</BtnFiltro>
            <BtnFiltro onClick={() => props.setFilter('pendentes')}>Pendentes</BtnFiltro>
            <BtnFiltro onClick={() => props.setFilter('completas')}>Completas</BtnFiltro>
            <div>
                <button onClick={props.deleteAllCompleteTasks}>Remover completas</button>
            </div>
        </ContainerFiltros>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        completeAllTasks: () => dispatch(completeAllTasks()),
        deleteAllCompleteTasks: () => dispatch(deleteAllCompleteTasks()),
        setFilter: (filter) => dispatch(setFilter(filter))
    }
}

export default connect(null, mapDispatchToProps)(Toolbar);