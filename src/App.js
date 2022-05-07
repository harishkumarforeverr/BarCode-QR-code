import React from "react";
import QRCode from "react-qr-code";
// https://vyaparapp.in/tools/ns/free-online-qr-code-scanner-from-image
import JsBarcode from "jsbarcode";
function App() {
  const ref = React.useRef();
  React.useEffect(() => {
    const canvas = document.createElement("canvas");
    JsBarcode(canvas, "Hi world!", {
      displayValue: false,
    });
    ref.current.appendChild(canvas);
  }, [ref]);
  JsBarcode("#barcode", "1234567890", {
    displayValue: false,
  });
  return (
    <>
      <QRCode
        value="harish is good boy and he lovwe node.js so much "
        size={120}
      />{" "}
      <div ref={ref}></div>
      <svg id="barcode"></svg>
    </>
  );
}

export default App;
