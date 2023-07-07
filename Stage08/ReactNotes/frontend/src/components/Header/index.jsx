import { Container, Profile, Logout } from "./styles";
import { RiShutDownLine } from "react-icons/ri";

export function Header() {
  return (
    <Container>
      <Profile to="/profile">
        <img src="http://github.com/DionatanLM.png" alt="Avatar" />
        <div>
          <span>Bem-vindo</span>
          <strong>Dionatan de Lima</strong>
        </div>
      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  );
}
