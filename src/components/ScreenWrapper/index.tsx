import {Platform, StatusBar, View, ViewProps, ViewStyle} from "react-native";
import {styles} from "./styles";

export interface ScreenWrapperProps {
    style?: ViewStyle,
    children?: React.ReactNode,
    bg?: string
}

export const ScreenWrapper = ({ children }: ScreenWrapperProps) => {
    const platform = Platform.OS
    return (
        <View style={styles(platform).container}>
            <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
            {children}
        </View>
    )
}