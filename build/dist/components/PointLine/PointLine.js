import * as React from "react";
import { Text, View } from "react-native";
import moment from "moment";
import Dash from "react-native-dash-2";
/**
 * ? Local Imports
 */
import styles, { _dashStyle } from "./PointLine.style";
import Point from "./components/Point";
const PointLine = ({ date, isLastMember, dayTextStyle, length, monthTextStyle, timeTextStyle, ...rest }) => {
    return (<View style={styles.container}>
      <View style={styles.containerGlue}>
        <Text style={[styles.dayTextStyle, dayTextStyle]}>
          {moment(date).format("DD")}
        </Text>
        <Text style={[styles.monthTextStyle, monthTextStyle]}>
          {moment(date).format("ddd").toUpperCase()}
        </Text>
        <Text style={[styles.timeTextStyle, timeTextStyle]}>
          {moment(date).format("LT").toUpperCase()}
        </Text>
      </View>
      <View style={styles.dividerStyle}>
        {!isLastMember && (<Dash dashGap={7} dashColor="#e3e3e3" style={_dashStyle(length)} dashLength={length} dashThickness={1} {...rest}/>)}
        <Point {...rest}/>
      </View>
    </View>);
};
export default PointLine;
//# sourceMappingURL=PointLine.js.map