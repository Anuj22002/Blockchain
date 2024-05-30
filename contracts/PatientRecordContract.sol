// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract PatientRecordContract {
    struct Patient {
        uint id;
        string name;
        uint age;
        string gender;
        string bloodGroup;
        string height;
        string weight;
        string doctorName;
        string medicalReport;
    }

    Patient[] public patients;

    function addPatient(
        string memory _name,
        uint _age,
        string memory _gender,
        string memory _bloodGroup,
        string memory _height,
        string memory _weight,
        string memory _doctorName,
        string memory _medicalReport
    ) public {
        patients.push(Patient({
            id: patients.length + 1,
            name: _name,
            age: _age,
            gender: _gender,
            bloodGroup: _bloodGroup,
            height: _height,
            weight: _weight,
            doctorName: _doctorName,
            medicalReport: _medicalReport
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
        string memory bloodGroup,
        string memory height,
        string memory weight,
        string memory doctorName,
        string memory medicalReport
    ) {
        Patient storage patient = patients[_index];
        return (
            patient.id,
            patient.name,
            patient.age,
            patient.gender,
            patient.bloodGroup,
            patient.height,
            patient.weight,
            patient.doctorName,
            patient.medicalReport
        );
    }
}
