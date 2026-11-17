import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: { default: "School Vision | See your school clearly", template: "%s | School Vision" },
  description: "A thoughtful school management platform for clear, connected school operations.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
