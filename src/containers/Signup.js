import React, { useState } from "react";
import { Auth } from "aws-amplify";

import { useForm, useStore } from "../hooks";
import { AUTH_LOGIN } from "../reducers/actions";

import { API, graphqlOperation } from "aws-amplify";
import { createUser } from "../graphql/mutations";
import { areaIdTemp } from "../constants";

const SignupForm = ({ values, handleChange, handleSubmit }) => {
  return (
    <div>
      {" "}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="email"
          onChange={handleChange}
          placeholder="enter email"
        />
        <input
          type="password"
          name="password"
          onChange={handleChange}
          placeholder="enter password"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const ConfirmationForm = ({ handleSubmit, handleChange }) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="code"
          onChange={handleChange}
          placeholder="enter confirmation code"
        />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

const Signup = props => {
  let [user, setUser] = useState(null);
  const [{ auth }, dispatch] = useStore();

  const signupSubmit = async () => {
    setIsLoading(true);
    try {
      const newUser = await Auth.signUp({
        username: signupValues.email,
        password: signupValues.password,
        options: { email: signupValues.email }
      });
      setUser(newUser);
      console.log("signed up");
    } catch (err) {
      console.log("signup err", err);
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const confirmationSubmit = async () => {
    console.log("TRYING TO CONFIRM  ");
    setIsLoading(true);
    try {
      await Auth.confirmSignUp(signupValues.email, confirmationValues.code, {
        email: signupValues.email
      });

      await Auth.signIn(signupValues.email, signupValues.password);
      const user = await Auth.currentUserInfo();
      dispatch({ type: AUTH_LOGIN, payload: user });
      console.log("dispatched");
      const result = await API.graphql(
        graphqlOperation(createUser, {
          input: {
            userType: "admin",
            name: signupValues.email,
            uid: user.username,
            userAreaId: areaIdTemp
          }
        })
      );
      console.log("result", result);
      props.history.push("/");
    } catch (err) {
      console.log("confirmation error", err);
      setError(err);
    } finally {
      setIsLoading(false);
      console.log("ALL DONE ");
    }
  };

  const {
    values: signupValues,
    handleChange: handleSignupChange,
    handleSubmit: handleSignupSubmit
  } = useForm(signupSubmit);
  const {
    values: confirmationValues,
    handleChange: handleConfirmationChange,
    handleSubmit: handleConfirmationSubmit
  } = useForm(confirmationSubmit);
  let [isloading, setIsLoading] = useState(false);
  let [error, setError] = useState(null);

  return (
    <div>
      {user ? (
        <ConfirmationForm
          values={confirmationValues}
          handleChange={handleConfirmationChange}
          handleSubmit={handleConfirmationSubmit}
        />
      ) : (
        <SignupForm
          handleSubmit={handleSignupSubmit}
          values={signupValues}
          handleChange={handleSignupChange}
        />
      )}
      {isloading && <p>Loading</p>}
      {error && <p>{error.message}</p>}
    </div>
  );
};

export default Signup;
