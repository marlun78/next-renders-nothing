import { ReactNode } from "react";

import "./global.css";

type Props = {
  children: ReactNode;
};

export default function RootLayout(props: Props) {
  return (
    <html lang="en">
      <body>
        <fieldset>
          <legend>Root Layout</legend>
          {props.children}
        </fieldset>
      </body>
    </html>
  );
}
