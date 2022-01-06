import LittleSquare from "../../components/LittleSquare";
import ContentContainer from "../../components/ContentContainer";

const TWILIO_ACCOUNT_SID = process.env.TWILIO_ACCOUNT_SID;
const TWILIO_AUTH_TOKEN = process.env.TWILIO_AUTH_TOKEN;
const TEST = 'TESt';

const Settings = () => {
  return (
    <ContentContainer
      tnText="Settings"
      title="STD - Settings"
      content={
        <>
          <h1 className="text-6xl font-bold mt-20">
            <a className="text-green-600">STD</a> Settings {TWILIO_ACCOUNT_SID}
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
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="inline-full-name"
                  type="text"
                  value={TWILIO_ACCOUNT_SID || "Jane Doe"}
                  disabled={true}
                />
              }
            />
          </div>
        </>
      }
    />
  );
};

export default Settings;
