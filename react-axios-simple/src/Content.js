import React from "react";
const axios = require("axios");

class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  itemClicked(person){
    console.log(person)
    if(this.props.onItemClicked){
      this.props.onItemClicked(person);
    }
  }

  componentDidMount() {
    const url = this.props.fetchUrl;
    console.log(url);
    var self = this;

    axios({
      method: "GET",
      url: url
    })
      .then(function(response) {
        console.log("response ", response.data);

        self.setState({
          list: response.data
        });
      })
      .catch(function(error) {
        console.log("err", error);
      })
      .finally(function() {
        // always executed
      });
  }

  render() {
    return (
      <ul>
        {this.state.list.length > 0 &&
        this.state.list.map(item => {
          return (
            <li key={item.id} onClick={(evt) => this.itemClicked.bind(this)(item)}>
              {item.id} - {item.first_name} - {item.age}
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Content;
