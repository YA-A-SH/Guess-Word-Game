🧩 Guess The Word (Wordle Clone - Pure JS)
After finishing the Hangman game, I wanted to build something a bit more complex. This is a Wordle-inspired game where the player has to guess a random word within a limited number of tries.
(I find this idea from al zero web school thanks for him)

⏳ The Backstory
Built in: April/May 2025.

Status: Archived legacy project.

Why this? This project was my "final boss" in learning DOM manipulation. I wanted to see if I could handle dozens of input fields dynamically without losing my mind!

🛠️ What's happening under the hood? (The Logic)
This wasn't just about CSS; the JavaScript here is much more advanced than my previous projects:

Dynamic UI Generation: The game generates rows (Tries) and columns (Letters) on the fly based on the length of the random word.

Smart Input Navigation: I wrote a custom focus logic. When you type a letter, the focus automatically jumps to the next input. I also handled Backspace and Arrow Keys for a smooth typing experience.

Validation Logic:

Green: Letter is correct and in the right place.

Yellow: Letter exists in the word but in the wrong place.

Gray: Letter doesn't exist at all.

Hint System: I implemented a hint button that randomly picks an empty input and fills it with the correct letter, but you only get 2 hints!

Keyboard Support: You can hit Enter to check your word, just like a pro.

🧠 Reflections
Looking at the code now, I used some "clever" tricks like Array.from().filter() to manage the empty inputs for the hint system. It’s funny to see how I was manually managing states before I met React. It was a great exercise in understanding how location.reload() and focus() work in real-world scenarios.

Note: I used AI to help craft this README because it writes a clearer and shorter description of the project than I could in English!
