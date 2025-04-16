export function getDataByPathParams(destination, locationType, locationName) {
   const filteredData = destination.filter((data) => {
      return data[locationType].toLowerCase() === locationName.toLowerCase();
   });

   return filteredData;
}
