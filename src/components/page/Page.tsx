import React from "react";
import { type Delegate } from "../../types/Delegate";
import { View, Text } from "..";

function Header({
  title,
  actions,
  children,
  ...props
}: Delegate<{
  title?: string,
  actions?: React.ReactElement[],
}, typeof View<"div">>) {
  return (
    <View negativeBorder border="bottom" padding="8px 16px" spacing="16px" fillColor="panel" zIndex={3} {...props}>
      {title && (
        <View horizontal align="top justify">
          <View spacing="8px">
            {/* <Breadcrumbs /> */}
            <Text as="h1" fontSize="24px" fontWeight="400">
              {title}
            </Text>
          </View>
          <View horizontal spacing="8px" style={{ marginTop: 8, marginBottom: -8 }}>
            {actions?.map((action, index) => React.cloneElement(action, {
              key: index,
            }))}
          </View>
        </View>
      )}
      {children}
    </View>
  );
}

function Content({
  children,
  style,
  ...props
}: Delegate<object, typeof View<"div">>) {
  return (
    <View flex style={{ overflowY: "auto", minWidth: 0, minHeight: 0, ...style }} {...props}>
      {children}
    </View>
  );
}

function Page({
  style,
  children,
  ...props
}: Delegate<object, typeof View<"div">>) {
  return (
    <View style={{ minWidth: 0, minHeight: 0, ...style }} {...props}>
      {children}
    </View>
  );
}

Page.Header = Header;
Page.Content = Content;

export default Page;
