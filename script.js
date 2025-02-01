function rollDice(sides) {
    const isAdvantage = document.getElementById('advantage').checked;  // Check if Advantage is enabled
    const diceResult = document.getElementById('diceResult');
    const rollingDice = document.getElementById('rollingDice');
    
    // Trigger the dice roll animation
    rollingDice.style.animation = 'roll 1.5s ease-out';

    // Wait for the animation to complete before showing the result
    setTimeout(() => {
        let rollResult;

        if (isAdvantage) {
            // Roll the die twice and take the higher result
            const roll1 = Math.floor(Math.random() * sides) + 1;
            const roll2 = Math.floor(Math.random() * sides) + 1;
            rollResult = Math.max(roll1, roll2);
        } else {
            // Roll the die once
            rollResult = Math.floor(Math.random() * sides) + 1;
        }

        // Stop the animation and show the final result
        rollingDice.style.animation = ''; // Reset the animation
        diceResult.textContent = `You rolled a D${sides}: ${rollResult}`;
    }, 1500); // The animation duration matches the dice roll animation duration
}
