/*
    app name pd-spOrgDirectory
    author: Ted
    date: 
*/
import React from "react";
import PropTypes from "prop-types";

export const DirectoryTable = (props) => {
  return (
    <div id="staffDirContainer">
        <table>
            <thead>
                <tr>
                    <th colSpan="4">
                        <h1>Staff Directory</h1>
                    </th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Title</th>
                    <th>Number</th>
                    <th>Office</th>
                </tr>
            </thead>
            <tbody>
                {props.directoryRows}
            </tbody>
        </table>
    </div>
  );
};
DirectoryTable.propTypes = {
    directoryRows: PropTypes.array.isRequired
};
export const DirectoryHeaderRow = (props) => {
  return (
    <tr>
        <td colSpan="4" className={props.className}><span>{props.headerText}</span></td>
    </tr>
  );
};
DirectoryHeaderRow.propTypes = {
    className: PropTypes.string.isRequired,
    headerText: PropTypes.string.isRequired
};
export const DirectoryDisplayRow = (props) => {
  return (
    <tr>
        <td>{props.name}</td>
        <td>{props.jobTitle}</td>
        <td>{props.phoneNum}</td>
        <td>{props.officeNum}</td>
    </tr>
  );
};
DirectoryDisplayRow.propTypes = {
    name: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    phoneNum: PropTypes.string.isRequired,
    officeNum: PropTypes.string.isRequired
};