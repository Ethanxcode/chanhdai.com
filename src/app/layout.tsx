import "react-toastify/dist/ReactToastify.min.css";
import "@/styles/tooltip.css";
import "@/styles/globals.css";

import { Analytics } from "@vercel/analytics/react";
import clsx from "clsx";
import { Metadata, Viewport } from "next";
import { Roboto_Condensed, Roboto_Serif } from "next/font/google";
import { ToastContainer } from "react-toastify";

import { Mixpanel } from "@/components/mixpanel";
import { APP_INFO } from "@/constants/common";
import { USER } from "@/containers/profile/constants";

import { Providers } from "./providers";
import { openGraphImage } from "./shared-metadata";

const robotoCondensed = Roboto_Condensed({
  display: "swap",
  subsets: ["vietnamese"],
});

const robotoSerif = Roboto_Serif({
  display: "swap",
  weight: ["700"],
  subsets: ["vietnamese"],
  variable: "--font-roboto-serif",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL || APP_INFO.baseURL),
  alternates: {
    canonical: "/",
  },
  title: {
    template: `%s | ${APP_INFO.name}`,
    default: APP_INFO.name,
  },
  description: APP_INFO.description,
  keywords: APP_INFO.keywords,
  authors: [
    {
      name: "Quaric",
      url: "https://quaric.com",
    },
  ],
  openGraph: {
    ...openGraphImage,
    siteName: APP_INFO.name,
    title: APP_INFO.name,
    description: APP_INFO.description,
    url: "/",
    type: "profile",
    firstName: USER.firstName,
    lastName: USER.lastName,
    username: USER.username,
    gender: USER.gender,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

type RootLayoutProps = {
  children: React.ReactNode;
  modal: React.ReactNode;
};

export default function RootLayout({ children, modal }: RootLayoutProps) {
  return (
    <html lang="en" className={robotoSerif.variable}>
      <body className={clsx("antialiased", robotoCondensed.className)}>
        <Providers>
          {children}
          {modal}
        </Providers>

        <ToastContainer
          position="bottom-center"
          theme="colored"
          autoClose={2000}
          stacked
          pauseOnHover
        />

        <Mixpanel />
        <Analytics />
      </body>
    </html>
  );
}
