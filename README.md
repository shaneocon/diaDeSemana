# diaDeSemana
# Shane O'Connell
## 12-17-2020

## User Story

![UserStory](./assets/img/userStory.png)

## Acceptance Criteria

![AcceptanceCriteria](./assets/img/criteria.png)

## Pseudocode 
12/16

  - Looking at the demo page, the workday planner begins, of course, with the current date. 

    - Need to keep track of and display the correct day when the page loads.

    - Information must be saved, even through reloads.  
            - localStorage synced into all time slots (could this be easier by
             having all time slots contained to same "container"?)

    - Colors of hour blocks must coordinate with correct time of day. Ex:  Red for current hour, green for future, and gray for hours past. 

    - Each Hour box will be an input box and needs to be saved with a click on the save button for __that__ hour.

    - Avoid loops

#### Variables

- var nineAm = $("#9am");
- var tenAm = $("#10am");
- var elevenAm = $("#11am");
- var twelvePm = $("#12pm");
- var onePm = $("#13pm");
- var twoPm = $("#14pm");
- var threePm = $("#15pm");
- var fourPm = $("#16pm");
- var fivePm = $("#17pm");

- var hourSpan;
- var userInput;

# Summary Description

This assignment was yet another tricky one but I was able to get around it and figure it out thanks to the help of my classmates and instructor.  We were able to form study groups this week that I think will prove more and more useful with each unit.

The app works great, saves user input to localStorage upon the click of the save button for the corresponding hour and displays that info upon reloading.  

The use of jQuery has been a huge help to my understanding of the DOM and Javascript.  
