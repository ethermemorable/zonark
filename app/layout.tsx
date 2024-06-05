import type { Metadata } from "next";
import { IBM_Plex_Sans } from "next/font/google";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";

import "./globals.css";

const IBMPlex = IBM_Plex_Sans({ 
  subsets: ["latin"],
  weight: ['400', '500', '600', '700'],
  variable: '--font-ibm-plex'
});

export const metadata: Metadata = {
  title: "Zonark",
  description: "Welcome to Zonark - your premier AI-powered text-to-audio generator! Zonark is revolutionizing the way you experience sound by seamlessly transforming text inputs into captivating audio clips. Whether it's the tranquil melody of birds singing or the soothing patter of the sound of rain, Zonark brings your words to life in vibrant and immersive audio experiences.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider  appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "assets/icons/logo.png",
          },
          variables: {
             colorPrimary: '#624cf5',
          },
        }}>
      <html lang="en">
        <body className={cn("font-IBMPlex antialiased", IBMPlex.variable)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}