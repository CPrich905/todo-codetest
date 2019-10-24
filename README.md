# Graduate Exercise

## Setup

Clone this repository and run: `npm run serve` from the terminal. A new window will open up with the ToDo app.

Requirements:
- complete the following tasks using React.js
- git (https://help.github.com/en/articles/set-up-git)
- node/npm (https://nodejs.org/en/download/)
- github account (https://github.com)

## Timeframe: 4 hrs

## Approach
My first action was to create a simple wire-frame for my React set up, separating out the components needed for the task. As the data-manipulation for the task was relatively minimal, I wanted to focus on a clear, logical presentation of the data to maximise user experience.

For this same reason, I kept my styling as simple as possible while prioritising functionality. This meant displaying a counter and next task at the top for quick reference, and prioritising incomplete over completed tasks for mobile styling.

When it came to the styling of the site, I again opted for simple over complex. The first thing the user sees below the headline is a counter of completed and remaining tasks and the next task on the todo list (based on id.)

## Wins
I am quite pleased with the overall layout and functionality of this app, in particular separating out the independent scrolling for remaining and completed tasks  while on desktop. I feel that this allows the user to better reference the separate lists and is cleaner than having a single list with strike throughs on completed tasks.

## Challenges
This task was relatively simple, however I did have some issues with my initial setup which ate in to the time I had available for this task. These problems were due to an incorrect entry in the webpack.config file and once identified the project ran smoothly.

## Future development
If I more time with this project, I would have liked to introduce CRUD functionality and a separate back-end, moving the sort/filter functions to the back end to enable further filtering options & interrelation between tasks.
