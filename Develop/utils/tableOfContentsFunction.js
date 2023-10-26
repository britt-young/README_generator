function renderTableOfContents(tableOfContents) {
    if(tableOfContents ===  Installation) {
        return "(#installation)";
    } else if (license === "Usage") {
        return "(#usage)";
      } else if (license === "License") {
        return "(#license)";
      }else if (license === "Contributions") {
        return "(#contributions)";
      } else if (license === "Test") {
        return "(#test)";
      } else {
        // If there is none, return an empty string
        return "";
      }
}

module.exports = renderTableOfContents;