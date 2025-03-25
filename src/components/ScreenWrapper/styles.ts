import {StyleSheet} from "react-native";
import {Colors} from "../../constants/theme";

export const styles = (platform: string) => StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: platform === 'ios' ? 20 : 0,
        backgroundColor: Colors.gray700,
    }
})