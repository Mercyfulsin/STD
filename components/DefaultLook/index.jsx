import Head from "next/head";
import Footer from "../Footer";
const DefaultLook = ({text}) => {
    return (
      <div >
        <Head>
          <title>Simple Twilio Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="content-container h-screen items-center">
        {text}
        </main>
        </div>
    );
  };
  
  export default DefaultLook;