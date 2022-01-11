import LittleSquare from "../../components/LittleSquare";
import Textarea from "../../components/Textarea";
import ContentContainer from "../../components/ContentContainer";

const dataGrab = async (url) => {
  console.log("In Data Grab");
  const data = await fetch(url);
  console.log("Data grabbed");
  const json = await data.json();
  console.log("JSON'd data");
  console.log(json);
  return(json);
};

const sendSMS = async ({url, data}) => {
  console.log("In sendSMS");
  console.log(`URL: ${url}, Data: ${data}`);
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  })
  console.log("Exiting sendSMS");
};

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
              content={<Textarea textName="SMS_Box_1" btnStr="Send" placeholder="Message" />}
            />
            <LittleSquare
              title="Fetch SMS"
              content={<Textarea textName="SMS_Box_2" btnStr="Grab (10)" placeholder="SID's" readOnly={true} func={dataGrab} url="/api/SMS/0?qty=10&type=id" />}
            />
          </div>

          <div id="modal-root"></div>
        </>
      }
    />
  );
};




export default SMS;