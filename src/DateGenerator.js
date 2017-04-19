module.exports = {
    getRandomDate() {
        return new Date(Math.random() * new Date().getTime())
    },
    getRandomDateInRange(startDate, endDate) {
        let diff = endDate.getTime() - startDate.getTime();
        return new Date(Math.random() * diff + startDate.getTime());
    }
};