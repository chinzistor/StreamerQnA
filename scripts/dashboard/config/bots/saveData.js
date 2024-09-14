function saveData(name) {
    localStorage.setItem(`connection${name}UserName`, document.getElementById(`${name}UserName`).value);
    localStorage.setItem(`connection${name}OAuth`, document.getElementById(`${name}OAuth`).value);
    localStorage.setItem(`connection${name}TimeOut`, document.getElementById(`${name}TimeOut`).value);

    refreshConnection();
}