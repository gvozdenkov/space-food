import { ChangeEvent, useRef, useState } from 'react';

type Props = {
  [key: string]: string;
};

export const useForm = (initialState: Props) => {
  const [values, setValues] = useState(initialState);

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

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  return {
    values,
    getRefs,
    handleFocusInput,
    handleInputChange,
  };
};
