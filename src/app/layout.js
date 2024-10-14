import { Inter } from "next/font/google";
import "./golbals.css";
import Footer from "./components/footer";

const inter = Inter({
    subsets: ["latin"]
});

export const metadata={
    title: "Facebook-connect with frend and the world arround you",
    description:"facebookid aofg pdouh nghag "
};
export default function RootLayout({children}){
    return(
        <html lang="en">
        <body className = {inter.className}>
            {children}
            <Footer />
        </body>
        </html>
    );
}



const Layout = ({children}) => {
    return (
      <div className="flex">
        <aside className="w-64 h-screen bg-gray-800 text-white p-4">
          <h1 className="text-xl mb-6">Dashboard</h1>
          <nav>
            <ul>
              <li className="mb-4">
                <Link href="/"><a className="hover:text-gray-300">Home</a></Link>
              </li>
              <li className="mb-4">
                <Link href="/settings"><a className="hover:text-gray-300">Settings</a></Link>
              </li>
              <li>
                <Link href="/profile"><a className="hover:text-gray-300">Profile</a></Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="flex-1 p-6 bg-gray-100">
        </main>
        {children}
      </div>
    );
  };

export default Layout;