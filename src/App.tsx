import "./App.css";
import ScrollToTop from "./components/utils/ScrollToTop";
import { PrimeReactProvider } from "primereact/api";

import "primereact/resources/themes/lara-light-cyan/theme.css";
import { AppProvider } from "./contexts/app.context";
import useRouteElements from "./hooks/useRouteElements";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function AppIner() {
  const routes = useRouteElements();

  return (
    <div
      style={{
        minHeight: "inherit",
      }}
    >
      {routes}
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
