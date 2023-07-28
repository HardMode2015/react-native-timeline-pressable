import { StyleSheet } from "react-native";
import { ScreenWidth, isAndroid } from "@freakycoder/react-native-helpers";
export default StyleSheet.create({
    container: {
        width: ScreenWidth,
        alignSelf: "center",
        flexDirection: "row",
        justifyContent: "center",
        marginTop: isAndroid ? 16 : 0,
    },
    insideListContainer: {
        marginTop: -24,
        flexDirection: "column",
    },
});
//# sourceMappingURL=Item.style.js.map