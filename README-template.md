# Frontend Mentor - Multi-step form solution

This is a solution to the [Multi-step form challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ).  

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

- Complete each step of the sequence
- Go back to a previous step to update their selections
- See a summary of their selections on the final step and confirm their order
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page
- Receive form validation messages if:
  - A field has been missed
  - The email address is not formatted correctly
  - A step is submitted, but no selection has been made

### Links

- Solution URL: [Add solution URL here]
- Live Site URL: [Add live site URL here]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework


### What I learned

Learned about Redux toolkit

To see how you can add code snippets, see below:

```js
const addOnsNext= ()=>{
		const addplan=[];
		if(planLevel && addOns){
			addOns.forEach(add => {
				const addOnsAmt= parseInt(document.querySelector("#"+add+"ed h3").textContent.match(/\d+/));
				addplan.push(addOnsAmt);
			});
			if( addplan.length > 0){
				const toatalAddOns= addplan.reduce((pre,cur)=> pre + cur);
				dispatch(addOnsTotal(toatalAddOns));
			}
		}
        router.push("/summary");
	}
```

### Useful resources

- [https://www.youtube.com/watch?v=HKU24nY8Hsc&ab_channel=TheNetNinja] - This was amazing platform for redux.

## Author

- Website - [Ambadi](https://github.com/Soaphub/Mysite/)
- Frontend Mentor - [@Soaphub](https://www.frontendmentor.io/profile/Soaphub)

## Acknowledgments

The udemdy coarse by Angela helped a lot in completing the project.

