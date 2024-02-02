// import { createStackNavigator } from "@react-navigation/stack";
// import homescreen from "../screen/homescreen";
// import settingscreen from "../screen/settingscreen";


// export default function navigation() {

//     const Stack = createStackNavigator()

//   return (
//       <Stack.Navigator>
//           <Stack.Screen name="Home" component={homescreen} />
//           <Stack.Screen name="Setting" component={settingscreen}/>
//       </Stack.Navigator>
//   )
// }
import React,{useState, useEffect}from 'react';
import {View,Text,TouchableOpacity} from'react-native';
import {Link} from 'expo-router';
export default function Navigation() {
    return (
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Text style={{fontSize:20,fontWeight:'bold'}}>Navigation</Text>
            <Link href={'/screen/homescreen'}>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Home</Text>
            </Link>
        </View>
    )
}
