import {
  component$,
  useContextProvider,
  useSignal,
  useTask$,
} from "@builder.io/qwik";
import { Projector } from "./projector";
import { searchContextId } from "~/contexts/search-context-id";

export default component$(() => {
  const valueSignal = useSignal("");
  const colorSignal = useSignal("black");

  useContextProvider(searchContextId, {
    valueSignal,
    colorSignal,
  });

  useTask$(({ track }) => {
    track(valueSignal);

    if (valueSignal.value === "llama") {
      colorSignal.value = "red";
      return;
    }
    colorSignal.value = "black";
  });

  return (
    <div>
      This is Page 1
      <hr />
      <input
        type="text"
        placeholder="Type your search"
        bind:value={valueSignal}
      />
      <hr />
      <Projector>Your message is:</Projector>
    </div>
  );
});
