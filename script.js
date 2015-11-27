var userChoice1 = confirm("Are you ready to play?");
if (userChoice1 === true) {
    var directionChoice1 = prompt("You woke up alone. Nothing but the vast forest that seemed to extend for miles. Man. You sure screwed up this time. What did you do? Did you [go forward], [go left], or [go right]?"); //The correct direction will be "go left"
}
if (directionChoice1 === "go forward") {
    var directionChoice1AfterFwd = prompt("You began to walk forward. You were walking for what felt like hours, but was really only fifteen minutes.Your legs felt like they were on fire. The pain was almost too much to continue walking. You sat down to gather your thoughts and relax for a bit, and you ended up falling asleep. You wake up, and it was too dark to see outside. You'd realized your mistake by now, and you knew you had to act fast. In the distance, you heard the howling of wolves. You knew that when they howled, it meant they found food. Did you [run away], or [hide]?");
}
if (directionChoice1AfterFwd === "run away") {
    alert("You ran. You ran, and ran, and ran, and ran, and ran, and ran, and ran, and ran, and ran, and ran, and ran, and ran, but to no avail. Wolves sure as hell are fast. They caught up to you, because you looked to them like easy prey. They tore you apart with ease. Rest in peace. GAME OVER.");
}
if (directionChoice1AfterFwd === "hide") {
    alert("You chose to hide behind a tree. Boy, was that ever stupid. You didn't realize that wolves have a superior sense of sight and smell, and could easily find you. They saw you as a threat, and ripped your stomach out before leaving you on the ground to bleed to death. Rest in peace. THE END.");
}
//that's [go forward] done
if (directionChoice1 === "go right") {
    var directionChoice1AfterRight = prompt("You spent a few minutes looking around before finally deciding to move to your right. You knew you were going to have to move quickly before nightfall. You'd need tools. You'd need weapons, and you'd need shelter. After walking for maybe thirty minutes, you came to a halt. You realized that you needed some wood for weapons, tools, and shelter. You had to find a way to cut some wood. Do you [punch the wood], attempt to [pull on a tree], or [grab a rock] and smash the tree?");
}
if (directionChoice1AfterRight === "punch the wood") {
    alert("This isn't Minecraft. You scream eternally with a bloody and broken fist.");
}
if (directionChoice1AfterRight === "pull on a tree") {
    var directionChoice1AfterPullTree = prompt("You started to bear hug the smallest tree you could find. Surprisingly, you were able to rip it out by it's roots. But then you realized that you needed something to chop the wood, and you would need more than the twigs you could rip off the top of the tree. Do you [karate chop] the wood, or do you [jump] on it until it snaps?");
}
if (directionChoice1AfterPullTree === "karate chop") {
    alert("Well, at least you tried. You broke your pinkie, and the rest of your hand as well. You started screaming eternally. RIP. GAME OVER.");
}
if (directionChoice1AfterPullTree === "jump") {
    alert("You jumped on the tree, and it snapped! A piece of it flies up and knocked you out, and wolves then come and eat you up. Well, at least you snapped the wood. GAME OVER.");
}
if (directionChoice1AfterRight === "grab a rock") {
    var directionChoice1AfterRock = prompt("You found the sharpest rock you could in the immediate area. After forty five minutes of chopping away, you got a few logs, enough to build basic tools. What did you build? An [axe], or a [sword]?");
}
if (directionChoice1AfterRock === "axe") {
    alert("You realized you had nothing to attach the wood to the sharp rock. You smashed your head on the rock to end the suffering of your own stupidity. THE END");
}
if (directionChoice1AfterRock === "sword") {
    alert("You realized you had nothing to attach the wood to the sharp rock. You smashed your head on the rock to end the suffering of your own stupidity. THE END");
}
//that's [go right] done.
if (directionChoice1 === "go left") {
    alert("You died. RIP. GAME OVER.")
    var directionChoice1AfterLeft = prompt("You thought. LOL. Back on track. You turned to your left and looked into the distance. 
