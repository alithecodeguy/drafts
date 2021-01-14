document.getElementById("btnAppend").addEventListener("click", () => {
  alert("Start");

  const img = document.createElement("img");

  img.src = "images/event-loop.gif";

  document.body.appendChild(img);

  alert("End");
});
