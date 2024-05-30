/* eslint-disable no-undef */
const PatientRecordContract = artifacts.require("PatientRecordContract");
const BloodReportContract = artifacts.require("BloodReportContract");
const EyeReportContract = artifacts.require("EyeReportContract");
const CardiologyContract = artifacts.require("CardiologyContract");

module.exports = async function(deployer, network, accounts) {
  // Deploy PatientRecordContract from the first account
  await deployer.deploy(PatientRecordContract, { from: accounts[0] });
  
  // Deploy BloodReportContract from a different account
  await deployer.deploy(BloodReportContract, { from: accounts[1] });
  await deployer.deploy(EyeReportContract, { from: accounts[2] });
  await deployer.deploy(CardiologyContract, { from: accounts[3] });
};
