// DIFF LEVELS
const easy = [
	"HOME",
	"EASY",
	"LIFE",
	"BIKE",
	"FLY",
	"EYE",
	"BEST",
	"WORD",
	"APP",
	"GAME",
	"MOP",
	"CAT",
	"DOG",
	"PAN",
	"RUG",
	"LOG",
	"TAP",
	"NET",
	"JAM",
	"SUN",
	"LIP",
	"NUT",
	"TAG",
	"FLAG",
	"CAP",
	"FAN",
	"HOP",
	"CUP",
	"HAT",
	"PEN",
	"BOX",
	"BAG",
	"LEG",
	"HOME",
	"EASY",
	"LIFE",
	"BIKE",
	"FLY",
	"EYE",
	"BEST",
	"WORD",
	"APP",
	"GAME",
	"MOP",
	"CAT",
	"DOG",
	"PAN",
	"RUG",
	"LOG",
	"TAP",
	"NET",
	"JAM",
	"SUN",
	"LIP",
	"NUT",
	"TAG",
	"FLAG",
	"CAP",
	"FAN",
	"HOP",
	"CUP",
	"HAT",
	"PEN",
	"BOX",
	"BAG",
	"LEG",
];

const medium = [
	"APPLE",
	"TABLE",
	"CHAIR",
	"HOUSE",
	"CAR",
	"TRAIN",
	"DOG",
	"CAT",
	"BALL",
	"BOOK",
	"PENCIL",
	"CLOCK",
	"DOOR",
	"WINDOW",
	"KEY",
	"CUP",
	"SPOON",
	"FORK",
	"PLATE",
	"KNIFE",
	"SHOE",
	"SOCK",
	"HAT",
	"COAT",
	"SHIRT",
	"PANTS",
	"DRESS",
	"SKIRT",
	"BAG",
	"PHONE",
	"LAMP",
	"GLASS",
	"PAPER",
	"PEN",
	"FAN",
	"DESK",
	"COMPUTER",
	"SCREEN",
	"MOUSE",
	"KEYBOARD",
	"MONITOR",
	"MOUSEPAD",
	"HEADPHONES",
	"SPEAKERS",
	"MICROPHONE",
	"TABLET",
	"CHAIR",
	"SOFA",
	"BLANKET",
	"PILLOW",
	"MIRROR",
	"BOTTLE",
	"CANDLE",
	"CLOCK",
	"TOWEL",
	"BRUSH",
	"BROOM",
	"DUSTER",
	"VACUUM",
	"SCISSORS",
	"RULER",
	"ERASER",
	"MARKER",
	"CRAYON",
	"PAINT",
	"CANVAS",
	"EASEL",
	"BRUSH",
	"EYE",
	"EAR",
	"NOSE",
	"MOUTH",
	"HAND",
	"FOOT",
	"FINGER",
	"TOE",
	"ARM",
	"LEG",
	"HEAD",
	"NECK",
	"BACK",
	"STOMACH",
	"CHEST",
	"SHOULDER",
	"ELBOW",
	"KNEE",
	"ANKLE",
	"WRIST",
	"THUMB",
	"INDEX",
	"MIDDLE",
	"RING",
	"PINKY",
	"CHEEK",
	"FOREHEAD",
	"CHIN",
	"JAW",
	"TEETH",
	"LIPS",
	"TONGUE",
];

const hard = [
	"ELEPHANT",
	"SUNFLOWER",
	"KEYBOARD",
	"PINEAPPLE",
	"UMBRELLA",
	"MOUNTAIN",
	"BACKPACK",
	"FIREPLACE",
	"WATERFALL",
	"BUTTERFLY",
	"SCORPION",
	"HUMMINGBIRD",
	"SNOWFLAKE",
	"CHEETAH",
	"LIONESS",
	"RHINOCEROS",
	"PARROT",
	"DRAGONFLY",
	"WILDFIRE",
	"TORNADO",
	"LIGHTNING",
	"WATERMELON",
	"CROCODILE",
	"FIREWORKS",
	"PENGUIN",
	"CHAMELEON",
	"BUTTERFLY",
	"HONEYBEE",
	"CATERPILLAR",
	"ELEPHANT",
	"SUNFLOWER",
	"KEYBOARD",
	"PINEAPPLE",
	"UMBRELLA",
	"MOUNTAIN",
	"BACKPACK",
	"FIREPLACE",
	"WATERFALL",
	"BUTTERFLY",
	"SCORPION",
	"HUMMINGBIRD",
	"SNOWFLAKE",
	"CHEETAH",
	"LIONESS",
	"RHINOCEROS",
	"PARROT",
	"DRAGONFLY",
	"WILDFIRE",
	"TORNADO",
];

// STARTING GAME
const startGameCont = document.getElementById("start-game-container");
const gameCont = document.getElementById("game-container");

const startGame = (e) => {
	const userInfo = document.getElementById("user-info");
	const userAlert = document.getElementById("user-name-alert");

	const user = userInfo.value;

	if (userInfo.value === "") {
		userAlert.classList.remove("display-none");
		return;
	}

	switch (e) {
		case "easy": {
			randomWord(easy);
			userName = user;
			userLevel = "easy";
			countDown(60);
			break;
		}
		case "medium": {
			randomWord(medium);
			userName = user;
			userLevel = "medium";
			countDown(160);
			break;
		}
		case "hard": {
			randomWord(hard);
			userName = user;
			userLevel = "hard";
			countDown(300);
			break;
		}
	}

	userInfo.classList.add("display-none");
	gameCont.classList.remove("display-none");
	userAlert.classList.add("display-none");
	startGameCont.classList.add("display-none");
};

