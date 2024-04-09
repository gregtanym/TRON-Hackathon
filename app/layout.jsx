import { AppProvider } from "./Context/store";

export const metadata = {
  title: "NFTicket",
  description: "NFT ticketing service for events",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <AppProvider>
            {children}
        </AppProvider>
      </body>
    </html>
  );
};

export default RootLayout;