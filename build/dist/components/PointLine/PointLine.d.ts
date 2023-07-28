import * as React from "react";
import { StyleProp, TextStyle } from "react-native";
interface PointLineProps {
    date: number;
    length: number;
    isLastMember: boolean;
    dayTextStyle?: StyleProp<TextStyle>;
    monthTextStyle?: StyleProp<TextStyle>;
    timeTextStyle?: StyleProp<TextStyle>;
}
declare const PointLine: React.FC<PointLineProps>;
export default PointLine;
