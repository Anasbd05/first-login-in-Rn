import Feather from "@expo/vector-icons/Feather";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Image,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View,
} from "react-native";
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
  const [shown, setShown] = useState<number>(20);
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    async function fetchPokemons() {
      try {
        setLoading(true);

        // Determine the limit based on search
        const limit = search === "" ? shown : 1000;
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/?limit=${limit}`
        );
        const data = await response.json();

        // Fetch details of each pokemon
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
      } finally {
        setLoading(false);
      }
    }

    fetchPokemons();
  }, [shown, search]);

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

  const filteredPokemons = pokemons.filter(
    (poke) =>
      poke.name.toLowerCase().includes(search.toLowerCase()) ||
      poke.types[0].type.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <ScrollView
      contentContainerStyle={tw` flex flex-col px-5 pb-24 mb-10 bg-white items-center `}
    >
      <View style={tw` flex flex-col gap-2 px-5 mt-16 mb-6 `}>
        <Text style={tw`text-3xl font-bold text-emerald-900`}>Pokemons</Text>
        <Text style={tw`font-semibold text-neutral-700 mb-2`}>
          Search for a Pokemon by name or using its National Pokemon type.
        </Text>
        <View
          style={tw`flex flex-row px-4 gap-3 rounded-xl py-3 items-center bg-gray-100 `}
        >
          <Feather name="search" size={22} color="#646464ff" />
          <TextInput
            onChangeText={(text) => setSearch(text)}
            placeholderTextColor="#646464ff"
            placeholder="Name or type"
            style={[
              tw`w-full`,
              Platform.OS === "web" && { outlineStyle: "none" },
            ]}
            value={search}
          />
        </View>
      </View>

      <View style={tw`flex flex-row flex-wrap gap-5 `}>
        {filteredPokemons.map((pokemon, key) => (
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
              <Text
                numberOfLines={2}
                style={tw`text-xl capitalize font-bold text-center`}
              >
                {pokemon.name}
              </Text>
              <Text style={tw`text-xl text-neutral-800 text-sm text-center`}>
                {pokemon.types[0].type.name}
              </Text>
            </View>
          </Link>
        ))}
      </View>

      {search === "" && (
        <Pressable
          onPress={() => setShown(shown + 6)}
          style={tw`py-2 w-32 flex items-center justify-center mt-8 rounded-lg text-center bg-emerald-700`}
        >
          <Text style={tw`text-white font-semibold`}>
            {loading === true ? "Loading..." : "Show more"}
          </Text>
        </Pressable>
      )}
    </ScrollView>
  );
}
