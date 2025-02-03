import { View, ViewProps } from "react-native";
import React from "react";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {}

export default function ScreenWrapper({ style, ...rest }: Props) {
  const inset = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          flex: 1,
          marginTop: inset.top,
          justifyContent: "center",
          alignItems: "center",
        },
        style,
      ]}
      {...rest}
    />
  );
}
