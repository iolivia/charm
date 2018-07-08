import * as Random from "random-number";

const colors = [
    "#A52A2A",
    "#FF1493",
    "#FF6347",
    "#9ACD32",
    "#F5DEB3",
    "#32CD32",
    "#00CED1",
    "#A9A9A9",
];

function getRandomColor(): String {
    const randomIndex = Random({
        min: 0,
        max: colors.length - 1,
        integer: true
    });
    
    return colors[randomIndex];
}

export { getRandomColor }