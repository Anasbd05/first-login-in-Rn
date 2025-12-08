import Onboard from "@/components/Onboard";
import React, { useState } from "react";
import Welcome from "./(auth)/Welcome";

export default function Index() {
  const [showOnboard, setShowOnboard] = useState(true);

  return <>{showOnboard ? <Onboard /> : <Welcome />}</>;
}
