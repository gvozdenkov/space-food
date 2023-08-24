import { ChangeEvent, useRef, useState } from 'react';

type Props = {
  [key: string]: string;
};

export const useForm = (initialState: Props) => {
  const [values, setValues] = useState(initialState);
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const map = new Map<keyof typeof initialState, HTMLInputElement>();
  const inputRef = useRef<typeof map>();

  function getRefs() {
    if (!inputRef.current) {
      // Initialize the Map on first usage
      inputRef.current = map;
    }
    return inputRef.current;
  }

  function handleFocusInput(inputName: keyof typeof initialState) {
    const map = getRefs();
    const node = map.get(inputName as string);
    node?.focus();
  }

  function toggleShowPassword() {
    setIsPasswordVisible(!isPasswordVisible);
  }

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    isPasswordVisible,
    getRefs,
    handleFocusInput,
    toggleShowPassword,
    handleInputChange,
  };
};
