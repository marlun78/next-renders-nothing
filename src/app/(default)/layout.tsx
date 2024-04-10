import { ReactNode } from "react";
import { NavContainer } from "./_components/nav.container";

type Props = {
  children: ReactNode;
  slot1: ReactNode;
  slot2: ReactNode;
};

export default function DefaultLayout(props: Props) {
  return (
    <fieldset className="default-layout">
      <legend>Default Layout</legend>

      <NavContainer />

      <fieldset>
        <legend>Default Layout (Children)</legend>
        {props.children}
      </fieldset>
      <fieldset>
        <legend>Default Layout (Slot 1)</legend>
        {props.slot1}
      </fieldset>
      <fieldset>
        <legend>Default Layout (Slot 2)</legend>
        {props.slot2}
      </fieldset>
    </fieldset>
  );
}
