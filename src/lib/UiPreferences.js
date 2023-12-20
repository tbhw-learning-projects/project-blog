"use client";
import React from "react";

import { MotionConfig } from "framer-motion";

export default function UiPreferences({ children }) {
//   const [mode, setMode] = React.useState(modeProp);

//   const toggleMode = React.useCallback(() => {
//     setMode(previous => previous === "light" ? "dark" : "light");
//   }, [])

  return (
    <MotionConfig reducedMotion="user">
      {children}
    </MotionConfig>
  );
}
