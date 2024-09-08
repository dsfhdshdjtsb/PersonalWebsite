import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";



const inter = Inter({ subsets: ["latin"] });


export const metadata = {
  title: "Nicholas Suh",
  description: "My Portfolio",
};

export default function RootLayout({ children }) {
  
  return (
      
      <html lang="en">
        
        <body className={`${inter.className} bg-[#F5F5F5]`}>
          
          
          {children}
          
          
          </body>
      </html>
    
  );
}
