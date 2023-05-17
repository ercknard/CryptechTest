import "@styles/globals.css";

export const metadata = {
  title: "CryptechTest",
  description: "Cryptech Test SMP Server and Cryptech Test Game",
  keywords: "Minecraft, Cryptocurrency, BTC, ETH, MRX, SEND, OHMC, SCC",
  author: "Ercknard Guren I",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <head>
      <link rel="icon" href="/assets/images/pack.png" />
    </head>
    <body>
          {children}
    </body>
  </html>
);

export default RootLayout;
