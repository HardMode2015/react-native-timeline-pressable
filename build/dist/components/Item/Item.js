import React from "react";
import { View, FlatList } from "react-native";
import Card from "../Card/Card";
import PointLine from "../PointLine/PointLine";
/**
 * ? Local Imports
 */
import styles from "./Item.style";
const Item = ({ onPress, style, data, list, isLastMember, ...rest }) => {
    const renderItem = (item, index) => {
        return <Card {...rest} onPress={onPress} key={index} isCard data={item}/>;
    };
    return (<View style={[styles.container, style]}>
      <PointLine {...rest} date={data.date} length={list.length} isLastMember={isLastMember}/>
      <View style={styles.insideListContainer}>
        <FlatList data={list} renderItem={({ item, index }) => renderItem(item, index)} keyExtractor={(item, index) => index.toString()}/>
      </View>
    </View>);
};
export default Item;
//# sourceMappingURL=Item.js.map