import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NewYearTravelLanding from "./components/NewYearTravelLanding";
import PrivacyPolicy from "./components/PrivacyPolicy";
import TermsOfUse from "./components/TermsOfUse";
import RefundPolicy from "./components/RefundPolicy";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NewYearTravelLanding />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfUse />} />
        <Route path="/refund" element={<RefundPolicy />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
