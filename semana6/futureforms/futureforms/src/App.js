import React from 'react';
import './App.css';
import Etapa1 from './Components/Etapa1/Etapa1';
import Etapa2 from './Components/Etapa2/Etapa2';
import Etapa3 from './Components/Etapa3/Etapa3';
import Etapa4 from './Components/Etapa4/Etapa4';

class App extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        etapa: 0
      }
  }
  
  mudaEtapa = () => {
      let proximaEtapa = this.state.etapa + 1
      this.setState({ etapa: proximaEtapa })
  }

     
  render() {
    let etapaAtual

    switch(this.state.etapa){
      case 0:
        etapaAtual = <Etapa1 />
        break
      case 1:
        etapaAtual = <Etapa2 />
        break
      case 2:
        etapaAtual = <Etapa3 />
        break
      case 3:
        etapaAtual = <Etapa4 />
        break
    }

   
    return (      
      <div className="App">
        {etapaAtual}
        <button onClick={this.mudaEtapa}>Próxima Etapa</button>
      </div>
    )
  }    
}

export default App;
