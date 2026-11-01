import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Modal({ title, children, actions, onRequestClose, ...props }: Delegate<{
    title?: React.ReactNode;
    actions?: React.ReactElement<{
        onClick: () => void;
    }>[];
    onRequestClose?: () => void;
}, typeof View<"div">>): React.ReactPortal | undefined;
export default Modal;
