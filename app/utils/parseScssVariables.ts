export const parseScssVariables = (fileString: string) =>
  fileString
    .split("\n")
    .filter((line) => line && ["$", ": ", ";"].every((s) => line.includes(s)))
    .reduce((prev, cur) => {
      const keyVal = cur.split(": ");
      prev[
        keyVal[0].replace("$", "").replace(new RegExp("-", "g"), ".")
      ] = keyVal[1].replace(";", "").replace("\r", "");

      return prev;
    }, {});
