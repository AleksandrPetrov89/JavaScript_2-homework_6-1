export default function orderByProps(obj, sortingOrder = []) {
    const sheet = [];
    let keys = Object.keys(obj).sort();
    if (sortingOrder.length > 0) {
        for (const el of sortingOrder) {
            if (keys.includes(el)) {
                keys.splice(keys.indexOf(el), 1);
            } else {
                throw new Error(`Ошибка! Параметр ${el} отсутствует у объекта!`);
            }
        }
        keys = sortingOrder.concat(keys);
    }
    for (const prop of keys) {
        sheet.push({
            key: prop, value: obj[prop],
        });
    }
    return sheet;
}
