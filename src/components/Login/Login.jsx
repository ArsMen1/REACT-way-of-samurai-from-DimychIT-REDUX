import React from "react";
import { Field, reduxForm } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field name={"login"} placeholder={"login"} component={"input"} />
      </div>
      <div>
        <Field name={"password"} placeholder={"Password"} component={"input"} />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={"input"} />
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
