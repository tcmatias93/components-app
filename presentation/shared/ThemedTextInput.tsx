import { View, Text, TextInput, TextInputProps } from "react-native";
import React from "react";

interface Props extends TextInputProps {
  className?: string;
}

const ThemedTextInput = ({ className, ...rest }: Props) => {
  return (
    <TextInput
      className="py-4 text-black dark:text-white"
      placeholderTextColor={"grey"}
      {...rest}
    />
  );
};

export default ThemedTextInput;
