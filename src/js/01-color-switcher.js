function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
  }


  const startBtn = document.querySelector("button[data-start]");
  const stopBtn = document.querySelector("button[data-stop]");

  startBtn.addEventListener("click", onClickBtnStart);
  stopBtn.addEventListener("click", onClickBtnStop);


  function onClickBtnStart(e) {
    e.preventDefault();
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timeColorId = setInterval(()=>{
        const color = getRandomHexColor();
        document.body.style.backgroundColor = color;
    }, 1000)

  }
  function onClickBtnStop(e) {
    e.preventDefault();
    clearInterval(timeColorId);
    startBtn.disabled = false;
    stopBtn.disabled = true;
  }
