// SPDX-License-Identifier: MIT
pragma solidity >=0.4.22 <0.9.0;

pragma experimental ABIEncoderV2;

contract EyeReportContract {
    struct EyeReport {
        string name;
        uint256 age;
        string gender;
        string[] details;
        string[] prescription;
    }

    mapping(address => EyeReport) public eyeReports;

    function createReport(
        string memory _name,
        uint256 _age,
        string memory _gender,
        string[] memory _details,
        string[] memory _prescription
    ) public {
        eyeReports[msg.sender] = EyeReport(
            _name,
            _age,
            _gender,
            _details,
            _prescription
        );
    }
}