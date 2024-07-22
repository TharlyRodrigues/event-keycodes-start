/*
//  método 1

window.addEventListener("keydown", (e) => {
  const insert = document.getElementById("insert");

  insert.innerHTML = `
        <div class="key">
          ${e.key}
          <small>e.key</small>
        </div>
        
        <div class="key">
          ${e.keyCode}
          <small>e.keyCode</small>
        </div>

        <div class="key">
          ${e.code}
          <small>e.code</small>
        </div>
  `;
});
*/

function showKeyCode(e) {
  const insert = document.getElementById("insert");

  insert.innerHTML = "";

  const keyCode = {
    "e.key": e.key === " " ? "space" : e.key,
    "e.keyCode": e.keyCode,
    "e.code": e.code,
  };

  for (let key in keyCode) {
    const div = document.createElement("div");
    div.className = " key";
    const small = document.createElement("small");

    const keyText = document.createTextNode(key);
    const valueText = document.createTextNode(keyCode[key]);

    small.appendChild(keyText);
    div.appendChild(valueText);
    div.appendChild(small);

    insert.appendChild(div);
  }

  console.log(keyCode);
}

window.addEventListener("keydown", showKeyCode);
