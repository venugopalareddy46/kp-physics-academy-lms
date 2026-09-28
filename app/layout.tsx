import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "KP Physics Academy",
  description: "Learn • Practice • Excel — KP Physics Academy LMS",
  metadataBase: new URL(process.env.APP_URL || "https://venugopalareddy.in")
};

export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
