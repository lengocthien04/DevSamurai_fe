import { Button } from "@mui/material";

import DateRangePicker from "../../components/ExtendDateRangePicker";
import useHomePage from "./hook";
import Chart from "./children/Chart";
import ContactsDashBoard from "./children/ContactDashBoard/ContactDashBoard";

// Define TypeScript interfaces

export default function HomePage() {
  const {
    CustomTooltip,
    tabs,
    handleTabClick,
    selectedTab,
    setEndDate,
    endDate,
    setStartDate,
    startDate,
    chartData,
    setActiveTab,
    totals,
    activeTab,
  } = useHomePage();
  return (
    <div className="flex flex-col gap-0 overflow-auto h-screen">
      {" "}
      <div className="relative flex h-12 items-center justify-start gap-2 border-b px-6">
        <div className="flex border-t border-b border-gray-200 bg-white">
          {tabs.map((tab) => (
            <Button
              variant="outlined"
              key={tab}
              disableRipple
              onClick={() => handleTabClick(tab)}
              className={`
                relative h-12 px-2 py-1 text-sm !rounded-none z-10 !border-t-0 !border-x-0
                ${
                  selectedTab === tab
                    ? "font-medium !text-foreground border-b-2 !border-black"
                    : "!text-muted-foreground border-b-2 !border-transparent"
                }
                transition-none focus:outline-none
              `}
              sx={{
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, 0.04)",
                  boxShadow: "none",
                },
                minWidth: "unset",
                textTransform: "none",
              }}
            >
              {tab}
            </Button>
          ))}
        </div>
        <DateRangePicker
          startDate={startDate}
          endDate={endDate}
          onChangeStartDate={setStartDate}
          onChangeEndDate={setEndDate}
        />
      </div>
      <div className="p-6 flex justify-center">
        <Chart
          CustomTooltip={CustomTooltip}
          activeTab={activeTab}
          chartData={chartData}
          setActiveTab={setActiveTab}
          totals={totals}
        />
      </div>
      <div className="p-6 flex w-full justify-center">
        <ContactsDashBoard />
      </div>
    </div>
  );
}
