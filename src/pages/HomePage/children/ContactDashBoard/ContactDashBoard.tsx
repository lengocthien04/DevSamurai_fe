import React from "react";
import { Box, Button, Avatar } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface Contact {
  id: string;
  name: string;
  imageUrl: string;
  visitCount: number;
  isCompany?: boolean;
}

interface ContactItemProps {
  contact: Contact;
}

interface ContactListProps {
  title: string;
  contacts: Contact[];
}

// Mock data for demonstration
const mockContacts: Contact[] = [
  {
    id: "0776ae41-7f9f-4783-bbd8-72a4bf5b91cc",
    name: "Vivian Casey",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/0776ae41-7f9f-4783-bbd8-72a4bf5b91cc",
    visitCount: 1,
  },
  {
    id: "29ff3088-114b-4709-bacc-581f29438f71",
    name: "Mei Ling Chen",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/29ff3088-114b-4709-bacc-581f29438f71",
    visitCount: 1,
  },
  {
    id: "acde96ef-b560-4ba3-8cf8-ec3c66791ad5",
    name: "Uber",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/acde96ef-b560-4ba3-8cf8-ec3c66791ad5",
    visitCount: 1,
    isCompany: true,
  },
  {
    id: "4c86a6cd-0325-4bcf-ab1f-40b6f22e6beb",
    name: "Google",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/4c86a6cd-0325-4bcf-ab1f-40b6f22e6beb",
    visitCount: 0,
    isCompany: true,
  },
  {
    id: "646e6bdd-f29d-407b-86f4-d61821cec4ea",
    name: "Gabriel Fischer",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/646e6bdd-f29d-407b-86f4-d61821cec4ea",
    visitCount: 0,
  },
  {
    id: "896a4c26-412a-4631-ab79-9e6d053e0e44",
    name: "Slack",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/896a4c26-412a-4631-ab79-9e6d053e0e44",
    visitCount: 0,
    isCompany: true,
  },
];

const leastVisitedContacts: Contact[] = [
  {
    id: "f66618bb-2243-4d14-bc20-c7281d51a222",
    name: "Marie Jones",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/f66618bb-2243-4d14-bc20-c7281d51a222",
    visitCount: 0,
  },
  {
    id: "2d9bbc19-8362-4e94-bfd0-ea03cd9eb784",
    name: "Spotify",
    imageUrl:
      "https://demo.achromatic.dev/api/contact-images/2d9bbc19-8362-4e94-bfd0-ea03cd9eb784",
    visitCount: 0,
    isCompany: true,
  },
  // Add other least visited contacts from your data
];

const ContactItem: React.FC<ContactItemProps> = ({ contact }) => {
  const [hover, setHover] = React.useState(false);

  return (
    <Button
      fullWidth
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      sx={{
        justifyContent: "space-between",
        padding: "8px 12px",
        borderRadius: "6px",
        textAlign: "left",
        height: "36px",
        textTransform: "none !important",
        "&:hover": {
          backgroundColor: "rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      <Box display="flex" alignItems="center" gap={1}>
        <Avatar
          src={contact.imageUrl}
          alt={contact.name}
          sx={{
            width: 16,
            height: 16,
            borderRadius: contact.isCompany ? "4px" : "50%",
          }}
        />
        <p className="m-0 text-sm font-medium text-foreground">
          {contact.name}
        </p>
      </Box>

      {hover ? (
        <ArrowForwardIcon
          sx={{ width: 16, height: 16 }}
          className="text-foreground"
        />
      ) : (
        <p className="m-0 text-sm font-medium !text-foreground">
          {contact.visitCount}
        </p>
      )}
    </Button>
  );
};

// Contact list component with title
const ContactList: React.FC<ContactListProps> = ({ title, contacts }) => {
  return (
    <Box
      sx={{
        border: "1px solid rgba(0, 0, 0, 0.12)",
        borderRadius: "12px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
        backgroundColor: "white !important",
        overflow: "hidden",
      }}
    >
      <Box sx={{ padding: "24px", paddingBottom: "8px" }}>
        <p
          style={{
            margin: 0,
            fontSize: "16px",
            fontWeight: 600,
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          {title}
        </p>
      </Box>

      <Box sx={{ padding: "0 24px 24px" }}>
        <Box display="flex" flexDirection="column" gap={0.5}>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

const ContactsDashBoard: React.FC = () => {
  return (
    <div className="grid grid-cols-2 gap-8 w-full max-w-[1150px] ">
      <div className="col-span-1 w-full">
        <ContactList title="Most visited contacts" contacts={mockContacts} />
      </div>
      <div className="col-span-1 w-full">
        <ContactList
          title="Least visited contacts"
          contacts={leastVisitedContacts}
        />
      </div>
    </div>
  );
};

export default ContactsDashBoard;
