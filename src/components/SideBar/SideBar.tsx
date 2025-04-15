import { Button, IconButton } from "@mui/material";
import useSidebarStore from "../../store/useSideBarStore";
import classNames from "classnames";
import { useContext } from "react";
import { AppContext } from "../../contexts/app.context";

const buttonStyles = {
  textTransform: "none",
  fontWeight: "normal",
  justifyContent: "flex-start",
  minWidth: "unset",
  padding: "10px",
  boxShadow: "none",
  borderRadius: "6px",
};

export default function SideBar() {
  const { toggle, isOpen } = useSidebarStore();

  // Main navigation items data
  const navigationItems = [
    {
      name: "Home",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-house size-4 shrink-0 text-foreground"
        >
          <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
          <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
        </svg>
      ),
      path: "/dashboard",
      active: true,
      textClass: "!text-foreground",
    },
    {
      name: "Contacts",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-users size-4 shrink-0 text-muted-foreground"
        >
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      ),
      path: "",
      active: false,
      textClass: "!text-muted-foreground",
    },
    {
      name: "Settings",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-settings size-4 shrink-0 text-muted-foreground"
        >
          <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path>
          <circle cx="12" cy="12" r="3"></circle>
        </svg>
      ),
      path: "",
      active: false,
      textClass: "!text-muted-foreground",
    },
  ];

  const footerItems = [
    {
      name: "Invite member",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus size-4 shrink-0"
        >
          <path d="M5 12h14"></path>
          <path d="M12 5v14"></path>
        </svg>
      ),
      action: () => console.log("Invite member clicked"),
    },
    {
      name: "Feedback",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-message-circle size-4 shrink-0"
        >
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
        </svg>
      ),
      action: () => console.log("Feedback clicked"),
    },
  ];

  const menuButtonClass =
    "flex w-full items-center gap-2 overflow-hidden rounded-md p-2.5 text-left outline-none disabled:opacity-50 h-9 text-sm";

  const handleNavigation = (path: string) => {
    console.log(`Navigating to ${path}`);
    window.location.href = path;
  };
  const { profile } = useContext(AppContext);

  return (
    <div
      className={classNames(
        "flex min-h-svh bg-sidebar border-r-[1px] border-border-primary flex-col",
        "transition-[width] duration-300 ease-in-out",
        {
          "w-60": isOpen,
          "w-16": !isOpen,
        }
      )}
      style={{
        overflow: "hidden",
        willChange: "width",
      }}
    >
      <div data-sidebar="header" className="flex flex-col gap-2 p-3 w-full">
        <div className="flex h-10 w-full flex-row items-center justify-between pl-0.5">
          <div
            className={classNames(
              "flex items-center space-x-2 transition-opacity duration-300"
            )}
          >
            {isOpen && (
              <div className="flex size-9 items-center justify-center p-1">
                <div className="flex size-7 items-center justify-center rounded-md border text-primary">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g>
                      <path
                        d="M7.81815 8.36373L12 0L24 24H15.2809L7.81815 8.36373Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M4.32142 15.3572L8.44635 24H-1.14809e-06L4.32142 15.3572Z"
                        fill="currentColor"
                      ></path>
                    </g>
                  </svg>
                </div>
              </div>
            )}
            <span
              className={classNames(
                "font-bold whitespace-nowrap transition-all duration-300",
                {
                  "opacity-0": !isOpen,
                  "opacity-100": isOpen,
                  "w-0": !isOpen,
                  "w-auto": isOpen,
                }
              )}
            >
              Acme
            </span>
          </div>
          <IconButton
            onClick={toggle}
            className="inline-flex items-center justify-center text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground size-9 shrink-0 rounded-full text-muted-foreground"
          >
            {isOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-chevron-left size-4 shrink-0"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-menu size-4 shrink-0"
              >
                <line x1="4" x2="20" y1="12" y2="12"></line>
                <line x1="4" x2="20" y1="6" y2="6"></line>
                <line x1="4" x2="20" y1="18" y2="18"></line>
              </svg>
            )}
            <span className="sr-only">Toggle Sidebar</span>
          </IconButton>
        </div>
      </div>

      {/* Main navigation section */}
      <div
        data-sidebar="group"
        className="relative flex w-full min-w-0 flex-col p-3"
      >
        <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
          {navigationItems.map((item, index) => (
            <li key={index} className="relative">
              <Button
                data-size="default"
                data-active={item.active ? "true" : "false"}
                className={`${menuButtonClass} ${
                  !item.active ? "opacity-80" : ""
                }`}
                data-state="closed"
                onClick={() => handleNavigation(item.path)}
                disableRipple
                disableElevation
                sx={buttonStyles}
              >
                {item.icon}
                <span
                  className={classNames(
                    item.textClass,
                    "whitespace-nowrap transition-all duration-300",
                    {
                      "opacity-0 w-0": !isOpen,
                      "opacity-100 ml-2 w-auto": isOpen,
                    }
                  )}
                >
                  {item.name}
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      <div className="relative flex w-full min-w-0 flex-col p-3 "></div>

      <div
        data-sidebar="group"
        className="relative flex w-full min-w-0 flex-col p-3 mt-auto pb-0"
      >
        <ul data-sidebar="menu" className="flex w-full min-w-0 flex-col gap-1">
          {footerItems.map((item, index) => (
            <li
              key={index}
              data-sidebar="menu-item"
              className="group/menu-item relative"
            >
              <Button
                data-sidebar="menu-button"
                data-size="default"
                data-active="false"
                className={`${menuButtonClass} !text-muted-foreground`}
                type="button"
                data-state="closed"
                onClick={item.action}
                disableRipple
                disableElevation
                sx={buttonStyles}
              >
                {item.icon}
                <span
                  className={classNames(
                    "whitespace-nowrap transition-all duration-300",
                    {
                      "opacity-0 w-0": !isOpen,
                      "opacity-100 ml-2 w-auto": isOpen,
                    }
                  )}
                >
                  {item.name}
                </span>
              </Button>
            </li>
          ))}
        </ul>
      </div>

      {/* User profile section */}
      <div data-sidebar="footer" className="flex flex-col gap-2 p-3">
        <div
          data-sidebar="group"
          className="relative flex w-full min-w-0 flex-col p-0"
        >
          <ul
            data-sidebar="menu"
            className="flex w-full min-w-0 flex-col gap-1"
          >
            <li data-sidebar="menu-item" className="group/menu-item relative">
              <Button
                className={`flex w-full items-center gap-2 overflow-hidden "justify-start" !pl-[2px] rounded-md text-left !text-black h-9 text-sm`}
                disableRipple
                disableElevation
                sx={buttonStyles}
              >
                <span className="relative flex shrink-0 overflow-hidden size-7 rounded-full">
                  <img
                    className="aspect-square size-full"
                    alt="Name user"
                    src="/images/UserImage.jpg"
                  />
                </span>
                <span
                  className={classNames(
                    "truncate text-sm font-medium leading-none whitespace-nowrap transition-all duration-300",
                    {
                      "opacity-0 w-0": !isOpen,
                      "opacity-100 ml-2 w-auto": isOpen,
                    }
                  )}
                >
                  {profile?.username}
                </span>
              </Button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
