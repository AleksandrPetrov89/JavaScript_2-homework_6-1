import orderByProps from "../app";

const person = {name: 'мечник', health: 10, level: 2, attack: 80, defence: 40};
const expected1 = [
    { key: 'name', value: 'мечник' },
    { key: 'level', value: 2 },
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 }
];
const expected2 = [
    { key: 'attack', value: 80 },
    { key: 'defence', value: 40 },
    { key: 'health', value: 10 },
    { key: 'level', value: 2 },
    { key: 'name', value: 'мечник' }
];


test.each([
    [["name", "level"], expected1],
    [[], expected2],
])(
('Проверка функции сортировки свойств со вторым аргументом и без него'), 
(param, exp)=>{
    const res = orderByProps(person, param);
    expect(res.length).toBe(exp.length);
    for (let i = 0; i < res.length; i++) {
        expect(res[i].key).toBe(exp[i].key);
        expect(res[i].value).toBe(exp[i].value);
    };
});

test('Проверка появления ошибки, при указании некорректного второго аргумента', () => {
    function parameterError() {orderByProps(person, ['namme'])};
    expect(parameterError).toThrow(new Error(`Ошибка! Параметр namme отсутствует у объекта!`));
  });