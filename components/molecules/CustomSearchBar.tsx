import React, { useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View, Text, StyleSheet } from "react-native";

type SearchBarComponentProps = {};

const CustomSearchComponent: React.FunctionComponent<
  SearchBarComponentProps
> = () => {
  const [search, setSearch] = useState("");

  const updateSearch = (search: string) => {
    setSearch(search);
  };

  return (
    <View style={styles.view}>
      <SearchBar
        placeholder="Search location..."
        onChangeText={updateSearch}
        value={search}
        inputContainerStyle={{
          backgroundColor: "transparent",
          height: 46,
        }}
        placeholderTextColor={"gray"}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  view: {
    margin: 10,
  },
  containerStyle: {
    padding: 0,
    borderRadius: 23,
    backgroundColor: "white",
    borderTopColor: "transparent",
    borderBlockColor: "transparent",
    opacity: 0.6,
  },
  inputStyle: {
    backgroundColor: "transparent",
    fontFamily: "Poppins-Regular",
    fontSize: 14,
    color: "black",
  },
});

export default CustomSearchComponent;
