var hangman = {
	wins: 0,
	guessesLeft: 12,
	words: ["desert", "mesa", "cattle", "cactus", "desperado", "saloon", "cowboy", "saguaro", "coyote", "apache", "comanche", "outlaw"],
	wrongLetters: [],
	currentWord:{},
	displayWord: "",
	letters: "abcdefghijklmnopqrstuvwxyz",
	letterArray: [""],
	wordLength: 0,
	reset: function () {
		this.guessesLeft=12;
		this.wrongLetters=[];
		this.currentWord={};
		this.displayWord="";
		this.letterArray = this.letters.split("");
		console.log("Grabbed reset function");
	},
	getWord: function () {
		var randomNum = Math.floor(Math.random() * this.words.length);
		var wordLetters = this.words[randomNum].split("");
		this.wordLength = wordLetters.length;
		console.log(this.wordLength);
		for(i = 0; i < wordLetters.length; i++) {
			this.currentWord[i] = [wordLetters[i], "_"];
			this.displayWord = this.displayWord.concat(this.currentWord[i][1]+ "  ");
		};
		console.log(this.currentWord);
		console.log(this.displayWord);
		this.grabId("word").innerHTML = this.displayWord;
	},
	grabId: function(element) {
		var grab = document.getElementById(element);
		return grab;
	},
	guess: function() {
		console.log(this.letterArray);
		console.log(this.letterArray.length);
		var choice;
		var that=this;
		document.onkeydown = function(e) {
			console.log(e.which);
			var choice = e.key.toLowerCase(); 		//create letter choice
			if (e.which <91 && e.which >64) { 		//if key pressed is a letter
				for (i=0; i<that.letterArray.length; i++) {
					if (choice == that.letterArray[i]) {
						delete that.letterArray[i];
						console.log(that.currentWord)
						for (i=0; i<that.wordLength; i++){
							if (choice == that.currentWord[i][0]) {
								console.log(choice);
								console.log(that.displayWord)
							};
						};
					};
				};
			};
		};
		
	},


};


document.onkeyup = function(event) {
	hangman.guess();
};