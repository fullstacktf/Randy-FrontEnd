import * as React from "react";

interface IconProps {
  name: string;
}

interface IconState {
  isSelected: string;
}

class Icon extends React.Component<IconProps, IconState> {
  constructor(props) {
    super(props);
    this.state = {
      isSelected: "#FFFFFF"
      //#47AB43
    }
    this.handleColor = this.handleColor.bind(this);
  }

  handleColor() {
    this.setState({
      isSelected: this.state.isSelected
    })
  }

  render() {
    // return <img src={this.props.name} className="icon" alt={this.props.name} on />

    return (
      <svg onClick={this.handleColor} width="45" height="45" viewBox="0 0 45 45" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="21.4286" height="13.0645" rx="2" fill={this.state.isSelected} />
        <rect y="15.9677" width="21.4286" height="29.0323" rx="2" fill={this.state.isSelected} />
        <rect width="21.4286" height="13.0645" rx="2" transform="matrix(1 0 0 -1 23.5714 45)" fill={this.state.isSelected} />
        <rect width="21.4286" height="29.0323" rx="2" transform="matrix(1 0 0 -1 23.5714 29.0323)" fill={this.state.isSelected} />
      </svg>
    )
  }
}
export default Icon;
