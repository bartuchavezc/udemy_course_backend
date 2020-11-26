module.exports = {
    log: ([params]) => {
        console.log(params);
    },
    error: (error) => {
        console.error(error);
    },
    warning: (params) => {
        console.warn(params);
    }
}