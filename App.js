import React from "react";
import { View, StyleSheet, ListRenderItem } from "react-native";
import PagerView from "react-native-pager-view";
import { Tabs } from "react-native-collapsible-tab-view";
import {
  NativeViewGestureHandler,
  PanGestureHandler,
} from "react-native-gesture-handler";
import {
  useAnimatedScrollHandler,
  useHandler,
  useEvent,
} from "react-native-reanimated";

export function usePagerScrollHandler(handlers, dependencies) {
  const { context, doDependenciesDiffer } = useHandler(handlers, dependencies);
  const subscribeForEvents = ["onPageScroll"];

  return useEvent(
    (event) => {
      "worklet";
      const { onPageScroll } = handlers;
      if (onPageScroll && event.eventName.endsWith("onPageScroll")) {
        onPageScroll(event, context);
      }
    },
    subscribeForEvents,
    doDependenciesDiffer
  );
}

export default MyPager = () => {
  const handler = usePagerScrollHandler(
    {
      onPageScroll: (e) => {
        console.log("eefe", e);
      },
    },
    []
  );

  return (
    <PagerView style={styles.pagerView} initialPage={0} onPageScroll={handler}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
};

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
});
