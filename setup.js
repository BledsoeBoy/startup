function login() {
    const nameEl = document.querySelector("#name");
    localStorage.setItem("userName", nameEl.value);
    window.location.href = "play.html";
  }

function boat1Data() {
    let boat1 = [];
    const start = document.querySelector('.boat1Start').value;
    const end = document.querySelector('.boat1End').value;
    const data = {
      start,
      end,
    }
    boat1.push(data);
    let string = JSON.stringify(boat1);
    localStorage.setItem("boat1info", string);
}

function boat2Data() {
    let boat2 = [];
    const data = {
      start: document.querySelector('.boat2Start').value,
      end: document.querySelector('.boat2End').value,
    }
    boat2.push(data);
    let string = JSON.stringify(boat2);
    localStorage.setItem("boat2info", string);
}

function boat3Data() {
    let boat3 = [];
    const data = {
      start: document.querySelector('.boat3Start').value,
      end: document.querySelector('.boat3End').value,
    }
    boat1.push(data);
    let string = JSON.stringify(boat3);
    localStorage.setItem("boat1info", string);
}

function boat1Data() {
    let boat1 = [];
    const data = {
      start: document.querySelector('.boat1Start').value,
      end: document.querySelector('.boat1End').value,
    }
    boat1.push(data);
    let string = JSON.stringify(boat1);
    localStorage.setItem("boat1info", string);
}