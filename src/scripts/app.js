/**
	app name pd-spOrgDirectory
 */
import React from "react";
import ReactDOM from "react-dom";
import {DirectoryDisplayRow, DirectoryHeaderRow, DirectoryTable} from "./components/components";
import styles from "../styleSheets/main"; // eslint-disable-line no-unused-vars


//class component
class App extends React.Component{
	constructor(props) {
		super(props);
		this.state = {
			staffStructured: {
				staff: {
					default: []
				},
				supervisor: []
			}
		};
	}
	componentDidMount() {
		/*
			employee objects must have a minimum of
			{
				name: "Jane Doe",
				jobTitle: "Chief of Snickers",
				phoneNum: "222-222-2222",
				officeNum: "222c"
			}
			properties in the staff object will render in a seperate section for each property
			put in default array if no further refinment is needed
		*/
		let supervisors = [
			{
				name: "Jane Doe",
				jobTitle: "Chief of Snickers",
				phoneNum: "222-222-2222",
				officeNum: "222c"
			}
		];
		let staff = [
			{
				name: "John Doe",
				jobTitle: "Snickerdoodle",
				phoneNum: "222-222-2232",
				officeNum: "222r"
			},
			{
				name: "Sue Hicker",
				jobTitle: "Data Entry",
				phoneNum: "222-122-2222",
				officeNum: "224g"
			}
		];
		let specificStaff = [
			{
				name: "Willie Wonka",
				jobTitle: "Candy Man",
				phoneNum: "222-111-2222",
				officeNum: "201c"
			},
			{
				name: "Jill Smith",
				jobTitle: "Typer",
				phoneNum: "222-222-2222",
				officeNum: "222c"
			}
		];

		this.setState({
			staffStructured: {
				staff: {
					default: staff,
					Leads: specificStaff
				},
				supervisor: supervisors
			}
		});
	}
	_sorter(a, b) {
		if (a.name.toLowerCase() < b.name.toLowerCase()) {return -1;}
		if (a.name.toLowerCase() > b.name.toLowerCase()) {return 1;}
		return 0;
	}
	_createHeader(className, text) {
		return (
			<DirectoryHeaderRow 
				className={className}
				headerText={text}
				key={text}
			/>
		);
	}
	_createRow(keyVal, empInfo) {
		return (
			<DirectoryDisplayRow 
				name={empInfo.name}
				jobTitle={empInfo.jobTitle}
				phoneNum={empInfo.phoneNum}
				officeNum={empInfo.officeNum}
				key={keyVal}
			/>
		);
	}
	_createStructure() {
		let rowContainer = [],
			staff = this.state.staffStructured,
			ticker = 1;

		if (staff.supervisor.length > 0) {
			rowContainer.push(this._createHeader("header", "Supervisors"));
			staff.supervisor.sort(this._sorter);
			staff.supervisor.forEach((item) => {
				rowContainer.push(this._createRow(ticker, item));
				ticker++;
			});
		}

		rowContainer.push(this._createHeader("header", "Staff"));
		for (let subSection in staff.staff) {
			if (subSection !== "default") {
				rowContainer.push(this._createHeader("subHeader", subSection));
			}
			let workingOn = staff.staff[subSection];
			workingOn.sort(this._sorter);
			workingOn.forEach((item) => {
				rowContainer.push(this._createRow(ticker, item));
				ticker++;
			});
		}
		return rowContainer;
	}
	render() {
		return <DirectoryTable directoryRows={this._createStructure()}/>;
	}
}

ReactDOM.render(<App />, document.getElementById("root"));