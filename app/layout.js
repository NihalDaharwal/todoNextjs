import { ContextProvider } from "@/components/Clients";
import "../styles/app.scss";
import Header from "./header";

export const metadata = {
  title: "todo app",
  description: "this is todo app learning next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ContextProvider>
          <>
            <Header />
            {children}
          </>
        </ContextProvider>
      </body>
    </html>
  );
}
