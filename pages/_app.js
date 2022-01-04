import 'tailwindcss/tailwind.css';
import '../styles/global.css';
import SideBar from '../components/SideBar';
import Layout from '../components/Layout';
function MyApp({ Component, pageProps }) {
  return (
        <Layout>
        <SideBar />
        <Component {...pageProps} />
        </Layout>
  );
}

export default MyApp
