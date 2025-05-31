import "./globals.css";

export const metadata = {
  title: "Portfolio - Yasser",
  description: "",
  icons: {
    icon: '/favicon.ico',
  },
  
};


export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark" >
      <body
      className=" antialiased leading-8 overflow-x-hidden dark:bg-black 
      dark:text-white"
      >{children}
      </body>
    </html>
  );
}
