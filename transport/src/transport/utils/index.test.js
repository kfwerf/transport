import {
    equalArray,
    equalString,
    getFilteredList,
    getFilteredLists,
    getNormalized,
    removeDupes
} from "./index";
const testList = [{
    type: 'Car',
    colors: ['gReEn', 'blue'],
    brand: 'vOlvo',
}, {
    type: 'train',
    colors: ['rEd', 'green '],
    brand: 'electrolux',
}, {
    type: 'airPlane',
    colors: ['red', ' bLue'],
    brand: 'aiRbus',
}, {
    type: 'cAr',
    colors: ['green', 'blue'],
    brand: 'voLvo ',
}];

test('removes duplicates from a list', () => {
    const result = ['red', 'red', 'blue', 'red', 'orange', 'r3d'].filter(removeDupes);
    expect(result).toEqual(['red', 'blue', 'orange', 'r3d']);
});

test('normalizes a string', () => {
    const result = getNormalized('greEn  ');
    expect(result).toEqual('green');
});

test('matches a string', () => {
    const result = equalString(' GreeN', 'green');
    expect(result).toBe(true);
});

test('matches within an array', () => {
    const result = equalArray(['red', ' GreeN'], 'green');
    expect(result).toBe(true);
});

test('filters a list on type', () => {
    const list = [...testList];
    const type = 'train';
    const result = getFilteredList({ list, type });

    expect(result.length).toEqual(1);
});

test('filters a list on color', () => {
    const list = [...testList];
    const color = 'greeN';
    const result = getFilteredList({ list, color });

    expect(result.length).toEqual(3);
});
test('filters a list on brand', () => {
    const list = [...testList];
    const brand = 'volvo';
    const result = getFilteredList({ list, brand });

    expect(result.length).toEqual(2);
});

test('filtered lists on brand', () => {
    const list = [...testList];
    const brand = 'volvo';
    const result = getFilteredLists(list, '', brand, '');

    expect(result).toEqual({
        brands: ['volvo', "electrolux", "airbus"],
        colors: ["green", "blue"],
        filtered: [{
                brand: 'vOlvo',
                colors: ['gReEn', 'blue'],
                type: 'Car',
            }, {
                brand: 'voLvo ',
                colors: ['green', 'blue'],
                type: 'cAr',
            },
        ],
        types: ['car'],
    });
});
