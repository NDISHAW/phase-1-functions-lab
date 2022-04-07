// Code your solution in this file!
// const hq=43;
// function distanceFromHqInBlocks(hq,pickUp){
   
// return pickUp-hq;
// // console.log(distanceFromHqInBlocks);
// }
// console.log(distanceFromHqInBlocks(hq,50));
function distanceFromHqInBlocks(blockNo){
    if (blockNo>42){
        return blockNo-42;
    }
    else {
        return 42-blockNo;
    }
}
const blockNums= distanceFromHqInBlocks();
console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet(blockNo){
        return distanceFromHqInBlocks(blockNo)*264;
}
console.log(distanceFromHqInFeet(32));

function distanceTravelledInFeet(end,start){
    if(start<end){
        return (end-start)*264;
    }
    else {
        return (start-end)*264;
    }
}
console.log(distanceTravelledInFeet(40,42));

function calculatesFarePrice(start,destination) {
    const distance= distanceTravelledInFeet(start,destination);
    if (distance<=400){
        return 0;
    }
    else if(distance>400 && distance<=2000){
        return .02*(distance-400);
    }
    else if(distance>2000 && distance<=2500){
        return 25;
    }
    else{
        return `cannot travel that far`;
    }
}
console.log(calculatesFarePrice(40,45));