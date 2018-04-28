var Api = {
    getStates() {
        var url = "http://192.168.1.89:8888/tax/states";
        return fetch(url).then((res) => res.json());
    },
    calculate(stateCode, amount) {
        var url = "http://192.168.1.89:8888/tax/calculate/"+stateCode+"/"+amount;
        return fetch(url, {
            method : 'POST'
        }).then((res) => res.json());
    },
    calculateForAllStates(amount) {
        var url = "http://192.168.1.89:8888/tax/calculate/"+amount;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = Api;