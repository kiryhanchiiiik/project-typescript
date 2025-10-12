import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";
import { store } from "./store.ts";
import { Toaster } from "@/components/ui/toaster";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <Toaster />
    <App />
  </Provider>
);
