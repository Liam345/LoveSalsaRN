import React from "react";
import { View, Text, Button, Alert } from "react-native";
import DisplayLocation from "./DisplayLocation";

class ParentDisplayLocation extends React.Component {
  state = {
    //move this to config/ data or something
    currEvent: {
      name: "TSF",
      venue: {
        name: "TSF",
        address_1: "600 Little Collins Street",
        city: "Melbourne"
      },
      featured_photo: {
        photo_link:
          "https://secure.meetupstatic.com/photos/event/d/d/c/a/600_471296778.jpeg"
      },
      local_date: "20-05-2018",
      local_time: "19:30"
    },
    events: []
  };

  onRandomBtnPress = () => {
    let ceil = this.state.events.length; //ceil is not inclusive in js random
    let floor = 0;
    let randomEvent = Math.floor(Math.random() * ceil + floor);
    let event = this.state.events[randomEvent];
    this.setState({ currEvent: event });
  };

  getEventsFromMeetupAPI() {
    fetch(
      "https://api.meetup.com/find/upcoming_events?photo-host=secure&page=20&text=latin+dance&sig_id=185426292&fields=featured_photo&lon=144.990880&lat=-37.827260&sig=dab8f4ef75e0d1bd352db76ee699096659e3d0f4"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ events: responseJson.events });
        this.setState({ currEvent: responseJson.events[0] });
      })
      .catch(error => {
        console.error(error);
      });
  }

  componentDidMount() {
    this.getEventsFromMeetupAPI();
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
