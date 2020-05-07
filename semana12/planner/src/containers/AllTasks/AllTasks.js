import React, { Component } from 'react'
import { ContainerTodosOsDias, MinhaUL, ListItem, SegundaFeira, TerçaFeira, QuartaFeira, QuintaFeira, SextaFeira, Sabado, Domingo } from './style';

export default class AllTasks extends Component {
    render() {
        return (
            <div>                
                <ContainerTodosOsDias>
                    {/* <SegundaFeira>
                        <p>Segunda-Feira</p>
                        <MinhaUL>
                            <ListItem>teste</ListItem>
                        </MinhaUL>
                    </SegundaFeira> */}
                </ContainerTodosOsDias>
            </div>
        )
    }
}