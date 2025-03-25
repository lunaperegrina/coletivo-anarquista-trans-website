import type { Metadata } from "next";
import {ReactNode} from "react";
import ErrorBoundary from "../components/atoms/ErrorBoundary";
import { ThemeProvider } from "@/context/ThemeContext";
import { CyberSectionProvider } from "@/context/CyberSectionsContext/CyberSections";
import { FontProvider } from "@/context/FontContext";
import FontWrapper from "@/utils/FontWrapper";
import CyberSidebar from "@/components/organism/CyberSidebar";
import CyberDrone from "@/components/molecules/CyberDrone";
import "./globals.css";

// Metadata
export const metadata: Metadata = {
  title: "CATS",
  description: "-x-",
};

// Root Layout Component
export default function RootLayout({
  children,
}: {
  children: ReactNode;
}) {

  return (
      <html lang="en">
      <body>
        <ThemeProvider>
          <FontProvider>
            <CyberSectionProvider>
              <ErrorBoundary fallback={<div>Something went wrong!</div>}>
                <FontWrapper>
                  <div className="min-h-screen flex flex-col md:flex-row">
                    <CyberSidebar normalBorders />
                    <div className="flex-1 ">
                      {children}</div>
                  </div>
                  <CyberDrone />
                </FontWrapper>
              </ErrorBoundary>
            </CyberSectionProvider>
          </FontProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
