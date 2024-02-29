import "./App.css";
import OrderPage from "./pages/OrderPage";
import SummaryPage from "./pages/SummaryPage";
import { useState } from "react";
import CompletePage from "./pages/CompletePage/index";
import Step from "./components/Step";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div style={{ padding: "4rem" }}>
      <Step step={step} />
      {step === 0 && <OrderPage setStep={setStep} />}
      {step === 1 && <SummaryPage setStep={setStep} />}
      {step === 2 && <CompletePage setStep={setStep} />}
    </div>
  );
}

export default App;
