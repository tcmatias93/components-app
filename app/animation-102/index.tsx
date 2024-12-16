import { useRef } from "react";
import { Animated, PanResponder } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

const Animation102Screen = () => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([
      null,
      {
        dx: pan.x,
        dy: pan.y,
      },
    ]),
    onPanResponderRelease: () => {
      Animated.spring(pan, {
        toValue: { x: 0, y: 0 },
        useNativeDriver: false,
      }).start();
    },
  });

  return (
    <SafeAreaProvider>
      <SafeAreaView className="flex-1 justify-center items-center">
        <Animated.View
          {...panResponder.panHandlers}
          className="bg-light-secondary dark:bg-dark-secondary h-20 w-20 rounded-xl"
          style={[pan.getLayout()]}
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
};
export default Animation102Screen;
