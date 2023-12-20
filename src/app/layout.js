import React from "react";
import { Work_Sans, Spline_Sans_Mono } from "next/font/google";
import clsx from "clsx";

import { LIGHT_TOKENS, DARK_TOKENS, BLOG_TITLE } from "@/constants";

import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./styles.css";
import StyledComponentsRegistry from "@/lib/registry";
import UiPreferences from "@/lib/UiPreferences";
import { cookies } from "next/headers";

const mainFont = Work_Sans({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family",
});
const monoFont = Spline_Sans_Mono({
  subsets: ["latin"],
  display: "fallback",
  weight: "variable",
  variable: "--font-family-mono",
});

export const metadata = {
  title: BLOG_TITLE,
  description: "A wonderful blog about JavaScript",
};

function RootLayout({ children }) {
  const mode = cookies().get("color-mode")?.value ?? "light";

  return (
    <html
      lang="en"
      className={clsx(mainFont.variable, monoFont.variable)}
      data-color-theme={mode}
      style={mode === "light" ? LIGHT_TOKENS : DARK_TOKENS}
    >
      <body>
        <UiPreferences >
          <StyledComponentsRegistry>
            <Header theme={mode} />
            <main>{children}</main>
            <Footer />
          </StyledComponentsRegistry>
        </UiPreferences>
      </body>
    </html>
  );
}

export default RootLayout;
