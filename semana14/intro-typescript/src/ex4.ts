const ano: number = 1700

let sigla: string = ""

sigla = sigla.toUpperCase()

console.log(retornaIdade(ano, sigla))

function retornaIdade(ano: number, sigla: string): string {
    if((sigla === "AC") && (ano <= 100000) && (ano > 4000)){
        return "Pré-História"
    }
    else if((sigla === "AC") && (ano <= 4000)){
        return "Idade Antiga"
    }
    else if (((sigla === "DC") || (sigla === "")) && (ano <= 476)){
        return "Idade Antiga"
    }
    else if (((sigla === "DC") || (sigla === "")) && (ano <= 476)){
        return "Idade Antiga"
    }
    else if (((sigla === "DC") || (sigla === "")) && (ano <= 1453)){
        return "Idade Média"
    }
    else if (((sigla === "DC") || (sigla === "")) && (ano <= 1789)){
        return "Idade Moderna"
    }
    else if (((sigla === "DC") || (sigla === "")) && (ano <= 2020)){
        return "Idade Contemporânea"
    }
    else{
        return "Erro"
    }
}