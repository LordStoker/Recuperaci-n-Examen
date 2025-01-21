import { useEffect, useState } from "react";
import Filter from "../components/Filter";


export default function Characters(){

    const [characters, setCharacters] = useState(() => 
        JSON.parse(sessionStorage.getItem('characters'))?
        JSON.parse(sessionStorage.getItem('characters')) : []);


    useEffect(() => {
        const sessionStorageCharacters = sessionStorage.getItem('characters');
        if(sessionStorageCharacters){
            setCharacters(JSON.parse(sessionStorageCharacters));
        }else{
        fetch('/data/characters.json')
            .then(res => res.json())
            .then(data => {
                setCharacters(data)
                sessionStorageCharacters.setItem('characters', JSON.stringify(data));
            })
        }
    }, []);

    function avgRating(rating){
        const avg = rating / 2;
        return avg;
    }

    function deleteCharacter(id){
        const newCharacters = characters.filter(character => character.id !== id);
        setCharacters(newCharacters);
    }

    function filterCharactersByRating(min, max){
        if(isNaN(min)) min = 0;     
        const minRating = parseFloat(min);
        
        if(isNaN(max)) max = Infinity;  
        const maxRating = parseFloat(max);

        const filteredCharacters = characters.filter(character => {
            const power = parseFloat(character.rating);
            return power >= minRating && power <= maxRating;
        })

        setCharacters(filteredCharacters);
    }

    return(
        <>
        <Filter onFilter={filterCharactersByRating} />
        <section id="grid-characters" className="grid-4">
        {characters.map(character =>
            <article key={character.id} className="dark">
                <img src={`./img/${character.picture}`} alt="Vegeta"/>
                <h3>Name: {character.name}</h3>
                <h4>Planet: {character.planet}</h4>
                <h4>Power: {character.power.toLocaleString()}</h4>
                <div className="rating"><i className={avgRating(character.rating)  >= 1 ? "fa-solid fa-star yellow-star" : "fa-solid fa-star grey-star"}></i>
                                        <i className={avgRating(character.rating)  >= 2 ? "fa-solid fa-star yellow-star" : "fa-solid fa-star grey-star"}></i>
                                        <i className={avgRating(character.rating)  >= 3 ? "fa-solid fa-star yellow-star" : "fa-solid fa-star grey-star"}></i>
                                        <i className={avgRating(character.rating)  >= 4 ? "fa-solid fa-star yellow-star" : "fa-solid fa-star grey-star"}></i>
                                        <i className={avgRating(character.rating)  >= 5 ? "fa-solid fa-star yellow-star" : "fa-solid fa-star grey-star"}></i></div>
                <button onClick= {() => deleteCharacter(character.id)} className="dark">Delete</button>
            </article>
        )}
        </section>
        </> 
    )
}