import * as React from "react";
import { View } from "react-native";
import styles from "./Point.style";
const Point = ({ innerContainer, outerContainer }) => {
    return (<View style={[styles.innerContainer, styles.shadowStyle, innerContainer]}>
      <View style={[styles.outerContainer, outerContainer]}/>
    </View>);
};
export default Point;
//# sourceMappingURL=Point.js.map