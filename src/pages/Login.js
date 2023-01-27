import LoginField from "../components/loginField/loginField";

const Login = (props) => {
    return (
        <LoginField enableLogin={props.enableLogin} />
    )
}

export default Login;