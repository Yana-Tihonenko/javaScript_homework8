//Задание 1
//Создайте стрелочную функцию, которая бы принимала массив и цифру, возвращала бы элемент массива под этим индексом.

const searchNumberFromArray = (a, b) => {
    const index = a.indexOf(b);
    if (index != -1) {
        return a[index];
    } else {
        return null;
    }
};


// Задание 2
// Создайте функцию, которая бы принимала бы следующие параметры:

// код погоды
// функция decode, которая дает расшифровку погоды по коду.
// Функция должна возвращать строку, описывающую погоду.

function decode(kod) {
    switch (kod) {
        case "SQ":
            return "шквал"
        case "PO":
            return "пыльный вихрь"
        case "FC":
            return "торнадо"
        case "BR":
            return "дымка(видимость от 1 до 9 км)"
        case "HZ":
            return "мгла(видимость менее 10 км)"
        case "FU":
            return "дым(видимость менее 10 км)"
        case "DS":
            return "пыльная буря(видимость менее 10 км)"
        case "SS":
            return "песчаная буря(видимость менее 10 км)"
        default:
            return "неопределено"

    }
}

let kod = "SS";
const wether = (kod) => {
    return kod +": "+decode(kod) ;
}
console.log(wether(kod));