export const buildFlightQueryWithIds = (origin, destination, departure) => {
    let query = '?';
    if (origin) {
        query += 'origin=' + origin;
    }
    if (destination) {
        if (query !== '?') {
            query += '&';
        }
        query += 'destination=' + destination
    }
    if (departure) {
        if (query !== '?') {
            query += '&';
        }
        query += 'departure=' + departure;
    }

    if (query === '?') {
        query = '';
    }

    return query;
}

export const buildFlightQuery = (origin, destination, departure) => {
    let query = '?';
    if (origin) {
        query += 'origin=' + origin.id;
    }
    if (destination) {
        if (query !== '?') {
            query += '&';
        }
        query += 'destination=' + destination.id;
    }
    if (departure) {
        if (query !== '?') {
            query += '&';
        }
        query += 'departure=' + departure;
    }

    if (query === '?') {
        query = '';
    }

    return query;
}