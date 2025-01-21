import { useEffect, useState } from "react";
import Filter from "../components/Filter";


export default function Male(){
const [characters, setCharacters] = useState([])
const [maleCharacters, setMaleCharacters] = useState([])

    useEffect(() => {
        fetch('/data/characters.json')
        .then(res => res.json())
        .then(data => setCharacters(data))
    }, [])

    function avgRating(rating){
        const avg = rating / 2;
        console.log(avg)
        return avg;
    }
    function displayMaleCharacters(){
        const maleCharacters = characters.filter(character =>
            character.gender.toLowerCase() === "male"
        )
        setMaleCharacters(maleCharacters)
    }

    function deleteCharacter(id){
        const newCharacters = maleCharacters.filter(character => character.id !== id);
        setMaleCharacters(newCharacters);
    }

    useEffect(() => {
        displayMaleCharacters();
    }, [characters]);

    


    return(
        <>
            <Filter />
            <section id="grid-characters" className="grid-4">
            {maleCharacters.map(character =>
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
                    <button onClick={ () => deleteCharacter(character.id)}className="dark">Delete</button>
                </article>
            )}
            </section>
        </>
    )
}
