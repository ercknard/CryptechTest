import AllScripts from "@components/materials/Scripts";
import MainPage from "@components/sections/MainPage";
import "@styles/globals.css";
import "@styles/AOS.css";
import "@styles/animations.css";
import "@styles/fireflies.css";

export const metadata = {
title: "CryptechTest",
description: "CryptechTest SMP",
keywords: "Minetest, CryptechTest, Cryptocurrency, BTC, ETH, MRX, SEND, OHMC, SCC",
author: "Ercknard Guren I",
chartset: "UTF-8",
};

const RootLayout = ({ children }) => (
<html lang='en'>
   <head>
      <AllScripts />
      <link rel="icon" href="/assets/images/pack.png" />
   </head>
   <body>
      <MainPage />
      {children}
   </body>
</html>
);

export default RootLayout;
