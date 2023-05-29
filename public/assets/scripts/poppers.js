import { createPopper } from "@popperjs/core";
const popcorn = document.querySelector("#fab-logo");
const tooltip = document.querySelector("#tooltip");
createPopper(popcorn, tooltip, {
  placement: "left",
  modifiers: [
    {
      name: "offset",
      options: {
        offset: [0, 8],
      },
    },
  ],
});
