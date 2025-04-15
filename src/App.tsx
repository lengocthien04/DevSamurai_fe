import { useContext } from "react";
import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { AppContext, AppProvider } from "./contexts/app.context";
import LoadingPage from "./components/loading/LoadingPage";
import useRouteElements from "./hooks/useRouteElements";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function AppIner() {
  const routes = useRouteElements();
  const { loadingPage } = useContext(AppContext);

  return (
    <div
      style={{
        minHeight: "inherit",
      }}
    >
      {routes}
      {loadingPage && <LoadingPage />}
    </div>
  );
}

function App() {
  return (
    <ScrollToTop>
      <PrimeReactProvider>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <AppProvider>
            <AppIner />
          </AppProvider>
        </LocalizationProvider>
      </PrimeReactProvider>
    </ScrollToTop>
  );
}

export default App;
