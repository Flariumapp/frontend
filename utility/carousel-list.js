const foodCarouselList = [];

for (let i = 1; i <= 5; i++) {
    foodCarouselList.push({
        id: 'c' + i,
        title: '',
        image: '/images/carousels/food/image-' + i + '.jpg',
    });
}

const clothCarousellist = [];

for (let i = 1; i <= 5; i++) {
    clothCarousellist.push({
        id: 'c' + i,
        title: '',
        image: '/images/carousels/cloth/image-' + i + '.jpg',
    });
}

export const carouselList = {
    'food': foodCarouselList,
    'cloth': clothCarousellist,
};