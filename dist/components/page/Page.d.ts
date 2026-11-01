import { default as React } from 'react';
import { Delegate } from '../../types/Delegate';
import { View } from '..';
declare function Page({ style, children, ...props }: Delegate<object, typeof View<"div">>): React.JSX.Element;
declare namespace Page {
    var Header: ({ title, actions, children, ...props }: Delegate<{
        title?: string;
        actions?: React.ReactElement[];
    }, typeof View<"div">>) => React.JSX.Element;
    var Content: ({ children, style, ...props }: Delegate<object, typeof View<"div">>) => React.JSX.Element;
}
export default Page;
