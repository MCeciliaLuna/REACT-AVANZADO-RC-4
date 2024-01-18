import { useState } from "react";

export const useForm = () => {

    const [formData, setFormData] = useState({});

    const onChangeInput = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        setFormData({
          ...formData,
          [field]: value,
        });
      };

  return {
    ...formData,
    formData,
    onChangeInput
  }
}
