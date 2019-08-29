# Group-design a `FRONT FONT`. Win an E-Scooter.
(Ok, not technically a font, just a sweet mess of web code and graphics :-) )

Design your own customized character and contribute it to the Front Font. If you participate you will automatically take part in a raffle for an electric scooter. Show off your skills, take a creative time-out from the talks, or just have some fun!

## How to contribute? 

Please follow these steps:

1. Fork the repo
2. Choose a letter you want to customize
3. Be creative!
4. After you're finished create a pull request
5. We will merge your pull request if it is not violating any of the house rules 👇.

## How to customize a letter

In the `public` folder you find a `.js` file for every character. You can write `css` and `html` directly into this file in the template section.

```html
const htmlTemplate = () => html`
  <style>
    .letter {
      /* your styles */
    }
  </style>
  <!-- your html -->
  <span class="letter">
    A
  </span>
`;
```
Please only work on one character per pull request and don't change any of the other files. You are allowed to add other files for example `.svg` files in the public folder, if you need them for your character design. Pull requests that don't adhere to the guidelines will not be merged.

## Tips and Tricks
Please note that we want to create a responsive "font".

- Don't use fixed `width` and `height` in your css, use percentages
- If you use `svgs`, render them with `<img src="/your-svg.svg"` to make it responsive
- You can render images with strange aspect ratios as a background on a `<div>&nbsp;</div>`
- Don't use iframes
- Don't specify the font-size for the characters
- No need to overthink, just go for it :)

## Two House Rules (thou-shalt-nots)

- Don't overwrite other designs
- Don't add hurtful, discriminatory, or offensive content

In short: be nice!


## Raffle Time!

On Friday after 17:00

Prize: [Mi Electric Scooter](https://www.mi.com/global/mi-electric-scooter/)

## Where

At the Deep Impact stand.
