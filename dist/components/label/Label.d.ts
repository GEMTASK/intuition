import { Delegate } from '../../types/Delegate';
import { Text, View } from '..';
declare function Label({ flex, label, labelProps, chevron, flipped, hidden, children, style, onPointerDown, onClick, ...props }: Delegate<{
    label?: string;
    labelProps?: React.ComponentProps<typeof Text<"div">>;
    chevron?: boolean;
    flipped?: boolean;
}, typeof View<"div">>): import("react").JSX.Element;
export default Label;
