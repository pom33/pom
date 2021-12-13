import React from "react"
import { Radiobox, Label, Div, Icon } from "atomize";

class Radiobox2 extends React.Component {
  constructor(props) {
      super(props);
  
      this.state = {
          selectedCountValue: 0
      };

      this.toggleSelectedCount = this.toggleSelectedCount.bind(this);
  }

  toggleSelectedCount(value) {
    this.setState({
      selectedCountValue: value,
    })
  }
  
  render() {
      const { selectedCountValue} = this.state;

      return (
          <Div d="flex">
            <Label
              align="center"
              textWeight="600"
              m={{ b: "0.5rem", r: "2rem" }}
            >
              <Radiobox
                onChange={() => this.toggleSelectedCount(1)}
                checked={ selectedCountValue === 1 }
                name="count"
              />
              <Icon name="StarSolid" size="20px" />
            </Label>
            
          </Div>
      );
  }
}


export default Radiobox2
