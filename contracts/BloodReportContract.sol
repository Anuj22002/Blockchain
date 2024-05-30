// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract BloodReportContract {
    struct PersonalInfo {
        string name;
        uint256 age;
        string gender;
        string bloodGroup;
    }

    struct BloodTest {
        string haemoglobin;
        string platelet;
        string WBC;
        string RBC;
    }

    struct BloodReport {
        PersonalInfo personalInfo;
        BloodTest bloodTest;
    }

    mapping(uint256 => BloodReport) public reports;
    uint256 public nextId;

    function createReport(
        string memory _name,
        uint256 _age,
        string memory _gender,
        string memory _bloodGroup,
        string memory _haemoglobin,
        string memory _platelet,
        string memory _WBC,
        string memory _RBC
    ) public {
        reports[nextId] = BloodReport(
            PersonalInfo(_name, _age, _gender, _bloodGroup),
            BloodTest(_haemoglobin, _platelet, _WBC, _RBC)
        );
        nextId++;
    }

    function getNextId() public view returns (uint256) {
        return nextId;
    }
}