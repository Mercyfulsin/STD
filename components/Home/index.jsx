import DefaultLook from "../DefaultLook";
import LittleSquare from "../LittleSquare";
import Footer from "../Footer";

const Home = () => {
  return (
    //<div className="items-center justify-center w-full flex-1 px-20 text-center my-20">
    <div className="content-container h-screen overflow-auto">  
      <DefaultLook
        text={
          <>
            <h1 className="text-6xl font-bold mt-20">
              Welcome to <a className="text-green-600">STD</a>
            </h1>
            <br />
            <p className="mt-3 text-2xl">
              Get started by editing{" "}
              <code className="p-3 font-mono text-lg bg-gray-100 rounded-md">
                pages/index.js
              </code>
            </p>
            <div className="content-list">
              <LittleSquare
                title="Documentation →"
                content="Find in-depth information about Simple Twilio Dashboard features and its dependencies."
              />
              <LittleSquare
                title="Send SMS →"
                content="Send an SMS by leverating Twilio's service and this dashboard."
                link="/posts/sms-page"
              />
              <a
                href="https://github.com/vercel/next.js/tree/master/examples"
                className="border-custom"
              >
                <h3 className="post-owner post-owner text-2xl font-bold">
                  Examples &rarr;
                </h3>
                <p className="post-text">
                  Discover and deploy boilerplate example Next.js projects.
                </p>
              </a>

              <a
                href="https://vercel.com/import?filter=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className="border-custom"
              >
                <h3 className="post-owner text-2xl font-bold">Deploy &rarr;</h3>
                <p className="post-text">
                  Instantly deploy your Next.js site to a public URL with
                  Vercel.
                </p>
              </a>
            </div>
            <div id="modal-root"></div>
          </>
        }
      />
    </div>
  );
};

export default Home;
