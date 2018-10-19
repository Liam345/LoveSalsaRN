import React from "react";
import { View, Text, StatusBar, ScrollView } from "react-native";
import { ListItem } from "../components/ListItem";
import { Heading } from "../components/Heading";

class Challenges extends React.Component {
  render() {
    return (
      <ScrollView>
        <Heading>CHALLENGES</Heading>
        <ListItem checkMarked={true} text={"Learn the Salsa Basic Step"} />
        <ListItem text={"Find A Salsa Idol"} />
        <ListItem text={"Find Your Favorite Salsa song"} />
        <ListItem
          checkMarked={true}
          text={"Identify count1 of your favorite song"}
        />
        <ListItem text={"Go to your first Salsa class"} />
      </ScrollView>
    );
  }
}
//text={"Status Barrrrr"}
export default Challenges;
