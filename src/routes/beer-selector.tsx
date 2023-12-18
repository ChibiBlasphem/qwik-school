import {
  Resource,
  component$,
  useResource$,
  useStylesScoped$,
} from "@builder.io/qwik";
import styles from "./beer-selector.css?inline";

export interface Beer {
  id: number;
  name: string;
}

export const BeerSelector = component$(() => {
  useStylesScoped$(styles);

  const beersResource = useResource$<Beer[]>(async () => {
    const res = await fetch("http://localhost:5173/api/beers");
    return res.json();
  });

  return (
    <div>
      <Resource
        value={beersResource}
        onPending={() => <span>Loading...</span>}
        onRejected={(reason) => <span>Error... {reason}</span>}
        onResolved={(beers) => (
          <select name="beer-selector" id="beer-selector">
            {beers.map((beer) => (
              <option value={beer.id} key={beer.id}>
                {beer.name}
              </option>
            ))}
          </select>
        )}
      />
    </div>
  );
});
