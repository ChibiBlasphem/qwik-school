import {
  type Signal,
  Slot,
  component$,
  useSignal,
  useTask$,
  createContextId,
  useContextProvider,
  useContext,
} from "@builder.io/qwik";
import { BeerSelector } from "./beer-selector";

export const contextId = createContextId<Signal<boolean>>("beerGiving");

export default component$(() => {
  const isMiskoVisibleSignal = useSignal(false);
  const didHeGetABeerSignal = useSignal(false);

  useContextProvider(contextId, didHeGetABeerSignal);

  useTask$(({ track }) => {
    track(didHeGetABeerSignal);

    if (didHeGetABeerSignal.value) {
      isMiskoVisibleSignal.value = true;
    }
  });

  return (
    <>
      <BeerGiver />

      {isMiskoVisibleSignal.value ? <Misko>I love Shai</Misko> : null}
    </>
  );
});

const BeerGiver = component$(() => {
  return (
    <div>
      <BeerSelector />
      <hr />
      <BeerGivingButton />
    </div>
  );
});

const Misko = component$(() => (
  <div>
    <div>Hi I'm Misko Yayy</div>
    <Slot />
  </div>
));

const BeerGivingButton = component$(() => {
  const gotBeerSignal = useContext(contextId);

  return (
    <button
      onClick$={() => {
        gotBeerSignal.value = true;
      }}
    >
      Give a Beer to Misko
    </button>
  );
});
