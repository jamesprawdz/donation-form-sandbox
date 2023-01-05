import { StrictMode } from "react";
import ReactDOM from "react-dom";

import DonationForm from "./DonationForm";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <DonationForm />
  </StrictMode>,
  rootElement
);
