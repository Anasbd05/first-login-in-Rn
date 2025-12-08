import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";
import tw from "twrnc";
import welcomeImg from "../../assets/images/welcome.png";

export default function Welcome() {
  const router = useRouter();

  return (
    <View
      style={tw` px-6 flex flex-col bg-white items-center justify-center py-24 `}
    >
      <View style={tw` mt-10 `}>
        <Image source={welcomeImg} style={{ width: 390, height: 280 }} />
      </View>
      <View style={tw` flex flex-col gap-5 mt-10 justify-center items-center `}>
        <Text
          style={tw`text-4xl font-bold leading-[48px] text-center capitalize text-emerald-800 `}
        >
          Discover your dream job here
        </Text>
        <Text style={tw` font-medium leading-[24px] text-center `}>
          Explore all the existing job roles based on your interest and study
          major
        </Text>
        <View
          style={tw`flex flex-row items-center mt-8 w-full px-4 gap-8 justify-center`}
        >
          <TouchableOpacity
            onPress={() => router.replace("../login")}
            style={tw` py-3 w-2/4 shadow-lg  rounded-md bg-emerald-700`}
          >
            <Text style={tw`font-semibold text-center text-white`}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.replace("../register")}
            style={tw` w-2/4 text-center font-semibold py-3 rounded-md  `}
          >
            <Text style={tw`font-semibold text-center text-black`}>
              Register
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
