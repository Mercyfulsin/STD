import LittleSquare from "../../components/LittleSquare";
import Textarea from "../../components/Textarea";
import ContentContainer from "../../components/ContentContainer";

const SMS = () => {
  return (
    <ContentContainer
      tnText="SMS"
      title="STD - SMS"
      content={
        <>
          <h1 className="text-6xl font-bold mt-20">
            <a className="text-green-600">SMS</a> Dashboard
          </h1>
          <br />
          <p className="mt-3 text-2xl">
            Get started by editing{" "}
            <code className="p-2 font-mono text-lg bg-gray-100 rounded-md">
              .env
            </code>{" "}
            with your Twilio information.
          </p>
          <div className="content-list">
            <LittleSquare
              title="Send SMS"
              content={<Textarea textName="SMS_Box_1" />}
            />
            <LittleSquare
              title="Fetch SMS"
              content={<Textarea textName="SMS_Box_1" />}
            />
          </div>

          <div id="modal-root"></div>
        </>
      }
    />
  );
}

export default SMS;