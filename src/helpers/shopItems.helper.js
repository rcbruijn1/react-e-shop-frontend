export const filterByCategory = (category, assets) => {

    if (category === 'all') return assets;

    const filtered = assets.filter(item => item.category === category);
    return filtered;
}

export const retrieveAllCategories = assets => {
    const categories = ['all'];
    let array = assets;

    for (let i = 0; i < array.length; i++) {

        if (!categories.includes(array[i].category)) {
            let target = array[i].category;

            categories.push(target);
            array = array.filter(item => item.category !== target);
        }
    }

    return categories;
}