import React from "react";
import LoadingScreen from "react-loading-screen";

export default class LoadingScreenCustom extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  componentDidMount() {
    setTimeout(
      function() {
        this.setState({ isLoading: false });
      }.bind(this),
      1000
    );
  }

  render() {
    return this.state.isLoading ? (
      <LoadingScreen
        loading={this.state.isLoading}
        bgColor="rgb(0, 0, 0,0.2);"
        spinnerColor="#9ee5f8"
        textColor="#676767"
        text="Loading..."
      />
    ) : (
      this.props.children
    );
  }
}
