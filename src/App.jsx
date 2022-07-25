import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

class App extends React.Component {
  state = {
    cardName: '',
    cardDescription: '',
    cardAttr1: '',
    cardAttr2: '',
    cardAttr3: '',
    cardImage: '',
    cardRare: '',
    cardTrunfo: false,
    isSaveButtonDisabled: true,
  };

    onInputChange = ({ target }) => {
      const { name, value } = target;
      this.setState({
        [name]: value,
      });
    }

    render() {
      return (
        <div>
          <h1>Tryunfo</h1>
          <Form { ...this.state } onInputChange={ this.onInputChange } />
          <Card { ...this.state } onInputChange={ this.onInputChange } />
        </div>
      );
    }
}

export default App;
