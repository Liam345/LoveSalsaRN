import React from "react";
import { View, Button } from "react-native";
import DisplayLocation from "./DisplayLocation";
import { defaultEvent, getAllEvents } from "../config/api/events";

class ParentDisplayLocation extends React.Component {
  state = {
    currEvent: { defaultEvent },
    events: []
  };

  onRandomBtnPress = () => {
    let ceil = this.state.events.length; //ceil is not inclusive in js random
    let floor = 0;
    let randomEvent = Math.floor(Math.random() * ceil + floor);
    let event = this.state.events[randomEvent];
    this.setState({ currEvent: event });
  };

  componentDidMount() {
    getAllEvents();
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <DisplayLocation event={this.state.currEvent} />
        <Button onPress={this.onRandomBtnPress} title="Press me" />
      </View>
    );
  }
}

export default ParentDisplayLocation;
