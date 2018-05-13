var Api = {
    getStates() {
        var url = "http://taxcalculator-env.z2mcm73mmr.us-east-2.elasticbeanstalk.com/tax/states";
        return fetch(url).then((res) => res.json());
    },
    calculate(stateCode, amount) {
        var url = "http://taxcalculator-env.z2mcm73mmr.us-east-2.elasticbeanstalk.com/tax/calculate/"+stateCode+"/"+amount;
        return fetch(url, {
            method : 'POST'
        }).then((res) => res.json());
    },
    calculateForAllStates(amount) {
        var url = "http://taxcalculator-env.z2mcm73mmr.us-east-2.elasticbeanstalk.com/tax/calculate/"+amount;
        return fetch(url).then((res) => res.json());
    }
};

module.exports = Api;