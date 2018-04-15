var Api = {
    getStates() {
        var url = "http://192.168.1.89:8888/tax/states";
        return fetch(url).then((res) => res.json());
    }
};

module.exports = Api;