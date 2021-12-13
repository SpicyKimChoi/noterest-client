import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { userState } from '../../atoms/userState';

const useAuth = () => {
  const setUserState = useSetRecoilState(userState);

  const [form, setForm] = useState({
    email: '',
    password: '',
    passwordConfirm: '',
    name: '',
  });

  const { email, password, name } = form;

  //   code...

  return {
    form,
    // ...
  };
};

export default useAuth;
