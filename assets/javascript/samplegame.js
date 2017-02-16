var hangman = {
	win:0,
	currentWord: ['sad', 'home', 'happy', 'summer'],


	randomWord: function(){
		var result = Math.floor(Math.random() * this.currentWord.length);
		var word = this.currentWord[result];

		return word;
	},

	guessRaiming: 9,

	grabId: function(element){
		var grab = document.getElementById(element);
		return grab;
	},

	output: function(el, val){
		this.grabId(el).textContent = val;
	}

};








document.onkeyup = function(event){
	var typing = document.createTextNode(event.ey + ",");

	hangman.grabId("guessed").appendChild(typing);

};


