const enterButton = document.getElementById("enter");
const input = document.getElementById("userInput");
const list = document.querySelector("ul");
const item = document.getElementsByTagName("li");

const inputLength = () => input.value.length;

const listLength = () =>  item.length;

const createListElement = () => {
  const li = document.createElement("li"); // creates an element "li"
  li.appendChild(document.createTextNode(input.value)); //makes text from input field the li text
  list.appendChild(li); //adds li to ul
  input.value = ""; //Reset text input field

  //START STRIKETHROUGH
  // because it's in the function, it only adds it for new items
  function crossOut() {
    li.classList.toggle("done");
  }

  li.addEventListener("click", crossOut);
  //END STRIKETHROUGH

  // START ADD DELETE BUTTON
  const dBtn = document.createElement("button");
  dBtn.appendChild(document.createTextNode("X"));
  li.appendChild(dBtn);
  dBtn.addEventListener("click", deleteListItem);
  // END ADD DELETE BUTTON

  //ADD CLASS DELETE (DISPLAY: NONE)
  const deleteListItem = () => {
    li.classList.add("delete");
  };
  //END ADD CLASS DELETE
};

const addListAfterClick = () => {
  if (inputLength() > 0) {
    //makes sure that an empty input field doesn't create a li
    createListElement();
  }
};

const addListAfterKeypress = event => {
  if (inputLength() > 0 && event.which === 13) {
    //this now looks to see if you hit "enter"/"return"
    //the 13 is the enter key's keycode, this could also be display by event.keyCode === 13
    createListElement();
  }
};

enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);
