import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme_provider";
import Header from "@/components/header";
import { ClerkProvider } from '@clerk/nextjs';
import { dark } from "@clerk/themes";
import { Toaster } from "sonner";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter = Inter({ subsets: ["latin"]});

export const metadata = {
  title: "TUFai - AI Career Coach",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider appearance={{
      baseTheme:dark,
    }}>
    <html lang="en" suppressHydrationWarning>
      <body
        className={` ${inter.className}`}
      >
         <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
            {/* header */}
            <Header/>
            <main className="min-h-screen">{children}</main>
            <Toaster richColors/>
            {/* footer */}
            <footer className="bg-muted/50 py-12">
              <div className="container max-auto px-4 text-center text-gray-200">
                <p>Hi TUFAi users👋</p>
              </div>
            </footer>
          </ThemeProvider>
      </body>
    </html>
    </ClerkProvider>
  );
}

// import { Inter } from "next/font/google";
// import "./globals.css";
// // import { ClerkProvider } from "@clerk/nextjs";
// // import { Toaster } from "sonner";
// // import Header from "@/components/header";
// import { ThemeProvider } from "@/components/theme_provider";
// // import { dark } from "@clerk/themes";

// const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//   title: "AI Career Coach",
//   description: "",
// };

// export default function RootLayout({ children }) {
//   return (
//     // <ClerkProvider
//     //   appearance={{
//     //     baseTheme: dark,
//     //   }}
//     // >
//       <html lang="en" suppressHydrationWarning>
//         <head>
//           <link rel="icon" href="/logo.png" sizes="any" />
//         </head>
//         <body className={`${inter.className}`}>
//           <ThemeProvider
//             attribute="class"
//             defaultTheme="dark"
//             enableSystem
//             disableTransitionOnChange
//           >
//             <Header />
//             <main className="min-h-screen">{children}</main>
//             <Toaster richColors />

//             <footer className="bg-muted/50 py-12">
//               <div className="container mx-auto px-4 text-center text-gray-200">
//                 <p>Made with 💗 by RoadsideCoder</p>
//               </div>
//             </footer>
//           </ThemeProvider>
//         </body>
//       </html>
//     // </ClerkProvider>
//   );
// }