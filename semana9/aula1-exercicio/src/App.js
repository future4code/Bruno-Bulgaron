import React from 'react';
import { Provider } from 'react-redux';
import { Container, Title } from './styles';
import { createStore } from 'redux';
import { rootReducer } from './reducers';
import TaskForm from './components/TaskForm/TaskForm';
import TaskList from './components/TaskList/TaskList';
import Toolbar from './components/Toolbar/Toolbar';

const store = createStore(rootReducer)

export default function App() {
    return (
        <Provider store={store}>
            <Container>
                <Title>Planner</Title>      
                <TaskForm />
                <TaskList />
                <Toolbar />
            </Container>
        </Provider>        
    )
}