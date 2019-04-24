import React, { Component } from "react";
import PropTypes from "prop-types";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";
import Wallpaper from "../components/Wallpaper";
import ButtonSubmit from "../components/ButtonSubmit";
import SignupSection from "../components/SignupSection";

export default class LoginScreen extends Component {
  render() {
    return (
      <Wallpaper>
        <Logo />
        <LoginForm />
        <ButtonSubmit Text="LOGIN" />
        <SignupSection
          TextFirst="Create Account"
          TextSecond="Forget Password?"
        />
      </Wallpaper>
    );
  }
}
