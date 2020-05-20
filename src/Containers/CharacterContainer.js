import React from 'react';
import CharacterSelector from '../Components/CharacterSelector';
import CharacterDetail from '../Components/CharacterDetail';

class CharacterContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            characters: [],
            selectedCharacterName: ""
        };
    }

    componentDidMount() {
        const url = "http://hp-api.herokuapp.com/characters";
        fetch(url) 
        .then(res => res.json())
        .then(characters => this.setState({characters: characters}))
        .catch(err => console.error(err)) 
    }

    render() {
        return (
            <>
            <h1>Characters live here!</h1>
            <CharacterSelector/>
            <CharacterDetail/>
            </>
    
        );
    }
}

export default CharacterContainer;