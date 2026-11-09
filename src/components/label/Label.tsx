import { ChevronDownIcon } from "lucide-react";

import type { Delegate } from "../../types/Delegate";

import { Icon, Text, View } from "..";

function Label({
  flex,
  label,
  labelProps,
  chevron,
  flipped,
  hidden,
  children,
  style,
  onPointerDown,
  onClick,
  ...props
}: Delegate<{
  label?: string,
  labelProps?: React.ComponentProps<typeof Text<"div">>,
  chevron?: boolean,
  flipped?: boolean,
}, typeof View<"div">>) {
  return (
    <View
      flex={flex}
      spacing="8px"
      cursor={props.cursor}
      hidden={hidden}
      opacityOnPress={props.opacityOnPress}
      onPointerDown={onPointerDown}
      onClick={onClick}
    >
      {label && (
        <View horizontal spacing="4px" align="middle left" style={flipped ? { flexDirection: "row-reverse" } : undefined}>
          <Text light caps noWrap fontSize="12px" innerStyle={{ fontSize: 11, lineHeight: "17px" }} {...labelProps}>
            {label}
          </Text>
          {chevron && (
            <Icon icon={ChevronDownIcon} size={16} style={{ opacity: 0.6, margin: -4, strokeWidth: 1 }} />
          )}
        </View>
      )}
      <View flex {...props} style={{ ...style, flexDirection: flipped ? "row-reverse" : undefined }}>
        {children}
      </View>
    </View>
  );
}

export default Label;
