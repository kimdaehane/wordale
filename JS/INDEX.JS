let attempts = 0;
let index = 0;

function appStart() {
  const handlekeydown = (event) => {
    const key = event.key.toUpperCase();
    const keyCode = event.Keycode;
    console.log("event.key , event.Keycode");
    const thisBlock = document.querySelector(
      `.data-key [data-index='${attempts}${index}']`
    );
    if (event.key === "Enter");{
        handleEnterkey();
    }

    
    else if (index === 5) return;
    else if (65 <= keyCode && keyCode <= 90) {
      thisBlock.innerText = key;
      index += 1;
    }
  };
}
window.addEventListener("keydown", handlekeydown);

appStart();
