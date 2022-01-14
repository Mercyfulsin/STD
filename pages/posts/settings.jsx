import LittleSquare from "../../components/LittleSquare";
import ContentContainer from "../../components/ContentContainer";
import { useEffect, useState } from "react";
import { server } from '../../config';

let Creds = {};

const Settings = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    console.log("Loading" & loading);
  }, []);

  GetCredentials(loading, setLoading);

  return (
    <ContentContainer
      tnText="Settings"
      title="STD - Settings"
      content={
        <>
          <h1 className="text-6xl font-bold mt-20">
            <a className="text-green-600">STD</a> Settings
          </h1>
          <br />
          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="p-2 font-mono text-lg bg-gray-100 rounded-md">
              .env
            </code>
          </p>
          <div className="content-list">
          <LittleSquare
              title="Twilio Account SID"
              content={
                <DataDisplay val={Creds.TWILIO_ACCOUNT_SID} load={loading} />
              }
            />

            <LittleSquare
              title="Twilio Auth Token"
              content={
                <DataDisplay val={Creds.TWILIO_AUTH_TOKEN} load={loading} />
              }
            />

            <LittleSquare
              title="Twilio Messaging Service"
              content={
                <DataDisplay val={Creds.TWILIO_MESSAGING_SERVICE_SID} load={loading} />
              }
            />

            <LittleSquare
              title="Twilio Phone #1"
              content={
                <DataDisplay val={Creds.TWILIO_NUMBER_1} load={loading} />
              }
            />
          </div>
        </>
      }
    />
  );
};

const DataDisplay = ({ val, load }) => {
  return load ? (
    <div class="border border-black shadow rounded-md p-4 max-w-sm w-full mx-auto">
      <div class="animate-pulse flex space-x-4">
        <div class="h-10 w-full bg-gray-700 rounded" />
      </div>
    </div>
  ) : (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
      id="inline-full-name"
      type="text"
      value={val}
      disabled={true}
    />
  );
};

const GetCredentials = async (loading, setLoading) => {
  Creds = await fetch(`${server}/api/credentials`);
  Creds = await Creds.json();
  setLoading(false);
};

export default Settings;