//LEVEL PICKED
let curLevel = [];
// INDEX NUMBER FOR WORDS
let wordIndex = [];

// PULLIONG RANDOM WORD
const randomWord = (diff) => {
	disInput = userInput.disabled = false;
	//SETTING LEVEL TO ARR
	curLevel.push(diff);
	// USING VAR TO REMBER THE LEVEL
	let level = curLevel[0];

	const mixedWord = document.getElementById("mixed-word");
	mixedWord.classList.remove("display-none");

	let randomNum = Math.floor(Math.random() * level.length);

	let randomW = level[randomNum];

	// PUSHING NUMBER INTO ARR TO FIND INDEX IN CHECKING WORD FUN
	wordIndex.push(randomNum);

	// CALLING SHUFFLING FUCNTION
	let spacing = randomW.shuffle();

	// DISPLAYING WORD AND SPACING
	mixedWord.innerHTML = spacing.split("").join(" ");
};

// PUT LETTERS INTO ARRY TO SHUFFLE
function shuffleArray(array) {
	for (let i = array.length - 1; i; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

// SHUFFLING WORDS
String.prototype.shuffle = function (keep = "") {
	keep += "\\s";
	const chars = this.replace(new RegExp(`[${keep}]`, "gi"), ""),
		randomChars = shuffleArray([...chars]);

	let index = 0;
	return this.replace(
		new RegExp(`[^${keep}]`, "gi"),
		() => randomChars[index++]
	);
};

const subBtn = document.getElementById("submit-btn");

//CHECKING IF WORK IS CORRECT
const userInput = document.getElementById("word-guess");

const checkingWord = () => {
	if (userInput.value == "") {
		userInput.classList.add("no-input");
		return;
	}

	// MAKING USER INPUT ALL UPPER CASE FOR ARR
	const userInputToUpper = userInput.value.toUpperCase();

	// GETTING THE LAST NUMBER IN THE ARRAY FOR THE INDEX OF CUR WORD
	let postOFWord = wordIndex[0];
	let gameLevel = curLevel[0][postOFWord];

	if (userInputToUpper === gameLevel) {
		wordCorrectCount();
		userInput.classList.remove("no-input");
		wordIndex.pop();
		randomWord();
	} else {
		userInput.value = "";
		return;
	}
};

// SCORE OF USERS CORRECT WORDS

const userScore = document.getElementById("user-score");

let score = 0;

const wordCorrectCount = () => {
	score++;
	userScore.innerHTML = `Score: ${score}`;
};

//GAME RESTART
const gameRestart = () => {
	window.location.reload();
};

//SKIP THE WORD
const skipWord = () => {
	if (curLevel.length === 0) {
		return;
	} else {
		wordIndex.pop();
		randomWord();
	}
};

// TIMER FOR GAME

const countDown = (time) => {
	var countdown = time;
	var timerDisplay = document.getElementById("time-left");

	var timer = setInterval(function () {
		countdown--;
		timerDisplay.textContent = `${countdown}s`;
		if (countdown <= 0) {
			clearInterval(timer);
			endGame();
		}
	}, 1000);
};

// ENDING GAME
const endGame = () => {
	saveUserInfo();
	setDisplayHighScores();
	const mixedWord = document.getElementById("mixed-word");
	const gameEndTitle = document.getElementById("end-game");

	gameEndTitle.innerHTML = `Time is up! You scored ${score} points! Wanna play again?`;

	score = 0;
	userInput.value = "";
	userScore.innerHTML = `Score: ${score}`;
	disInput = userInput.disabled = true;
	curLevel = [];
	wordIndex = [];
	mixedWord.classList.add("display-none");
	startGameCont.classList.remove("display-none");
};

// SAVING USER NAME

let userName;
let userLevel;

const saveUserInfo = () => {
	const userInfo = [userName, userLevel, score];

	const checkingUser = JSON.parse(localStorage.getItem(userLevel));

	if (checkingUser === null) {
		localStorage.setItem(userLevel, JSON.stringify(userInfo));
	}

	const userGet = JSON.parse(localStorage.getItem(userLevel));

	if (userGet[2] <= score && userGet[1] === userLevel) {
		localStorage.setItem(userLevel, JSON.stringify(userInfo));
	} else {
		return;
	}
};

// DISPLAYING HIGH SCORES FOR LEVELS

const setDisplayHighScores = () => {
	const easyScore = document.getElementById("easy-score");
	const mediumScore = document.getElementById("medium-score");
	const hardScore = document.getElementById("hard-score");

	const easyLevel = JSON.parse(localStorage.getItem("easy"));

	easyScore.innerHTML = `${easyLevel[0]} ${easyLevel[2]} Points`;

	const mediumLevel = JSON.parse(localStorage.getItem("medium"));

	mediumScore.innerHTML = `${mediumLevel[0]} ${mediumLevel[2]} Points`;

	const hardLevel = JSON.parse(localStorage.getItem("hard"));

	hardScore.innerHTML = `${hardLevel[0]} ${hardLevel[2]} Points`;
};

let disInput = (userInput.disabled = true);

userInput.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		checkingWord();
		userInput.value = "";
	}
});

// RUNNING FOR HIGHSCORE
setDisplayHighScores();
