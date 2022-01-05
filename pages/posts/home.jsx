import LittleSquare from "../../components/LittleSquare";
import ContentContainer from "../../components/ContentContainer";

const Home = () => {
  return (
    <ContentContainer
      tnText="Home"
      title="Simple Twilio Dashboard - Home"
      content={
        <>
          <h1 className="text-6xl font-bold mt-20">
            Welcome to <a className="text-green-600">STD</a>
          </h1>
          <br />
          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="p-2 font-mono text-lg bg-gray-100 rounded-md">
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
          </div>
          <div id="modal-root"></div>
        </>
      }
    />
  );
};

export default Home;
