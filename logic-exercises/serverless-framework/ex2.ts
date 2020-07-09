function checkEqualStringsAgain(string1: string, string2: string): any{
    let newString1 = string1.toLowerCase();
    let newString2 = string2.toLowerCase();

    if(newString1 === newString2){
        return true;
    }else{
        return false;
    };
};

console.log(checkEqualStringsAgain("teste", "Teste"));