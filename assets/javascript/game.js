var hangman = {
	wins: 0,
	guessesLeft: 12,
	words: ["desert", "mesa", "cattle", "cactus", "desperado", "saloon", "cowboy", "saguaro", "coyote", "apache", "comanche", "outlaw"],
	wrongLetters: [],
	currentWord:{},
	displayWord: "",
	getWord: function(){
		this.guessesLeft=12
		this.wrongLetters=[]
		this.currentWord={}
		this.displayWord=""
		var randomNum = Math.floor(Math.random() * this.words.length);
		var wordLetters = this.words[randomNum].split("");
		for(i = 0; i < wordLetters.length; i++) {
			this.currentWord[i] = [wordLetters[i], "_"];
			this.displayWord = this.displayWord.concat(this.currentWord[i][1]+ " ");
		}
		console.log(this.currentWord)
		console.log(this.displayWord)
		this.grabId("word").innerHTML = this.displayWord;
	},
	grabId: function(element) {
		var grab = document.getElementById(element);
		return grab;
	},
	guess: function() {
		
	}


};

//document.onkeyup = function(event) {
//	var typing = document.createTextNode(event.ey + ", ");
//	hangman.grabId("wrong").appendChild(typing);
//};
