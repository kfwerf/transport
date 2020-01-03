export const removeDupes = (val, idx, arr) => arr.indexOf(val) === idx;

export const getNormalized = (value = '') => value?.trimLeft()?.trimRight()?.toLowerCase();

export const equalString = (a, b) => getNormalized(a) === getNormalized(b);
export const equalArray = (arr, b) => arr.map((a) => getNormalized(a)).indexOf(getNormalized(b)) !== -1;

export const getFilteredList = ({list = [], type, color, brand}) => [...list]
    .filter((vehicle) => !type || equalString(vehicle?.type, type))
    .filter((vehicle) => !color || equalArray(vehicle?.colors, color))
    .filter((vehicle) => !brand || equalString(vehicle?.brand, brand));

export const getFilteredLists = (list = [], color = '', brand = '', type = '') => {
    const filtered = getFilteredList({list, color, brand, type});
    return {
        filtered,
        colors: getFilteredList({list, color: '', brand, type})
            .map((vehicle) => vehicle?.colors)
            .reduce((a, b) => a.concat(b), [])
            .map((color) => getNormalized(color))
            .filter(removeDupes),
        brands: getFilteredList({list, color, brand: '', type})
            .map((vehicle) => vehicle?.brand)
            .map((brand) => getNormalized(brand))
            .filter(removeDupes),
        types: getFilteredList({list, color, brand, type: ''})
            .map((vehicle) => vehicle?.type)
            .map((type) => getNormalized(type))
            .filter(removeDupes),
    };
};

export const getStateWithFilteredLists = (state = {}) => {
    const {transport: list, color, brand, type} = state;
    return {
        ...state,
        ...getFilteredLists(list, color, brand, type),
    };
};
