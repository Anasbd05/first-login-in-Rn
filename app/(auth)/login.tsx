import AntDesign from "@expo/vector-icons/AntDesign";
import Entypo from "@expo/vector-icons/Entypo";
import { Link } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import tw from "twrnc";

const login = () => {
  return (
    <View
      style={tw` px-6 flex flex-col bg-white items-center justify-center py-24 `}
    >
      <View style={tw` flex flex-col gap-6 mb-10 items-center `}>
        <Text
          style={tw`text-3xl font-bold text-center capitalize text-emerald-800 `}
        >
          Login here
        </Text>
        <Text style={tw`text-center w-[200px] leading-[20px] font-bold `}>
          Welcome back you&#39;ve been missed!
        </Text>
      </View>
      <View style={tw` flex flex-col  w-full `}>
        <TextInput
          placeholderTextColor={"#808080ff"}
          style={tw`p-4 bg-emerald-100 w-full mb-6 shadow-md rounded-lg placeholder-gray-100`}
          placeholder="Email"
        />
        <TextInput
          placeholderTextColor={"#808080ff"}
          style={tw`p-4 bg-emerald-100 w-full mb-6 shadow-md rounded-lg placeholder-gray-100`}
          placeholder="Password"
        />
        <Link style={tw`font-bold text-right my-6 text-emerald-600`} href={"/"}>
          Forget your password?
        </Link>
      </View>

      <View style={tw` flex flex-col gap-8 mb-8 w-full `}>
        <TouchableOpacity
          style={tw` py-5 w-full shadow-xl shadow-emerald-700 rounded-lg bg-emerald-700`}
        >
          <Text style={tw`font-bold text-center text-white`}>Sign in</Text>
        </TouchableOpacity>
        <Link style={tw`font-bold text-center`} href={"/(auth)/register"}>
          Create new account
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
};

export default login;
