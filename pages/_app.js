import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import SideBar from '../components/SideBar';
import TopNavigation from "../components/TopNavigation";
function MyApp({ Component, pageProps }) {
  return (

      <div className="flex">
        
        <SideBar />
        <TopNavigation title="Home" />
        
        <Component {...pageProps} />
      </div>

  // <Component {...pageProps} />,
  );
}

export default MyApp
