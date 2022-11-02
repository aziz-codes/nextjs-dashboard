import {
  HomeIcon,
  UserIcon,
  BanknotesIcon,
  ChartBarIcon,
  EnvelopeIcon,
  TrashIcon,
  PencilSquareIcon,
} from "@heroicons/react/24/outline";
export const links = [
  {
    name: "Home",
    icon: <HomeIcon />,
    to: "/",
  },
  {
    name: "Users",
    icon: <UserIcon />,
    to: "/users",
  },
  {
    name: "Finance",
    icon: <BanknotesIcon />,
    to: "/finance",
  },
  {
    name: "Progress",
    icon: <ChartBarIcon />,
    to: "/progress",
  },
  {
    name: "Mails",
    icon: <EnvelopeIcon />,
    to: "/mails",
  },
  {
    name: "Notes",
    icon: <PencilSquareIcon />,
    to: "/notes",
  },
  {
    name: "Trash",
    icon: <TrashIcon />,
    to: "/trash",
  },
];
