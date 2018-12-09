import React from "react";
import { View, Button } from "react-native";
import DisplayLocation from "./DisplayLocation";
import { defaultEvent } from "../config/api/events";
//getAllEvents
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
    fetch(
      "https://api.meetup.com/find/upcoming_events?photo-host=secure&page=20&text=latin+dance&sig_id=185426292&fields=featured_photo&lon=144.990880&lat=-37.827260&sig=dab8f4ef75e0d1bd352db76ee699096659e3d0f4"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ events: responseJson.events });
        this.setState({ currEvent: responseJson.events[0] });
      })
      .catch(error => {
          throw Error('Events are unavailable at this time',error)
      })
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
