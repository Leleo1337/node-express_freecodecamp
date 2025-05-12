import fs, { writeFile } from "fs";

fs.readFile("./content/first.txt", "utf-8", (err, result) => {
   if (err) {
      console.log(err);
      return;
   }
   const first = result;
   console.log(first);
   fs.readFile("./content/second.txt", "utf-8", (err, result) => {
      if (err) {
         console.log(err);
         return;
      }
      const second = result;
      console.log(second);
      writeFile("./content/result-async.txt", `here is the result: ${first}, ${second}`, (err, result) => {
         if (err) {
            console.log(err);
            return;
         }
         console.log(result);
      });
   });
});
