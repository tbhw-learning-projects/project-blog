"use client"
import React from 'react'

import { MotionConfig } from "framer-motion";

export default function MaybeReduceMotion({children}) {
    return <MotionConfig reducedMotion="user">{children}</MotionConfig>
}
