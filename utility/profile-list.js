const profileList = [];

for (let i = 0; i < 15; i++) {
    profileList.push({
        id: 'p' + i,
        image: '/images/profiles/image-' + (i + 1) + '.jpg',
    });
}

export { profileList };