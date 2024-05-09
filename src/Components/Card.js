import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
    console.log(pokemon);

    // Filter out unique Pokémon based on their names
    const uniquePokemon = pokemon.filter((item, index, self) =>
        index === self.findIndex((t) => t.name === item.name)
    );

    return (
        <>
            {loading ? (
                <h1>Loading...</h1>
            ) : (
                uniquePokemon.map((item) => (
                    <div className="card" key={item.id} onClick={() => infoPokemon(item)}>
                        <h2>{item.id}</h2>
                        <img src={item.sprites.front_default} alt="" />
                        <h2>{item.name}</h2>
                    </div>
                ))
            )}
        </>
    );
};

export default Card;
