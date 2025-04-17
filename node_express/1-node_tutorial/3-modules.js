// CommonJS, every file is module (by default)
// Modules – Encapsulated Code (only share minimum)
import { john, petter } from "./4-names.js";
import { sayHello } from "./5-utils.js";
import * as data from "./6-alternative-flavor.js";

console.log(data);

sayHello("susan");
sayHello(john);
sayHello(petter);
