import { type Signal, createContextId } from "@builder.io/qwik";

export interface SearchContextState {
  valueSignal: Signal<string>;
  colorSignal: Signal<string>;
}

export const searchContextId =
  createContextId<SearchContextState>("searchContextId");
