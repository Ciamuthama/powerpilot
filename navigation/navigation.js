import { createStackNavigator } from "@react-navigation/stack";
import homescreen from "../screen/homescreen";
import settingscreen from "../screen/settingscreen";


export default function navigation() {

    const Stack = createStackNavigator()

  return (
      <Stack.Navigator>
          <Stack.Screen name="Home" component={homescreen} />
          <Stack.Screen name="Setting" component={settingscreen}/>
      </Stack.Navigator>
  )
}