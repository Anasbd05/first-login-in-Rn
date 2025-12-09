import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen
        name="Pokemon"
        options={{
          title: "Pokemons",
          headerBackButtonDisplayMode: "minimal",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="PokemonDetails"
        options={{
          title: "PokemonDetails",
          headerBackButtonDisplayMode: "minimal",
          presentation: "formSheet",
          sheetAllowedDetents: [0.5, 0.7],
        }}
      />
    </Stack>
  );
}
