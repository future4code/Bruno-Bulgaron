import React, { Component } from 'react'
import { ContainerTodosOsDias, MinhaUL, ListItem, SegundaFeira, TerçaFeira, QuartaFeira, QuintaFeira, SextaFeira, Sabado, Domingo } from './style';

export default class AllTasks extends Component {
    render() {
        return (
            <div>                
                <ContainerTodosOsDias>
                    <SegundaFeira>
                        <p>Segunda-Feira</p>
                        <MinhaUL>
                            <ListItem>teste</ListItem>
                        </MinhaUL>
                    </SegundaFeira>
                    
                    <TerçaFeira>
                        <p>Terça-Feira</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </TerçaFeira>
                    
                    <QuartaFeira>
                        <p>Quarta-Feira</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </QuartaFeira>
                   
                    <QuintaFeira>
                        <p>Quinta-Feira</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </QuintaFeira>
                    
                    <SextaFeira>
                        <p>Sexta-Feira</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </SextaFeira>
                    
                    <Sabado>
                        <p>Sabado</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </Sabado>
                    
                    <Domingo>
                        <p>Domingo</p>
                        <MinhaUL>
                            
                        </MinhaUL>
                    </Domingo>
                </ContainerTodosOsDias>
            </div>
        )
    }
}