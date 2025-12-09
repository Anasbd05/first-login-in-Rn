import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import tw from "twrnc";

interface DetailsType {
  sprites: any;
  id: number;
  height: number;
  weight: number;
  base_experience: number;
}

export default function PokemonDetails() {
  const [pokeDetails, setPokeDetails] = useState<DetailsType[]>([]);

  useEffect(() => {
    fetchDetails();
  });

  const fetchDetails = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      setPokeDetails([data]);
    } catch (error) {
      console.log(error);
    }
  };

  const { name } = useLocalSearchParams();
  const router = useRouter();
  return (
    <ScrollView
      contentContainerStyle={tw` flex bg-[#ECF4E8] rounded-lg  flex-col gap-4 px-4 py-8 h-full `}
    >
      {pokeDetails.map((detail, key) => (
        <View key={key}>
          <View style={tw`flex flex-row items-start gap-20 `}>
            <MaterialIcons
              onPress={() => router.back()}
              name="keyboard-backspace"
              style={tw`mt-1.5`}
              size={28}
              color="black"
            />
            <View style={tw`flex flex-col `}>
              <Text
                style={tw`text-3xl text-emerald-900 text-center font-bold `}
              >
                {name}
              </Text>
              <Text style={tw`font-bold text-gray-500 text-center`}>
                00{detail.id}
              </Text>
            </View>
          </View>

          <View style={tw` flex flex-col gap-2 mt-12`}>
            <View style={tw` flex flex-row gap-2`}>
              <Text style={tw` font-semibold text-xl text-neutral-800 `}>
                Base Experience:
              </Text>
              <Text style={tw` font-bold text-xl text-emerald-900 `}>
                {detail.base_experience}
              </Text>
            </View>
            <View style={tw` flex flex-row gap-2`}>
              <Text style={tw` font-semibold text-xl text-neutral-800 `}>
                Weight:
              </Text>
              <Text style={tw` font-bold text-xl text-emerald-900 `}>
                {detail.weight}
              </Text>
            </View>
            <View style={tw` flex flex-row gap-2`}>
              <Text style={tw` font-semibold text-xl text-neutral-800 `}>
                Height:
              </Text>
              <Text style={tw` font-bold text-xl text-emerald-900 `}>
                {detail.height}
              </Text>
            </View>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}
