import Head from "next/head";
const DefaultLook = ({text}) => {
    return (
        <div>

        <Head>
          <title>Simple Twilio Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="">
        {text}
        </main></div>  
    );
  };
  
  export default DefaultLook;