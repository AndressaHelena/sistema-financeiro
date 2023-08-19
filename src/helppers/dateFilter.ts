import { Item } from "../types/Item";


export const getCurrentMonth = () => {
    let now = new Date();
    return `${now.getFullYear()}-${now.getMonth()+1}`; //return 2023-08
}

export const filterListByMonth = (list: Item[], date: string): Item[] => {
    let newList: Item[] = [];
    let [year, month] = date.split('-');

    for(let i in list){
        if(
            list[i].date.getFullYear() === parseInt(year) && //filtra ano
            (list[i].date.getMonth()) === parseInt(month) //filtra mês
        ){
            newList.push(list[i]);
        }
    }

    return newList;
}

export const formatDate = (date: Date): string => {
    let year = date.getFullYear();
    let month = date.getMonth();
    let day = date.getDate();

    return`${addZeroToDate(day)}/${addZeroToDate(month)}/${year}`;
}

const addZeroToDate = (menorQueDez: number): string => {
    if (menorQueDez < 10){
        return `0${menorQueDez}`
    } else {
        return `${menorQueDez}`
    }
}
export const formatCurrentMonth = (currentMonth: string): string => {
    let [year, month] = currentMonth.split('-');
    let months = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
    return `${months[parseInt(month) - 1]} ${year}`
}