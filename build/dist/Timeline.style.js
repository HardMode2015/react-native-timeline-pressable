import { StyleSheet, Dimensions, Platform, } from "react-native";
const { width: ScreenWidth, height: ScreenHeight } = Dimensions.get("screen");
const isAndroid = Platform.OS === "android";
export default StyleSheet.create({
    container: {
        marginLeft: 16,
        marginRight: 16,
        height: ScreenHeight,
        backgroundColor: "#fdfdfd",
    },
    listStyle: {
        paddingTop: 25,
        width: ScreenWidth,
        maxHeight: isAndroid ? ScreenHeight / 2 - 32 : ScreenHeight,
    },
    contentContainerStyle: {
        alignItems: "center",
    },
    contentInset: {
        bottom: ScreenHeight * 0.3,
    },
});
//# sourceMappingURL=Timeline.style.js.map