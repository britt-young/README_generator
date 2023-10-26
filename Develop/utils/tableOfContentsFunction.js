function renderTableOfContents(tableOfContents) {
    if(tableOfContents ===  "Installation") {
        return "(#installation)";
    } else if (tableOfContents === "Usage") {
        return "(#usage)";
      } else if (tableOfContents === "License") {
        return "(#license)";
      }else if (tableOfContents === "Contributions") {
        return "(#contributions)";
      } else if (tableOfContents === "Test") {
        return "(#test)";
      } else {
        // If there is none, return an empty string
        return "";
      }
}

module.exports = renderTableOfContents;