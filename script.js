document.addEventListener("DOMContentLoaded", function () {
    const yesButton = document.getElementById("yesbut");
    const noButton = document.getElementById("nobut");
    const headerText = document.getElementById("header-text");
    const gifElement = document.querySelector(".gif_container img");
    const loveElements = document.getElementById('love-elements'); // Get the love-elements container

    const headerMessages = [
        "Are you sure, Tanya? ❤️",
        "Really Sure cutu baccha? ❤️",
        "Think Again Sleeping Beauty.. ❤️",
        "Last Chance cutieeepie! ❤️",
        "Surely not? ❤️",
        "You Might Regret this! ❤️",
        "Give it another thought! ❤️",
        "This Could be a mistake! ❤️",
        "Don't be so cold ❤️",
        "Wouldn't you reconsider? ❤️",
        "Is that your Final answer? ❤️",
        "You're breaking my heart 😢"
    ];

    const words = ["Love", "Tanya", "Heart", "Valentine", "Forever", "Together", "Adore","sleeping beauty","yours cheeku ;)", "Cherish"];
    const quotes = [
        "I love you more than words can say.",
        "You make my heart sing.",
        "Every moment with you is a dream come true.",
        "My love for you is a journey, starting at forever, and ending at never.",
        "You are my sunshine on a cloudy day.",
        "You're the missing piece in my heart.",
        "I'm so lucky to have you in my life.",
        "Itna maarungi tumhe.",
        "The way you call me uncle :).",
        "Tanya",
        "cutiieeeeepiee",
        "MY cutu bacchaaa",


        // Add more quotes here
    ];


    let headerIndex = 0;

    if (noButton) {
        noButton.addEventListener("click", function () {
            headerIndex = (headerIndex + 1) % headerMessages.length;

            headerText.style.opacity = "0";
            setTimeout(() => {
                headerText.textContent = headerMessages[headerIndex];
                headerText.style.opacity = "1";
            }, 300);

            let currentSize = parseInt(getComputedStyle(yesButton).fontSize);
            let newSize = Math.min(currentSize + 10, 45);
            yesButton.style.fontSize = `${newSize}px`;

            yesButton.classList.add("glow");
            setTimeout(() => {
                yesButton.classList.remove("glow");
            }, 600);

            noButton.classList.add("shake");
            setTimeout(() => {
                noButton.classList.remove("shake");

                const maxX = window.innerWidth - noButton.offsetWidth;
                const maxY = window.innerHeight - noButton.offsetHeight;

                const randomX = Math.random() * maxX;
                const randomY = Math.random() * maxY;

                noButton.style.position = "absolute";
                noButton.style.left = `${randomX}px`;
                noButton.style.top = `${randomY}px`;
            }, 300);
        });
    }

    if (yesButton) {
        yesButton.addEventListener("click", function () {
            window.location.href = "yes.html";
        });
    }

    document.body.classList.add("background-glow");

    if (gifElement) {
        gifElement.classList.add("love-animation");
    }


    function createLoveElement() {
        const element = document.createElement('span');
        const randomWord = words[Math.floor(Math.random() * words.length)];
        element.textContent = randomWord;
        element.classList.add('love-message');
        setPosition(element);
        loveElements.appendChild(element);

        setTimeout(() => {
            element.remove();
        }, 5000);
    }

    function createLoveMessage() {
        const message = document.createElement('span');
        const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
        message.textContent = randomQuote;
        message.classList.add('love-message');
        setPosition(message);
        loveElements.appendChild(message);

        setTimeout(() => {
            message.remove();
        }, 7000);
    }

    function setPosition(element) {
        element.style.position = 'absolute';
        element.style.left = `${Math.random() * 100}vw`;
        element.style.top = `${Math.random() * 100}vh`;
    }

    setInterval(createLoveElement, 700);
    setInterval(createLoveMessage, 1000);
});