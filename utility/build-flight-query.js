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
        const modifiedDeparture = new Date(departure).toLocaleString();

        if (query !== '?') {
            query += '&';
        }
        query += 'departure=' + modifiedDeparture;
    }

    if (query === '?') {
        query = '';
    }

    return query;
}