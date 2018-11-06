import React from "react";
import { View, Text, Button } from "react-native";
// import meetupData from "../data/meetupData";
import DisplayLocation from "./DisplayLocation";

class ParentDisplayLocation extends React.Component {
  state = {
    events: [
      {
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
      }
    ]
  };

  onRandomBtnPress() {}

  getEventsFromMeetupAPI() {
    fetch(
      "https://api.meetup.com/find/upcoming_events?photo-host=secure&page=20&text=latin+dance&sig_id=185426292&fields=featured_photo&lon=144.990880&lat=-37.827260&sig=dab8f4ef75e0d1bd352db76ee699096659e3d0f4"
    )
      .then(response => response.json())
      .then(responseJson => {
        this.setState({ events: responseJson.events });
        this.setState({
          picture: { uri: responseJson.events[0].featured_photo.photo_link }
        });
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
        <DisplayLocation event={this.state.events[0]} />
        <Button onPress={this.onRandomBtnPress} title="Press me" />
      </View>
    );
  }
}

export default ParentDisplayLocation;
