function changeName() {
    let nameArr = ["Antkoviak Emmalee", "Arnold Conner", "Corkins Joseph", "Dempsey Kylee", "Dixon Zeke", "Fernando Luke", "Hale Conner", "Jansen Grace"];
    let nameTag = document.querySelector("#card-main > h2");

    nameTag.innerText = nameArr[ Math.floor( Math.random() * nameArr.length ) ];
}

function updateConn(element) {
    let elemClasses = element.classList;
    let connReq = document.querySelector("#conn-req .conn-button");
    let connReqCount = parseInt( connReq.innerText );
    let yourConn = document.querySelector("#span-count");
    let yourConnCount = parseInt ( yourConn.innerText )


    if (elemClasses.contains("yes")) {
        yourConnCount++;
        yourConn.innerText = yourConnCount;
    }
    else if (elemClasses.contains("no")) {
        yourConnCount--;
        yourConn.innerText = yourConnCount;
    }
    connReqCount--;
    connReq.innerText = connReqCount;

    element.parentElement.remove();
}