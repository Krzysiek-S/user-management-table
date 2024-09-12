import { ReactNode } from "react";
import { Providers } from "./providers/Providers";

import "./globals.css";

export const metadata = {
  title: "User Management App",
  description: "A simple user management application",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
