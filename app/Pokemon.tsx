import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

interface PokemonT {
  name: string;
  image: string;
  imageBack: string;
  types: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export default function Pokemon() {
  const [pokemons, setPokemons] = useState<PokemonT[]>([]);

  useEffect(() => {
    fetchPokemons();
  }, []);

  async function fetchPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=20"
      );
      const data = await response.json();

      // Fecth details of each pokemon
      const detailedPokemons = await Promise.all(
        data.results.map(async (pokemon: any) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
            types: details.types,
          };
        })
      );

      setPokemons(detailedPokemons);
    } catch (error) {
      console.log(error);
    }
  }

  const colorsType: { [key: string]: string } = {
    grass: "#78C850",
    fire: "#F08030",
    water: "#6890F0",
    electric: "#F8D030",
    ice: "#98D8D8",
    fighting: "#C03028",
    poison: "#A040A0",
    ground: "#E0C068",
    flying: "#A890F0",
    psychic: "#F85888",
    bug: "#A8B820",
    rock: "#B8A038",
    ghost: "#705898",
    dragon: "#7038F8",
    dark: "#705848",
    steel: "#B8B8D0",
    fairy: "#EE99AC",
    normal: "#A8A878",
  };

  return (
    <ScrollView contentContainerStyle={tw` p-4 my-10 pb-24 `}>
      <View style={tw`flex flex-row  flex-wrap gap-5`}>
        {pokemons.map((pokemon, key) => (
          <Link
            href={{
              pathname: "/PokemonDetails",
              params: { name: pokemon.name },
            }}
            style={{
              backgroundColor: colorsType[pokemon.types[0].type.name] + 50,
              padding: 4,
              borderRadius: 20,
            }}
            key={key}
          >
            <View style={tw`py-4`}>
              <Image
                source={{ uri: pokemon.image }}
                style={{ width: 150, height: 150 }}
              />
              <Text style={tw`text-2xl font-bold text-center`}>
                {pokemon.name}
              </Text>
              <Text style={tw`text-xl text-neutral-800 -mt-1 text-center`}>
                {pokemon.types[0].type.name}
              </Text>
            </View>
          </Link>
        ))}
      </View>
    </ScrollView>
  );
}
