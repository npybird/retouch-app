"use client";

import {
  Navbar as HeroUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/navbar";

import {
  Avatar,
  Badge,
  Button,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerFooter
} from "@heroui/react";

import { Link } from "@heroui/link";

import { useState } from "react";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  NotificationIcon,
} from "@/components/icons";

export const Navbar = () => {
  const [notifications, setNotifications] = useState([
    {
      title: "New message",
      description: "You have a new message from John",
    },
    {
      title: "Update available",
      description: "Click here to update to the latest version",
    },
    {
      title: "Update available",
      description: "Click here to update to the latest version",
    },
    {
      title: "Update available",
      description: "Click here to update to the latest version",
    },
  ]);

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleRemoveNotification = (idxToRemove: number) => {
    setNotifications((prev) => prev.filter((_, idx) => idx !== idxToRemove));
  };


  const notificationPopover = (
    <PopoverContent className="min-h-40 max-h-60 min-w-20 max-w-30 w-[70vw] overflow-y-auto !justify-start items-start">
      <div className="flex flex-col justify-self-start gap-2 p-2">
        <div className="text-sm font-bold">Notifications</div>
        <div className="flex flex-col gap-2">
          {
            notifications.length > 0 ? (
              notifications.map((notification, idx) => (
                <div
                  className="flex justify-between items-start gap-2 border border-default-200 rounded-lg p-2"
                  key={idx}
                >
                  <div className="flex flex-col">
                    <span className="text-sm font-semibold">{notification.title}</span>
                    <span className="text-xs text-default-500">{notification.description}</span>
                  </div>
                  <button
                    onClick={() =>
                      handleRemoveNotification(idx)
                    }
                    className="text-default-400 hover:text-danger-500 text-sm font-bold leading-none"
                  >
                    ×
                  </button>
                </div>
              )))
              : (
                <div>There is no latest notification</div>
              )}
        </div>
      </div>
    </PopoverContent>
  )

  return (
    <HeroUINavbar maxWidth="xl" position="sticky"
      className="min-h-24 border-b border-default-200"
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <Avatar
            isBordered
            color="default"
            src="/avatar.jpeg"
            className="w-10 h-10 sm:w-12 sm:h-12 mr-1"
          />
          <div className="flex justify-start items-center gap-1">
            <div className="flex flex-col leading-tight">
              <p className="font-semibold text-medium dark:text-cyan-300 text-blue-600">N. Posayaanuwat</p>
              <p className="text-sm text-default-500">062-446-5225</p>
            </div>
          </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <Popover color="default" placement="bottom">
          <PopoverTrigger>
            <Button isIconOnly radius="lg" variant="light">
              {
                notifications.length > 0 ? (
                  <Badge color="danger" content={notifications.length} shape="circle">
                    <NotificationIcon size={24} />
                  </Badge>
                )
                  : (
                    <NotificationIcon size={24} />
                  )}
            </Button>
          </PopoverTrigger>
          {notificationPopover}
        </Popover>
        <Button isIconOnly radius="lg" variant="light" onClick={() => setIsDrawerOpen(true)} aria-label="Open menu">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </Button>
      </NavbarContent>

      <Drawer
        className="dark:bg-black/10 bg-white/70 backdrop-blur-md"
        isOpen={isDrawerOpen}
        onOpenChange={setIsDrawerOpen}
        placement="right"
      >
        <DrawerContent className="w-[70vw] rounded-xl pt-10">
          <DrawerHeader className="text-2xl dark:text-cyan-300 text-blue-600">Menu</DrawerHeader>
          <div className="mx-10 mt-6 flex flex-col gap-2 overflow-y-auto list-none">
            {siteConfig.navMenuItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <NavbarMenuItem key={`${item.label}-${index}`}>
                  <Link
                    color={
                      index === siteConfig.navMenuItems.length - 2
                        ? "primary"
                        : index === siteConfig.navMenuItems.length - 1
                          ? "danger"
                          : "foreground"
                    }
                    href={item.href}
                    size="lg"
                    className="flex items-center py-1 gap-2"
                    onClick={() => setIsDrawerOpen(false)}
                  >
                    <Icon className="w-5 h-5" />
                    {item.label}
                  </Link>
                </NavbarMenuItem>
              );
            })}
          </div>
          <DrawerFooter />
        </DrawerContent>
      </Drawer>
    </HeroUINavbar>
  );
};
