import "../styles/globals.css";
import { AuthProvider } from "../context/AuthContext";
import { useEffect } from "react";
import Cookies from "js-cookie";

function MyApp({ Component, pageProps }) {
  // Set Cookies for the first time
  useEffect(() => {
    const pageNum = Cookies.get("questionsNum");
    if (!pageNum) {
      Cookies.set("questionsNum", 0);
    }
  }, []);

  return (
    <AuthProvider>
      <div className="bg-black">
        <Component {...pageProps} />
      </div>
    </AuthProvider>
  );
}

export default MyApp;
