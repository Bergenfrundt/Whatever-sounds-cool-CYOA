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
    alert("You chose to hide behind a tree. Boy, was that ever stupid. You didn't realize that wolves have a superior sense of sight and smell, and could easily find you. They saw you as a threat, and ripped your stomach out before leaving you on the ground to bleed to death. Rest in peace. THE END.")
}
