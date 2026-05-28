import { View,Text, Button} from "react-native";

export default function MyButton({obtprecbom}){
    return(
        <View>
            <Button
            title = "QUAL COMPENSA MAIS?DESCUBRA!!!"
            onPress={obtprecbom}
            />
        </View>
    )
}