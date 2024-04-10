"use client";

import Link from "next/link";

type Props = {
  routes: string[];
};

export function Nav(props: Props) {
  return (
    <ul>
      {props.routes.map((route) => (
        <li key={route}>
          <Link href={route}>{route}</Link>
        </li>
      ))}
    </ul>
  );
}
