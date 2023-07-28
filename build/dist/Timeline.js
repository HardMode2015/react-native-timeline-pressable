import React from "react";
import { SafeAreaView, FlatList } from "react-native";
import Item from "./components/Item/Item";
/**
 * ? Local Imports
 */
import styles from "./Timeline.style";
const Timeline = ({ onPress, data, timelineStyle, ...rest }) => {
    const renderItem = (item, index) => {
        const isLastMember = index === data.length - 1;
        return (<Item {...rest} onPress={onPress} data={item} list={item.data} isLastMember={isLastMember}/>);
    };
    return (<SafeAreaView style={[styles.container, timelineStyle]}>
      <FlatList data={data} style={styles.listStyle} contentInset={styles.contentInset} keyExtractor={(item, index) => index.toString()} contentContainerStyle={styles.contentContainerStyle} renderItem={({ item, index }) => renderItem(item, index)} {...rest}/>
    </SafeAreaView>);
};
export default Timeline;
//# sourceMappingURL=Timeline.js.map