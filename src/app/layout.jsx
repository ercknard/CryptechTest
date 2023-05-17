import "@styles/globals.css";

export const metadata = {
  title: "CryptechTest",
  description: "Cryptech Test SMP Server and Cryptech Test Game",
};

const RootLayout = ({ children }) => (
  <html lang='en'>
    <body>
          {children}
    </body>
  </html>
);

export default RootLayout;
