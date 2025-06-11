async function sendToGPT() {
  const input = document.getElementById("userInput").value;
  const responseBox = document.getElementById("responseOutput");
  responseBox.innerText = "Pensando... 🤔";

  try {
    const response = await fetch("http://localhost:5000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: input })
    });

    const data = await response.json();
    responseBox.innerText = data.reply;
  } catch (error) {
    responseBox.innerText = "Error al conectar con la IA.";
    console.error(error);
  }
}
backend/app.py