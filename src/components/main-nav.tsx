"use client"

import Link from "next/link"
import * as React from "react"

import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const posts: { title: string; href: string; description: string }[] = [
  {
    title: "React",
    href: "/blog/react",
    description:
      "Learn React.js and Next.js in simple to understand articles",
  },
  {
    title: 'Javascript',
    href: "/blog/javascript",
    description:
      "Learn Javascript in simple to understand articles",
  },
  {
    title: "CSS",
    href: "/blog/css",
    description:
      "Learn CSS in simple to understand articles",
  },
  {
    title: "Performance",
    href: "/blog/performance",
    description:
      "Learn performace in simple to understand articles",
  },
  {
    title: 'Animation',
    href: "/blog/animation",
    description:
      "Learn Animation in simple to understand articles",
  },
  {
    title: 'Career',
    href: "/blog/career",
    description:
      "Learn Career in simple to understand articles",
  }


]

export function MainNav() {
  return (
    <div>
    <NavigationMenu>
      <NavigationMenuList>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Posts</NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              {posts.map((posts) => (
                <ListItem
                  key={posts.title}
                  title={posts.title}
                  href={posts.href}
                >
                  {posts.description}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>
        <NavigationMenuItem>
          <Link href="/docs" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              About
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
    </div>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
