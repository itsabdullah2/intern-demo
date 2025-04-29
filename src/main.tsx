import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { AppStateProvider } from "./context/AppStateContext.tsx";

const el = document.getElementById("root") as HTMLDivElement;
const root = ReactDOM.createRoot(el);

root.render(
  <StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </StrictMode>
);
