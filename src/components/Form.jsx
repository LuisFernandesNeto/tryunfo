import React from 'react';
import PropTypes from 'prop-types';

class Form extends React.Component {
  render() {
    const { cardName, cardDescription, cardAttr1, cardAttr2, cardAttr3,
      cardImage, cardRare, cardTrunfo, hasTrunfo,
      isSaveButtonDisabled, onInputChange, onSaveButtonClick } = this.props;
    return (
      <form action="">
        Card Name:
        <input
          name="cardName"
          type="text"
          data-testid="name-input"
          value={ cardName }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        Card Description:
        <textarea
          name="cardDescription"
          data-testid="description-input"
          value={ cardDescription }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        {' '}
        Atributo1:
        <input
          name="cardAttr1"
          type="number"
          data-testid="attr1-input"
          value={ cardAttr1 }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        Atributo2:
        <input
          name="cardAttr2"
          type="number"
          data-testid="attr2-input"
          value={ cardAttr2 }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        {' '}
        Atributo3:
        <input
          name="cardAttr3"
          type="number"
          data-testid="attr3-input"
          value={ cardAttr3 }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        Imagem:
        <input
          name="cardImage"
          type="text"
          data-testid="image-input"
          value={ cardImage }
          onChange={ onInputChange }
        />
        {' '}
        <br />
        <select
          name="cardRare"
          data-testid="rare-input"
          value={ cardRare }
          onChange={ onInputChange }
        >
          <option value="normal">normal</option>
          <option value="raro">raro</option>
          <option value="muito raro">muito raro</option>
        </select>
        {' '}
        <br />
        { hasTrunfo ? <p>Você já tem um Super Trunfo em seu baralho</p> : <input
          name="cardTrunfo"
          type="checkbox"
          data-testid="trunfo-input"
          checked={ cardTrunfo }
          onChange={ onInputChange }
        /> }

        Super Trybe Trunfo
        {' '}
        <br />
        <button
          name="isSaveButtonDisabled"
          type="button"
          data-testid="save-button"
          disabled={ isSaveButtonDisabled }
          onClick={ onSaveButtonClick }
        >
          Salvar

        </button>
      </form>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
