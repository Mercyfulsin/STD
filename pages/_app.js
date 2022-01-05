import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import SideBar from '../components/SideBar';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  return (
        <div className="flex">
        <SideBar />
        <Component {...pageProps} />
        </div>
  );
}

export default MyApp
