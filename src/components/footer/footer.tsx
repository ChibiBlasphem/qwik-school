import { component$, useStylesScoped$ } from "@builder.io/qwik";
import styles from "./footer.css?inline";

export default component$(() => {
  useStylesScoped$(styles);

  return (
    <footer>
      <select>
        <option>ANOTHER SELECT</option>
      </select>
      I AM THE FOOTER
    </footer>
  );
});
