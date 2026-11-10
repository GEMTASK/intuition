import React, { createContext, useContext } from "react";

import type { Delegate } from "../../types/Delegate";
import type { FieldValue } from "../../types/FieldValue";

import { View } from "..";

function noop() { }

type FormContext = {
  fields: Record<string, FieldValue>,
  placeholders?: Record<string, string>,
  onFieldChange: (name: string, value: FieldValue) => void,
};

const FormContext = createContext<FormContext>({
  fields: {},
  placeholders: {},
  onFieldChange: () => undefined
});

//
// FormField
//

function FormField({
  name,
  children
}: {
  name: string,
  children: React.ReactElement<{
    value: FieldValue,
    placeholder: string,
    onValueChange: (value: FieldValue) => void,
  }>,
}) {
  const { fields, placeholders, onFieldChange } = useContext(FormContext);

  const handleValueChange = (value: FieldValue) => {
    onFieldChange(name, value);
  };

  const onlyChild = React.Children.only(children);

  return (
    React.isValidElement(onlyChild) && React.cloneElement(onlyChild, {
      value: fields[name],
      placeholder: placeholders?.[name],
      onValueChange: handleValueChange
    })
  );
}

FormField.withComponent = <TProps extends object>(Component: React.ComponentType<TProps>) => ({
  name,
  ...props
}: {
  name: string,
} & TProps) => {
  return (
    <Form.Field name={name}>
      <Component name={name} {...props as TProps} />
    </Form.Field>
  );
};

//
// Form
//

function Form({
  fields,
  children,
  placeholders,
  onFieldChange = noop,
  ...props
}: Delegate<{
  fields: Record<string, FieldValue>,
  placeholders?: Record<string, string>,
  onFieldChange?: (name: string, value: FieldValue) => void,
}, typeof View<"form">>) {
  const formContextValue = {
    fields,
    placeholders,
    onFieldChange
  };

  return (
    <FormContext value={formContextValue}>
      <View as="form" {...props}>
        {children}
      </View>
    </FormContext>
  );
}

Form.Field = FormField;

export default Form;
