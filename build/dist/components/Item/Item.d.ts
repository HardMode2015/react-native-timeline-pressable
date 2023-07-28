import React from "react";
import { StyleProp, ViewStyle } from "react-native";
import { ITimeline, ITimelineData } from "../../models";
interface ItemProps {
    style?: StyleProp<ViewStyle>;
    data: ITimeline;
    list: ITimelineData[];
    isLastMember: boolean;
    onPress: (data: any) => void;
}
declare const Item: React.FC<ItemProps>;
export default Item;
