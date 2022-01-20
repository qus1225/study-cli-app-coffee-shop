import colors from "colors";
import { types } from "../lib/values";

// export function to list coffee
export default function () {
  console.log("COFFEE MENU");
  console.log("------------------");

  // list on separate lines
  types.forEach((type) => {
    console.log(
      "%s %s",
      colors.bold(type.name),
      colors.grey("/ " + type.price)
    );
  });
}
