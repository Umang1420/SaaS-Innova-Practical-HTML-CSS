let create = document.getElementById("create");
create.addEventListener("click", form);

function form() {
  event.preventDefault();

  let inputfiled = prompt("Enter total fileds");

  if (inputfiled === null || inputfiled.trim() === "") {
    location.reload();
    return;
  }

  let fileds = parseInt(inputfiled);

  let hedding = document.getElementById("text");
  hedding.innerText = "Dynamic Ragistration Form";

  let displayfiled = document.getElementById("fileds");
  displayfiled.innerHTML = "";

  let btns = document.getElementById("btns");
  btns.innerHTML = "";

  for (let i = 0; i < fileds; i++) {
    let type = prompt("Enter type (text/email/password/date/radio/checkbox)");

    if (type === null || type.trim() === "") {
      location.reload();
      return;
    }

    if (type == "radio" || type == "checkbox") {
      let groupname = prompt(`Enter ${type} name`);

      if (groupname === null || groupname.trim() === "") {
        location.reload();
        return;
      }

      let groupnum = prompt(`How many ${type} options do you want?`);

      if (groupnum === null || groupnum.trim() === "") {
        location.reload();
        return;
      }

      groupnum = parseInt(groupnum);

      let groupLabel = document.createElement("label");
      groupLabel.innerHTML = groupname;
      displayfiled.appendChild(groupLabel);

      for (let j = 0; j < groupnum; j++) {
        let optionName = prompt(`Enter option ${j + 1} name`);

        if (optionName === null || optionName.trim() === "") {
          location.reload();
          return;
        }

        let optionDiv = document.createElement("div");

        let newfiled = document.createElement("input");
        newfiled.type = type;
        newfiled.value = optionName;

        if (type == "radio") {
          newfiled.name = "field" + i;
        }

        let label = document.createElement("label");
        label.innerHTML = optionName;

        optionDiv.appendChild(newfiled);
        optionDiv.appendChild(label);

        displayfiled.appendChild(optionDiv);
      }

      continue;
    }

    let label = document.createElement("label");
    label.textContent = `${type} Field`;

    let newfiled = document.createElement("input");
    newfiled.type = type;

    displayfiled.appendChild(label);
    displayfiled.appendChild(newfiled);
  }

  let button = document.createElement("button");
  button.type = "submit";
  button.innerText = "Submit";

  btns.appendChild(button);
}
