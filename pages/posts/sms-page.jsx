import LittleSquare from "../../components/LittleSquare";
import Textarea from "../../components/Textarea";
import ContentContainer from "../../components/ContentContainer";
import React, { useState } from "react";

const dataGrab = async (url) => {
  console.log("In Data Grab");
  const data = await fetch(url);
  console.log("Data grabbed");
  const json = await data.json();
  console.log(`Client Side: ${JSON.stringify(json)}`);
  return json;
};

const sendSMS = async (url, data) => {
  console.log("In sendSMS");
  console.log(`URL: ${url}, Data: ${JSON.stringify(data)}`);
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log("Exiting sendSMS");
};

const TableView = (child) => {
  const [dataObject, setDataObject] = useState([]);
  console.log(`Current Data Object ${JSON.stringify(dataObject[0])}`);
  return (
    <div>
      <div id="table-root">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>SMS SID</th>
              <th>From</th>
              <th>To</th>
              <th>Direction</th>
              <th>Timestamp</th>
              <th>Content</th>
            </tr>
          </thead>
          <tbody>
            {dataObject ? dataObject.map((obj, i) => {
              console.log(`Entered ${i}`);
              // Return the element. Also pass key
              return <tr><td>{obj.SID}</td><td>{obj.From}</td><td>{obj.To}</td><td>{obj.Direction}</td><td>{obj.DateSent}</td><td>{obj.Content}</td></tr>;
            }) : <tr><td>obj.SID</td><td>obj.From</td><td>obj.To</td><td>obj.Direction</td><td>obj.DateSent</td><td>obj.Content</td></tr>}
          </tbody>
        </table>
      </div>
      <div id="button-root">
        <button
          id="ok-btn"
          className="px-4 py-2 bg-green-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-300"
          onClick={async () => setDataObject(await child.func(child.url))}
          // setShowModal(true)
        >
          {child.btnStr}
        </button>
      </div>
    </div>
  );
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
              content={
                <Textarea
                  textName="SMS_Box_1"
                  btnStr="Send"
                  placeholder="Message"
                  func={sendSMS}
                  url="/api/SMS/0?type=send"
                />
              }
            />
            <LittleSquare
              title="Fetch SMS"
              content={
                <TableView
                  textName="SMS_Box_2"
                  func={dataGrab}
                  url="/api/SMS/0?qty=10&type=id"
                />
              }
            />
          </div>

          <div id="modal-root"></div>
        </>
      }
    />
  );
};

export default SMS;
