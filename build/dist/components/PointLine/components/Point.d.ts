import * as React from "react";
import { StyleProp, ViewStyle } from "react-native";
interface PointProps {
    innerContainer?: StyleProp<ViewStyle>;
    outerContainer?: StyleProp<ViewStyle>;
}
declare const Point: React.FC<PointProps>;
export default Point;
