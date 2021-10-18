import currencyData from '../data/currencies.json';

const currencyList = [];

for (let key in currencyData) {
    currencyList.push({
        id: key,
        ...currencyData[key]
    });
}

export { currencyList };