import { HelpIcon, LogoutIcon, ProgressIcon, SettingIcon, UserIcon, HomeIcon } from "@/components/icons";

export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Next.js + HeroUI",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "Docs",
      href: "/docs",
    },
    {
      label: "Camera",
      href: "/camera",
    },
    {
      label: "Blog",
      href: "/blog",
    },
    {
      label: "About",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "/",
      icon: HomeIcon
    },
    {
      label: "Profile",
      href: "/profile",
      icon: UserIcon
    },
    {
      label: "Progress",
      href: "/receipt",
      icon: ProgressIcon
    },
    {
      label: "Settings",
      href: "/settings",
      icon: SettingIcon
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
      icon: HelpIcon
    },
    {
      label: "Logout",
      href: "/logout",
      icon: LogoutIcon
    },
  ],
  links: {
    github: "https://github.com/heroui-inc/heroui",
    twitter: "https://twitter.com/hero_ui",
    docs: "https://heroui.com",
    discord: "https://discord.gg/9b6yyZKmH4",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
