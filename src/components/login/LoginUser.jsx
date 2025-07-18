import { useReducer } from "react";
import "./LoginUser.css";

export default function LoginUser() {
  document.title = "Auth";

  const initialState = {
    email: "",
    password: "",
  };

  const handleChange = (state, action) => {
    return action.type === "changeInput"
      ? {
          ...state,
          [action.field]: action.value,
        }
      : state;
  };

  const [state, dispatch] = useReducer(handleChange, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", state.email);
    console.log("Senha:", state.password);
    // Aqui você pode fazer a requisição para login
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <span className="title-form">Autenticação</span>

      <div className="box-email-user">
        <label htmlFor="emailUser">O seu email</label>
        <input
          type="email"
          name="emailUser"
          id="emailUser"
          placeholder="Digite o seu email"
          value={state.email}
          onChange={(e) =>
            dispatch({
              type: "changeInput",
              field: "email",
              value: e.target.value,
            })
          }
        />
      </div>

      <div className="box-password-user">
        <label htmlFor="passwordUser">A sua senha</label>
        <input
          type="password"
          name="passwordUser"
          id="passwordUser"
          placeholder="Digite a sua senha"
          value={state.password}
          onChange={(e) =>
            dispatch({
              type: "changeInput",
              field: "password",
              value: e.target.value,
            })
          }
        />
      </div>

      <button type="submit">Logar</button>
    </form>
  );
}
