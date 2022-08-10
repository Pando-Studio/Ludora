const randomColor = () => Math.floor(Math.random() * 200);

export const getRandomGradient = () => `linear-gradient(45deg, rgb(${randomColor()},${randomColor()},${randomColor()}), rgb(${randomColor()},${randomColor()},${randomColor()}))`