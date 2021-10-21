const passengerList = [];

for (let i = 0; i < 15; i++) {
    passengerList.push({
        id: 'p' + i,
        image: '/images/passengers/image-' + (i + 1) + '.jpg',
    });
}

export { passengerList };