import Head from "next/head";
const DefaultLook = ({text}) => {
    console.log(text);
    console.log("Hi");
    return (
        <div className="content-container h-screen">

        <Head>
          <title>Simple Twilio Dashboard</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center my-20">
        {text}
        </main></div>  
    );
  };
  
  export default DefaultLook;