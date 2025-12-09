import React, { useState } from "react";
import Pokemon from "./(tabs)/Pokemon";
import Onboard from "./Onboard";

export default function Index() {
  const [showOnboard, setShowOnboard] = useState(true);

  return <>{showOnboard === false ? <Onboard /> : <Pokemon />}</>;
}
