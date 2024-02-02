import { View, Text, TouchableOpacity} from "react-native";
import { Link } from "expo-router";

export default function App() {
    return (
        <View className='flex-1 items-center justify-center'>
            <Text className='font-bold font-sans mx-10'>name</Text>
           <Link
           href={'/screen/homescreen'}
           >
            
           <Text className='font-bold'>
            Click Me
            </Text> 
            </Link>
        </View>
    );
}