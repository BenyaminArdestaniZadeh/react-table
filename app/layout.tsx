import { Theme } from "@radix-ui/themes";
import type { Metadata } from "next";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "./theme.config.css";
import { ravi } from "@/src/theme/font-config";

//create theme.config.css file in app directory and add custom radix css inside that

//create font config file for custom font

//create metadata for app

export const metadata: Metadata = {
  title: "react table",
  description: "React Table",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className={ravi.variable} lang="fa" dir="rtl">
      <body>
        <Theme scaling={"100%"} radius={"large"}>
          {children}
        </Theme>
      </body>
    </html>
  );
}
