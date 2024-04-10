"use client";

import Link from "next/link";

type Props = {
  routes: string[];
};

export function List(props: Props) {
  return (
    <ul>
      {props.routes.map((route) => (
        <li key={route}>
          <Link href={route}>{route}</Link> (
          <Link href={`${route}/_details`}>details</Link>)
        </li>
      ))}
    </ul>
  );
}
