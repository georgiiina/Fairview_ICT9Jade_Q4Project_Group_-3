
function displayQuote() {
    const quotes = ["Success is a journey, not a destination.", "Small steps lead to big results.", "I'm 67, but not too old to make a fresh start.", "To thine own self, be true.", "Depression isn't a war you win. It's a battle you fight every day.", "A hero would sacrifice you for the world, but a villain would sacrifice the world for you", "I'd rather die standing than live kneeling.", "A heart is like bedrock, the only way to break it is by cheating.", "Friendship is like a Golden Apple; expensive to make, but it can save your life when everything else is burning.", "Isn't it ironic? That a king loses to a lord.", "My soldiers push forward! My soldiers scream out! My soldiers RAAAAAGE! "];
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    

    if(document.getElementById("quoteBox")) {
        document.getElementById("quoteBox").innerHTML = randomQuote;
    }
}
