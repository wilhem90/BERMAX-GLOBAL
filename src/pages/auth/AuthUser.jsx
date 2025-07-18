import { useState } from "react";
import LoginUser from "../../components/login/LoginUser";
import "./AuthUser.css";
import SignupUser from "../../components/signup/SignupUser";
import Loading from "../../components/loading/Loading";

export default function AuthUser() {
  const [showSignup, setSignup] = useState(false);
  const [loading, setLoading] = useState(false);

  const toggoleSignup = (prev) => {
    setSignup(!prev)
  }

  return (
    <main>
      {loading && <Loading />}
      {showSignup ? (
        <div className="auth-user-signup">
          <SignupUser setLoading={setLoading}/>
          <div>
            <span id="login-account" onClick={() => {
              toggoleSignup(true)
            }}>
              Já tenho conta!
            </span>
          </div>
        </div>
      ) : (
        <div className="auth-user-login">
          <LoginUser />
          <div className="forgetPassword-and-createAccount">
            <span id="forget-password">Esqueceu a senha?</span>
            <span id="create-account" onClick={() => {
              toggoleSignup(false)
            }}>
              Primeira entrada?
            </span>
          </div>
        </div>
      )}
    </main>
  );
}
