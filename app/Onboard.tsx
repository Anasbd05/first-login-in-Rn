import { useRouter } from "expo-router";
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import AppIntroSlider from "react-native-app-intro-slider";
import tw from "twrnc";
import colors from "../assets/colors/colors";
const data = [
  {
    title: "Save time by tracking your studies",
    text: "Schedule your classes, assignments, quizes and more",
    image: require("../assets/images/Onboard1.png"),
  },
  {
    title: "Stay on top of your eduction",
    text: "Reduce your stress, increase your productivity",
    image: require("../assets/images/Onboard2.png"),
  },
  {
    title: "Spend more time doing the things you love",
    text: "Get started within five minutes",
    image: require("../assets/images/Onboard3.png"),
  },
];
export default function Onboard() {
  const navigate = useRouter();

  const renderItem = ({ item }: any) => {
    return (
      <View style={tw` flex-1 items-center justify-center bg-white `}>
        <Image style={tw` m-16 `} source={item.image} />
        <View>
          <Text style={tw` text-2xl font-bold mx-14 text-black text-center `}>
            {item.title}
          </Text>
          <Text
            style={tw`text-sm font-semibold text-gray-500 mx-14 mt-5 text-center  `}
          >
            {item.text}
          </Text>
        </View>
      </View>
    );
  };

  const keyExtractor = (item: { title: any }) => item.title;

  const renderDoneButton = () => {
    return (
      <TouchableOpacity
        onPress={() => navigate.replace("/(auth)/Welcome")}
        style={tw` mr-2 justify-center items-center `}
      >
        <Text style={tw` text-emerald-800 font-bold text-sm `}>Done</Text>
      </TouchableOpacity>
    );
  };
  const renderNextButton = () => {
    return (
      <View style={tw` mr-2  justify-center items-center `}>
        <Text style={tw` text-emerald-600 font-semibold text-sm `}>Next</Text>
      </View>
    );
  };
  const renderPrevButton = () => {
    return (
      <View style={tw` ml-2 justify-center items-center `}>
        <Text style={tw` text-emerald-600 font-semibold text-sm`}>Prev</Text>
      </View>
    );
  };

  return (
    <View style={{ flex: 1 }}>
      <StatusBar translucent backgroundColor="transparent" />
      <AppIntroSlider
        keyExtractor={keyExtractor}
        renderItem={renderItem}
        renderDoneButton={renderDoneButton}
        renderNextButton={renderNextButton}
        renderPrevButton={renderPrevButton}
        showPrevButton
        dotStyle={styles.dotestyles}
        activeDotStyle={styles.Activedotestyles}
        data={data}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  dotestyles: {
    backgroundColor: colors.blueFaded,
    marginBottom: 26,
  },
  Activedotestyles: {
    backgroundColor: colors.blue,
    marginBottom: 26,
  },
});
