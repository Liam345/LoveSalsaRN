import React from "react";
import { View, ScrollView, Image } from "react-native";
import { Heading } from "../components/Heading";
import { Card } from "../components/Card";
import { Dimensions } from "react-native";
const screenWidth = Dimensions.get("window").width;
const fourthScreenHeight = Dimensions.get("window").height / 4;

class DisplayLocation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    //Is there a better method of checking wheteher element exists.
    //Implemented the if statements event and event.venue below because
    //in some elemts event.venue did not exist
    //This caused 'Cannot read property of undefined' errors.
    let { event } = this.props;
    let eventName = null;
    let eventDate = null;
    let eventTime = null;
    let venueName = null;
    let venueAddress = null;
    let venueCity = null;
    let eventPhoto =
      "https://secure.meetupstatic.com/photos/event/d/d/c/a/600_471296778.jpeg";

    if (event) {
      eventName = event.name;
      eventDate = event.local_date;
      eventTime = event.local_time;
    }

    if (event.venue) {
      venueName = event.venue.name;
      venueAddress = event.venue.address_1;
      venueCity = event.venue.city;
    }

    if (event.featured_photo) {
      eventPhoto = event.featured_photo.photo_link;
    }

    return (
      <View style={{ flex: 1 }}>
        <Heading>Let's Dance At</Heading>
        <View>
          <Image
            borderRadius={1}
            style={{ height: 400, width: screenWidth, position: "absolute" }}
            source={{
              uri: eventPhoto
            }}
          />
        </View>
        <ScrollView style={{ marginTop: fourthScreenHeight }}>
          <Card
            title={eventName}
            date={eventDate}
            fromTime={eventTime}
            venueName={venueName}
            address={venueAddress}
            city={venueCity}
          />
        </ScrollView>
      </View>
    );
  }
}

export default DisplayLocation;
