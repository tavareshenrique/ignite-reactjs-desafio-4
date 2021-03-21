import { InputHTMLAttributes } from "react";

import { IconBaseProps } from "react-icons/lib";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}
