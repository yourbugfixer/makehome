import axios from "axios";

export const api = axios.create({
  //baseURL: "https://api.kolkataking.site/api",
  baseURL: "http://localhost:5000/",
});

export function selectAll(e) {
  var checkboxes = document.getElementsByTagName("input");

  if (e.target.checked === true) {
    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].type === "checkbox") {
        checkboxes[i].checked = true;
      }
    }
  } else {
    for (var j = 0; j < checkboxes.length; j++) {
      if (checkboxes[j].type === "checkbox") {
        checkboxes[j].checked = false;
      }
    }
  }
}

export const getRandomColor = () => {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const getInitials = (name) => {
  let initials;
  const nameSplit = name.split(" ");
  const nameLength = nameSplit.length;
  if (nameLength > 1) {
    initials =
      nameSplit[0].substring(0, 1) + nameSplit[nameLength - 1].substring(0, 1);
  } else if (nameLength === 1) {
    initials = nameSplit[0].substring(0, 1);
  } else return;

  return initials.toUpperCase();
};

export const createImageFromInitials = (size, name, color) => {
  if (name == null) return;
  name = getInitials(name);

  const canvas = document.createElement("canvas");
  const context = canvas.getContext("2d");
  canvas.width = canvas.height = size;

  context.fillStyle = "#ffffff";
  context.fillRect(0, 0, size, size);

  context.fillStyle = `${color}50`;
  context.fillRect(0, 0, size, size);

  context.fillStyle = color;
  context.textBaseline = "middle";
  context.textAlign = "center";
  context.font = `${size / 2}px Roboto`;
  context.fillText(name, size / 2, size / 2);

  return canvas.toDataURL();
};
