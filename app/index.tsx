import React, { useState } from "react";
import Onboard from "./Onboard";
import Pokemon from "./Pokemon";

export default function Index() {
  const [showOnboard, setShowOnboard] = useState(true);

  return <>{showOnboard === false ? <Onboard /> : <Pokemon />}</>;
}
