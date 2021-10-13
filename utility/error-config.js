export const errConfig = (err, msg = 'Something went wrong!') => {
    const errMsg = err.response && err.response.data ? err.response.data.message : msg;
    return errMsg;
}