import React, {useState} from 'react'



const FetchPokemon = () => {

    const [pokemon, setPokemon] =  useState(null);

    const fetchPokemonThen = ()=>{
        fetch("https://pokeapi.co/api/v2/pokemon?limit=1010")
            .then(response=>{
                console.log(response);
                return response.json();

            })
            .then(jsonResponse =>{

                setPokemon(jsonResponse.results);
            })
            .catch(err=>console.log(err));

    }

    return (
        <div>
            <h1> Pokemon demo</h1>
            <button onClick={fetchPokemonThen}>Get these Mon's Yo</button>



            {
                pokemon?
                <div> 

               <h2>{pokemon.map(name =>(
                <div key={name.name}>
                    <p>{name.name}</p>
                </div>
               ))}</h2>
            </div>:
            <h2></h2>


            }
            




        </div>
        
    )
}

export default FetchPokemon