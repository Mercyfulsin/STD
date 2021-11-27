import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import SideBar from '../components/SideBar';

function MyApp({ Component, pageProps }) {
  return (

      <div className="flex">
        <SideBar />
        <Component {...pageProps} />
      </div>

  // <Component {...pageProps} />,
  );
}

export default MyApp
