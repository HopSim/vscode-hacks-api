import React, { Component } from "react";
import DisplayTips from "./../hooks/DisplayTip";
import axios from "axios";

class SearchAPI extends Component {
  constructor() {
    super();
    this.state = {
      randomTip: "get ready for a tip",
      allTips: [],
      searchTerm: "",
      displayDetail: 2
    };
  }

  componentDidMount() {
    axios.get("/random").then(response => {
      this.setState({
        randomTip: response.data
      });
    });
    axios.get("/api/all").then(response => {
      this.setState({
        allTips: response.data
      });
    });
  }

  handleChange = e => {
    this.setState({
      searchTerm: e.target.value.toLowerCase()
    });
  };

  handleIdChange = e => {
    this.setState({
      displayDetail: e.target.id
    });
  };

  render() {
    const { allTips, randomTip, searchTerm, displayDetail } = this.state;
    const tipObjectProp = allTips[displayDetail];
    // console.log("why won't this work", tipObjectProp.tip);

    const tipsList = allTips.map((val, id) => {
      const tip = val.tip.toLowerCase();
      if (
        (tip && tip.includes(searchTerm)) ||
        val.tipTitle.includes(searchTerm)
      ) {
        return (
          <div key={id}>
            {val.tipTitle}{" "}
            <button id={id} onClick={this.handleIdChange}>
              >
            </button>{" "}
          </div>
        );
      }
    });

    return (
      <div>
        <div>
          <input onChange={this.handleChange} placeholder="search..." />
        </div>
        <div>Tips: {tipsList}</div>
        <DisplayTips id={displayDetail} tipObject={tipObjectProp} />
      </div>
    );
  }
}

export default SearchAPI;
