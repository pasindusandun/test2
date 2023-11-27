const rectangle = (height)=>{
    let heightRectangleCount=1;
    let noOfRectangles=0;
    while(heightRectangleCount * (heightRectangleCount+1)/2<=height){
        heightRectangleCount++;
    }

    for (let i = 1; i < heightRectangleCount; i++) {
        noOfRectangles = noOfRectangles+Math.floor(100/i);
        
    } 
    console.log('No Of Rectangles',noOfRectangles)
    return noOfRectangles;

}
rectangle(101);