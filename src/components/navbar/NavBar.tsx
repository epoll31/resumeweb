import { createClient } from "@/utils/supabase/server";
import Home from "../icons/home";
import Briefcase from "../icons/briefcase";
import User from "../icons/user";
import GlowContainer from "../GlowContainer";
import NavTab, { Tab } from "./NavTab";
import Logout from "../icons/logout";
import Pencil from "../icons/pencil";
import { getTagFromUserId } from "@/utils/supabase/actions/getTagFromUserId";
import { motion } from "framer-motion";

function getLoggedInTabs(tag: string): Tab[] {
  return [
    {
      name: "Home",
      href: "/",
      icon: <Home />,
    },
    {
      name: "View Portfolio",
      href: `/${tag}`,
      icon: <Briefcase />,
    },
    {
      name: "Edit Portfolio",
      href: "/portfolio",
      icon: <Pencil />,
    },
    {
      name: "Log Out",
      action: "logout",
      icon: <Logout />,
    },
  ];
}

const loggedOutTabs: Tab[] = [
  {
    name: "Home",
    href: "/",
    icon: <Home />,
  },
  {
    name: "Log In",
    href: "/login",
    icon: <User />,
  },
];

export default async function Nav() {
  const supabase = createClient();
  const {
    error,
    data: { user },
  } = await supabase.auth.getUser();
  // const tabs = error ? loggedOutTabs : loggedInTabs;

  let tabs = loggedOutTabs;

  if (!error) {
    const tag = await getTagFromUserId(user!.id);

    tabs = getLoggedInTabs(tag);
  }
  //TODO: add resizing to navbar to make it more minimal when closed
  return (
    <GlowContainer
      className="fixed bottom-8 shadow-xl z-40"
      glowColor="#fb3b53"
    >
      <nav className="rounded-full flex flex-row flex-nowrap h-fit gap-px z-50">
        {tabs.map((tab) => (
          <NavTab tab={tab} key={tab.name} />
        ))}
      </nav>
    </GlowContainer>
  );
}
