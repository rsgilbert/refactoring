function logPlaceDetails(){
    let temp = 2 * (height + width);
    console.log(temp)
    temp = height * width;
    console.log(temp);
}

function ref_logPlaceDetails(){
    const perimeter = 2 * (height + width);
    console.log(perimeter)
    const area = height * width;
    console.log(area);
}

const height = 5, width = 2;

logPlaceDetails();
ref_logPlaceDetails();