// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract CardiologyContract {
    struct Patient {
        uint id;
        string name;
        uint age;
        string gender;
        uint heartRate;
        uint pDuration;
        uint prInterval;
        uint qrsDuration;
        uint qtInterval;
        uint qtcInterval;
        string bloodPressure;
        string pqrsTAxis;
    }

    Patient[] public patients;

    function addPatient(
        string memory _name,
        uint _age,
        string memory _gender,
        uint _heartRate,
        uint _pDuration,
        uint _prInterval,
        uint _qrsDuration,
        uint _qtInterval,
        uint _qtcInterval,
        string memory _bloodPressure,
        string memory _pqrsTAxis
    ) public {
        patients.push(Patient({
            id: patients.length + 1,
            name: _name,
            age: _age,
            gender: _gender,
            heartRate: _heartRate,
            pDuration: _pDuration,
            prInterval: _prInterval,
            qrsDuration: _qrsDuration,
            qtInterval: _qtInterval,
            qtcInterval: _qtcInterval,
            bloodPressure: _bloodPressure,
            pqrsTAxis: _pqrsTAxis
        }));
    }

    function getPatientCount() public view returns (uint) {
        return patients.length;
    }

    function getPatient(uint _index) public view returns (
        uint id,
        string memory name,
        uint age,
        string memory gender,
        uint heartRate,
        uint pDuration,
        uint prInterval,
        uint qrsDuration,
        uint qtInterval,
        uint qtcInterval,
        string memory bloodPressure,
        string memory pqrsTAxis
    ) {
        Patient storage patient = patients[_index];
        return (
            patient.id,
            patient.name,
            patient.age,
            patient.gender,
            patient.heartRate,
            patient.pDuration,
            patient.prInterval,
            patient.qrsDuration,
            patient.qtInterval,
            patient.qtcInterval,
            patient.bloodPressure,
            patient.pqrsTAxis
        );
    }
}
