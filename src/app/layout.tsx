import type {Metadata} from "next";
import "./globals.css";
import ErrorBoundary from "../components/atoms/ErrorBoundary";
import {ThemeProvider} from "@/context/ThemeContext";
import {CyberSectionProvider} from "@/context/CyberSectionsContext/CyberSections";
import CyberSidebar from "@/components/organism/CyberSidebar";

// Metadata
export const metadata: Metadata = {
    title: "CATS",
    description: "-x-",
};

// Root Layout Component
export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <ThemeProvider>
            <CyberSectionProvider>
                <ErrorBoundary fallback={<div>Something went wrong!</div>}>
                    <div className="min-h-screen flex">
                        <CyberSidebar glowingBorders
                                      normalBorders />
                        <div className="flex-1">{children}</div>
                    </div>
                </ErrorBoundary>
            </CyberSectionProvider>
        </ThemeProvider>
        </body>
        </html>
    );
}
