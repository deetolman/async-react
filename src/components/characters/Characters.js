import React, { PureComponent } from 'react';
// import PropTypes from 'prop-types';
import { getCharacters } from '../../services/rickAndMortyApi';
import Character from '../characters/Character';

export default class Characters extends PureComponent {
  state = {
    characters: []

  };
  componentDidMount() {
    getCharacters()
      .then(response => {
        this.setState({ characters: response.results });

      });
  }
  render() {
    const characters = this.state.characters.map(character => {
      return (
        <Character key={character.name} character={character} />
      );
    });
    return (
      <table>
        <tbody>
          {characters}
        </tbody>
      </table>    
    );
  }  
}