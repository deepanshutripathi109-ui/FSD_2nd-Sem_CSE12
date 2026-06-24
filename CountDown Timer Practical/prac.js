function countDown() {
    const num = parseInt(document.getElementById("num").value);
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (isNaN(num) || num < 1) {
        result.innerHTML = "<p style='color:red;'>Please enter a valid number greater than 0.</p>";
        return;
    }

    let i = num;
    result.innerHTML = "<p>⏳ Countdown starting...</p>";

    const interval = setInterval(() => {
        if (i >= 1) {
            result.innerHTML += `<p>${i}</p>`;
            i--;
        } else {
            result.innerHTML += "<p>🚀 <strong>Blast Off!</strong></p>";
            clearInterval(interval);
        }
    }, 500);
}