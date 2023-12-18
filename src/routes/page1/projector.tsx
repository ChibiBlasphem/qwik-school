import { Slot, component$, useContext, useStyles$ } from "@builder.io/qwik";
import styles from "./styles.css?inline";
import { searchContextId } from "~/contexts/search-context-id";

export interface ProjectorProps {
  // text: string;
  // color: string;
}

export const Projector = component$(() => {
  useStyles$(styles);
  const { valueSignal, colorSignal } = useContext(searchContextId);

  return (
    <div>
      <span class="default">
        <Slot />
      </span>
      <span class="default-fallback">Some default text:</span>{" "}
      <span style={{ color: colorSignal.value }}>{valueSignal.value}</span>
    </div>
  );
});
