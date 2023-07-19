for (const tag of document.getElementsByTagName("*")) {
  tag.style.backgroundColor = "black"; 
  tag.style.color = "white";
  
  // custom color for special elements
  if(tag.tagName.toUpperCase() === "A") {
    tag.style.color = "#7B68EE";
  } else if(tag.tagName.toUpperCase() === "H1") {
    tag.style.color = "#8B008B";
  } else if(tag.tagName.toUpperCase() === "H2") {
    tag.style.color = "#9932CC";
  } else if(tag.tagName.toUpperCase() === "H3") {
    tag.style.color = "#87CEEB";
  } else if(tag.tagName.toUpperCase() === "STRONG") {
    tag.style.color = "#7B600E";
  }
}
