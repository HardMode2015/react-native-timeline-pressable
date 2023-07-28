import { ViewStyle, StyleSheet, TextStyle } from "react-native";

interface Style {
  container: ViewStyle;
  containerGlue: ViewStyle;
  dividerStyle: ViewStyle;
  dayTextStyle: TextStyle;
  monthTextStyle: TextStyle;
  timeTextStyle: TextStyle;
}

export default StyleSheet.create<Style>({
  container: {
    flexDirection: "row",
    marginLeft: 24,
  },
  containerGlue: {
    marginTop: -7,
    marginRight: 12,
    alignItems: "center",
    flexDirection: "column",
  },
  dividerStyle: {
    paddingTop: 12,
    marginLeft: 12,
  },
  dayTextStyle: {
    color: "#984cf8",
    fontWeight: "700",
    width: "100%",
  },
  monthTextStyle: {
    color: "black",
    width: "100%",
    fontStyle: "italic",
    fontWeight: "500",
  },
  timeTextStyle: {
    color: "#984cf9",
  },
});

export const _dashStyle = (length: number): ViewStyle => ({
  width: 1,
  height: 110 * length,
  flexDirection: "column",
});
