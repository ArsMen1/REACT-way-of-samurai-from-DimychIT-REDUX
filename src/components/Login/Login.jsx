import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import {
  required,
  maxLengthCreator,
  minLengthCreator,
} from "../../utils/validators";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import s from "../common/FormsControls/FormsControls.module.css";

const maxLength30 = maxLengthCreator(30);
const minLength4 = minLengthCreator(4);

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={"email"}
          placeholder={"Email:"}
          component={Input}
          validate={[required, maxLength30, minLength4]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"Password:"}
          type={"password"}
          component={Input}
          validate={[required, maxLength30, minLength4]}
        />
      </div>
      <div>
        <Field name={"rememberMe"} type={"checkbox"} component={Input} />
        Запомнить меня
      </div>
      {props.error && <div className={s.formSummaryError}>{props.error}</div>}
      <button>Войти</button>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  form: "login", // уникальное имя формы
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (props.isAuth) {
    return <Redirect to={"/profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
