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
    savedCards: [],
    hasTrunfo: false,
  };

    onInputChange = ({ target }) => {
      const { name } = target;
      const value = (target.type === 'checkbox') ? target.checked : target.value;
      this.setState({
        [name]: value,
      }, () => {
        const { cardName, cardDescription, cardAttr1,
          cardAttr2, cardAttr3, cardImage, cardRare } = this.state;
        const maxTotalValue = 210;
        const maxIndividualValue = 90;
        const minimumValue = 0;
        const condition1 = cardName.length > 0
         && cardDescription.length > 0
          && cardImage.length > 0 && cardRare.length > 0;

        const condition2 = Number(cardAttr1)
         + Number(cardAttr2) + Number(cardAttr3) <= maxTotalValue;

        const condition3 = Number(cardAttr1) <= maxIndividualValue
         && Number(cardAttr2) <= maxIndividualValue
         && Number(cardAttr3) <= maxIndividualValue;

        const condition4 = Number(cardAttr1) >= minimumValue
         && Number(cardAttr2) >= minimumValue && Number(cardAttr3) >= minimumValue;

        const finalCondition = condition1 && condition2 && condition3 && condition4;
        if (finalCondition) {
          this.setState({ isSaveButtonDisabled: false });
        } else {
          this.setState({ isSaveButtonDisabled: true });
        }
      });
    }

    onSaveButtonClick = (event) => {
      event.preventDefault();
      const { cardName, cardDescription, cardAttr1,
        cardAttr2, cardAttr3, cardImage, cardRare, cardTrunfo, savedCards } = this.state;
      const card = { cardName,
        cardDescription,
        cardAttr1,
        cardAttr2,
        cardAttr3,
        cardImage,
        cardRare,
        cardTrunfo };
      let trunfoTrue = false;
      if (cardTrunfo) {
        trunfoTrue = true;
      }
      const cards = savedCards;
      cards.push(card);

      this.setState({
        savedCards: cards,
      }, () => {
        this.setState({ cardName: '',
          cardDescription: '',
          cardAttr1: '0',
          cardAttr2: '0',
          cardAttr3: '0',
          cardImage: '',
          cardRare: '',
          cardTrunfo: false,
          isSaveButtonDisabled: true,
          hasTrunfo: trunfoTrue });
      });
    }

    render() {
      const { savedCards } = this.state;

      return (

        <div>
          <h1>Tryunfo</h1>
          <Form
            { ...this.state }
            onSaveButtonClick={ this.onSaveButtonClick }
            onInputChange={ this.onInputChange }
          />
          <Card { ...this.state } onInputChange={ this.onInputChange } />
          {savedCards
            .map((card, index) => (<Card
              key={ index }
              cardName={ card.cardName }
              cardDescription={ card.cardDescription }
              cardAttr1={ card.cardAttr1 }
              cardAttr2={ card.cardAttr2 }
              cardAttr3={ card.cardAttr3 }
              cardImage={ card.cardImage }
              cardRare={ card.cardRare }
              cardTrunfo={ card.cardTrunfo }
            />))}
        </div>
      );
    }
}

export default App;
