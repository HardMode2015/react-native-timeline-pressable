import * as React from "react";
import { View, Text, Pressable, } from "react-native";
import moment from "moment";
import Androw from "react-native-androw";
/**
 * ? Local Imports
 */
import styles from "./Card.style";
const Card = ({ onPress, isCard = true, data, titleTextStyle, subtitleTextStyle, dateTextStyle, dateFormat = "DD ddd, HH:mm", }) => {
    const { title, subtitle, date } = data;
    return (<Androw style={[
            styles.container,
            styles.shadowStyle,
            isCard && {
                backgroundColor: "trasnsparent",
            },
        ]}>
      <Pressable onPress={() => {
            onPress(data);
        }}>
        <Androw style={[
            styles.cardContainer,
            isCard && styles.cardContainerShadowStyle,
        ]}>
          <View style={styles.cardContainerGlue}>
            <Text numberOfLines={1} style={[styles.titleTextStyle, titleTextStyle]}>
              {title}
            </Text>
            <Text numberOfLines={2} style={[styles.subtitleTextStyle, subtitleTextStyle]}>
              {subtitle}
            </Text>
          </View>
        </Androw>
        <Text numberOfLines={1} style={[
            styles.dateTextStyle,
            isCard && { marginTop: 8 },
            dateTextStyle,
        ]}>
          {moment(date).format(dateFormat)}
        </Text>
      </Pressable>
    </Androw>);
};
export default Card;
//# sourceMappingURL=Card.js.map