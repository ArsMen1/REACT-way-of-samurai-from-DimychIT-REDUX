import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/validators";

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"login"}
          placeholder={"Login"}
          component={Input}
          validate={[required, maxLength30, minLength4]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"Password"}
          component={Input}
          validate={[required, maxLength30, minLength4]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />
        Запомнить меня
      </div>
      <button>Войти</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login", // уникальное имя формы
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    console.log(formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
