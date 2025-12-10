/* eslint-disable react-hooks/exhaustive-deps */
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, Text, View } from "react-native";
import tw from "twrnc";

interface DetailsType {
  sprites: any;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
}

export default function PokemonDetails() {
  const { name } = useLocalSearchParams();
  const router = useRouter();
  const [pokeDetails, setPokeDetails] = useState<DetailsType | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchDetails = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${name}`
        );
        const data = await response.json();
        setPokeDetails(data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    fetchDetails();
  }, []);

  const stats = [
    {
      label: "Base Experience",
      value: pokeDetails?.base_experience,
    },
    {
      label: "Weight",
      value: pokeDetails?.weight,
    },
    {
      label: "Height",
      value: pokeDetails?.height,
    },
  ];

  return (
    <ScrollView
      contentContainerStyle={tw` flex bg-[#ECF4E8] rounded-lg flex-col gap-4 px-4 py-8 h-full `}
    >
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <View>
          <View style={tw`flex flex-row mb-6 items-start gap-4 justify-center`}>
            <MaterialIcons
              onPress={() => router.back()}
              name="keyboard-backspace"
              size={28}
              color="black"
            />
            <View style={tw`flex flex-col flex-1 items-center`}>
              <Text
                style={tw`text-2xl text-emerald-900 text-center font-bold`}
                numberOfLines={2}
              >
                {name}
              </Text>
              <Text style={tw`font-bold text-gray-500 text-center mt-1`}>
                #{pokeDetails?.id}
              </Text>
            </View>
          </View>

          <View
            style={tw` bg-[#5A9CB550] h-[200px] rounded-xl justify-center flex items-center`}
          >
            <Image
              source={{ uri: pokeDetails?.sprites.front_default }}
              style={tw`h-full w-[230px]`}
            />
          </View>

          <View style={tw` flex flex-col gap-4 mt-12`}>
            {stats.map((stat, key) => (
              <View
                key={key}
                style={tw` flex flex-row gap-2 justify-between shadow-sm rounded-lg p-3 bg-emerald-100`}
              >
                <Text style={tw` font-semibold text-xl text-neutral-800`}>
                  {stat.label} :
                </Text>
                <Text style={tw` font-bold text-xl text-emerald-900`}>
                  {stat.value}
                </Text>
              </View>
            ))}
          </View>
        </View>
      )}
    </ScrollView>
  );
}
