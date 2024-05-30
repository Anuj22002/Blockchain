/* eslint-disable no-undef */
const BloodReportContract = artifacts.require("BloodReportContract");

module.exports = function(deployer){
    
    deployer.deploy(BloodReportContract);
};
