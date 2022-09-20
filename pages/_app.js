import "../styles/globals.css";
import { ThemeProvider } from "@material-tailwind/react";
import { GoogleOAuthProvider } from '@react-oauth/google'


function MyApp({ Component, pageProps }) {
  return (

    <GoogleOAuthProvider clientId="981947590627-pgojdbfa27eikfpe9g3t0egrk1kip5fa.apps.googleusercontent.com">

    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>

    </GoogleOAuthProvider>
  );
}

export default MyApp;
