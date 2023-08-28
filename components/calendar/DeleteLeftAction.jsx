import {  Animated, View } from 'react-native';
import {Text} from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
const DeleteLeftAction = (progress, dragAnimatedValue) => {
    const opacity = dragAnimatedValue.interpolate({
      inputRange: [-150, 0],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    });
    return (
      <View >
          <Text >Are you sure?</Text>
        <Animated.View >
          <TouchableOpacity>
            <Text >Delete</Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
    );
  };

export default DeleteLeftAction