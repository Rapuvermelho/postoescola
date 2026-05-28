import{ Text,View} from 'react-native';

export default function ResultCard({porc,precbom}){

    return(
        <View>
            <Text>Abasteça com: {precbom}</Text>
            <Text>Etanol está {porc}% da gasolina</Text>
        </View>
    ); 
}