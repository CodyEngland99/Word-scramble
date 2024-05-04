// check to see if word is correct
// make skip btn
// track score
// make time limit

const timeLeft = document.getElementById("time-left");
const userScore = document.getElementById("user-score");
const skipBtn = document.getElementById("skip-word-btn");
const subBtn = document.getElementById("submit-btn");

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
];

const medium = ["RIVER", "FOOTBALL", "AIRPLANE", "HELLO", "TITLE", "TRIKE"];

const hard = ["VEHICLE", "VOWELS", "CONTAINER", "SATURN", "SCRABBLE"];

const insane = ["WORDS", "WORDS"];

// STARTING GAME
const startGame = (e) => {
	const startGameCont = document.getElementById("start-game-container");

	startGameCont.classList.add("display-none");

	switch (e) {
		case "easy": {
			randomWord(easy);
			break;
		}
		case "medium": {
			randomWord(medium);
			break;
		}
		case "hard": {
			randomWord(hard);
			break;
		}
		case "insane": {
			randomWord(insane);
			break;
		}
	}
};

// INDEX NUMBER FOR WORDS
let curLevel = [];

let wordIndex = [];

// PULLIONG RANDOM WORD
const randomWord = (diff) => {
	//SETTING LEVEL TO ARR
	curLevel.push(diff);
	// USING VAR TO REMBER THE LEVEL
	let level = curLevel[0];

	const mixedWord = document.getElementById("mixed-word");

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

//CHECKING IF WORK IS CORRECT
const userInput = document.getElementById("word-guess");

const checkingWord = (e) => {
	// MAKING USER INPUT ALL UPPER CASE FOR ARR
	const userInputToUpper = userInput.value.toUpperCase();

	// GETTING THE LAST NUMBER IN THE ARRAY FOR THE INDEX OF CUR WORD
	let postOFWord = wordIndex[0];
	let gameLevel = curLevel[0][postOFWord];

	if (userInputToUpper === gameLevel) {
		wordIndex.pop();
		randomWord();
	} else {
		userInput.value = "";
		return;
	}
};

userInput.addEventListener("keydown", (e) => {
	if (e.code === "Enter") {
		checkingWord();
		userInput.value = "";
	}
});
