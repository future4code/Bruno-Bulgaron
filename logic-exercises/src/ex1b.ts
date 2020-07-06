let secondArrayOfNumbers: any = [5, 10, 15, 20, 25];

function ex1b(array: number[]){
    let minNumber = Infinity;
    let maxNumber = -Infinity;
    
    for(let i = 0; i< array.length; i++){
        if(minNumber > array[i]){
            minNumber = array[i]
        };
        
        if(maxNumber < array[i]){
            maxNumber = array[i]
        };
    };

    return ({
        minNumber,
        maxNumber
    });
};

console.log(ex1b(secondArrayOfNumbers));