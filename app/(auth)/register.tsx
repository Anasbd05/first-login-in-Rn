import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

export default function register() {
  return (
    <View
      style={tw` px-6 flex flex-col bg-white items-center justify-center py-24 `}
    >
      <View style={tw` flex flex-col gap-6 mb-10 items-center `}>
        <Text
          style={tw`text-3xl font-bold text-center capitalize text-emerald-800 `}
        >
          Create account
        </Text>
        <Text style={tw`text-center font-semibold w-[275px] leading-[20px] `}>
          Create an account so you can explore all the existing jobs
        </Text>
      </View>
      <View style={tw` flex flex-col gap-5 mb-20 w-full `}>
        <TextInput
          placeholderTextColor={"#808080ff"}
          style={tw`p-4 bg-emerald-100 w-full shadow-md rounded-lg placeholder-gray-100`}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor={"#808080ff"}
          style={tw`p-4 bg-emerald-100 w-full shadow-md rounded-lg placeholder-gray-100`}
          placeholder="Password"
        />
        <TextInput
          placeholderTextColor={"#808080ff"}
          style={tw`p-4 bg-emerald-100 w-full shadow-md rounded-lg placeholder-gray-100`}
          placeholder="Confirm Password"
        />
      </View>

      <View style={tw` flex flex-col gap-8 mb-8 w-full `}>
        <TouchableOpacity
          style={tw` py-5 w-full shadow-xl shadow-emerald-700 rounded-lg bg-emerald-700`}
        >
          <Text style={tw`font-bold text-center text-white`}>Sign up</Text>
        </TouchableOpacity>
        <Link style={tw`font-bold text-center`} href={"/(auth)/login"}>
          Already have an account?
        </Link>
      </View>

      <View style={tw` flex flex-col  mt-10 items-center `}>
        <Text style={tw` text-green-500 font-medium text-sm `}>
          Or continue with
        </Text>
        <View style={tw` mt-4 flex flex-row gap-5`}>
          <AntDesign
            name="google"
            size={20}
            color="black"
            style={tw`bg-gray-200 p-1.5 rounded-md `}
          />
          <AntDesign
            name="apple"
            size={20}
            color="black"
            style={tw`bg-gray-200 p-1.5 rounded-md `}
          />
          <Entypo
            name="facebook"
            size={20}
            color="black"
            style={tw`bg-gray-200 p-1.5 rounded-md `}
          />
        </View>
      </View>
    </View>
  );
}
