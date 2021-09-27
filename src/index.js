const messages = [
    "leonardo",
    "jessica",
    "nadia",
    "irvin"
];

const randomMsg = () => {
    const message = messages[Math.floor(Math.random() * messages.length)];
    console.log(message);
}

module.exports = { randomMsg };

