const headerConfig = (token, multipart = false) => {
    if (multipart) {
        return {
            headers: {
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'multipart/form-data',
            }
        }
    }

    return {
        headers: {
            'Authorization': 'Bearer ' + token,
        }
    }
};

export default headerConfig;