import React from "react";
import QRCode from "qrcode.react";

const QRCodeLink = (props) => {
  return (
    <div style={{ display: "flex", flexDirection: "column", textAlign: "center", paddingBottom: "1rem" }}>
      <a style={{padding: "1rem"}} href={props.value}>
        <QRCode value={props.value} id={props.id} />
      </a>
      <button className={"btn btn-primary btn-sm"} type={"button"} onClick={props.onClick}> Download QR </button>
    </div>
  );
};

export default QRCodeLink;
