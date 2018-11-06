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
    let { event } = this.props;
    return (
      <View style={{ flex: 1 }}>
        <Heading>Let's Dance At</Heading>
        <View>
          <Image
            style={{ height: 400, width: screenWidth, position: "absolute" }}
            source={{ uri: event.featured_photo.photo_link }}
          />
        </View>
        <ScrollView style={{ marginTop: fourthScreenHeight }}>
          <Card
            title={event.name}
            date={event.local_date}
            fromTime={event.local_time}
            venueName={event.venue.name}
            address={event.venue.address_1}
            city={event.venue.city}
          />
        </ScrollView>
      </View>
    );
  }
}

export default DisplayLocation;
