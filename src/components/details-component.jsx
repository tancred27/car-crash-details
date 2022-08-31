import { View } from "react-native";

import Info from "./info-component";

const Details = ({ data }) => {
  return (
    <View>
      {data.map((details, index) => (
        <Info key={index.toString()} header={details.header} content={details.content} />
      ))}
    </View>
  );
};

export default Details;
