import { useReducer } from "react";
import "./SignupUser.css";
import { auth, createUserWithEmailAndPassword } from "../../db/configFirebase";

export default function SignupUser({ setLoading }) {
  const initialState = {
    nome: "",
    email: "",
    pais: "",
    senha: Math.floor(10_000_000 + Math.random() * 90_000_000), // 8 dígitos
  };

  function handleChange(state, action) {
    if (action.type === "inputChange") {
      return {
        ...state,
        [action.field]: action.value,
      };
    }
    return state;
  }

  const [state, dispatch] = useReducer(handleChange, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true)
    createUserWithEmailAndPassword(auth, state.email, state.senha)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user.getIdToken());
      })
      .catch((error) => {
        console.log();
        if (error.code === "auth/email-already-in-use") {
          alert("Email already in use!")
        }
      }).finally(() => {
        setLoading(false)
      });
    // Aqui você pode fazer a requisição para login ou cadastro
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <span className="title-form">Criar conta</span>

      <div className="box-email-user">
        <label htmlFor="inputNome">Nome da empresa</label>
        <input
          type="text"
          name="inputNome"
          id="inputNome"
          value={state.nome}
          placeholder="Nome da empresa"
          onChange={(e) => {
            dispatch({
              field: "nome",
              type: "inputChange",
              value: e.target.value.toUpperCase(),
            });
          }}
          required
        />
      </div>

      <div className="box-email-user">
        <label htmlFor="inputEmail">Digite o seu email</label>
        <input
          type="email"
          name="inputEmail"
          id="inputEmail"
          value={state.email}
          placeholder="Digite o seu email"
          onChange={(e) => {
            dispatch({
              field: "email",
              type: "inputChange",
              value: (e.target.value).toLowerCase(),
            });
          }}
          required
        />
      </div>

      <div className="box-country-user">
        <select name="selectCountry" id="selectCountry" onChange={(e) => {
          dispatch({
            field: "pais",
            type: "inputChange",
            value: e.target.value
          })
          console.log(state);
        }} required>
          <option value="" disabled>Selecione o pais</option>
          <option value="brasil">Brasil</option>
          <option value="chile">Chile</option>
          <option value="mexixo">Mexico</option>
        </select>
      </div>

      <button type="submit">Criar</button>
    </form>
  );
}
