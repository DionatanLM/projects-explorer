import { Container, Form, Avatar } from "./styles";
import { FiArrowLeft } from "react-icons/fi";
import { FiMail, FiLock, FiUser, FiCamera } from "react-icons/fi";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
export function Profile() {
  return (
    <Container>
      <header>
        <Link to="/">
          <FiArrowLeft />
        </Link>
      </header>

      <Form>
        <Avatar>
          <img src="https://github.com/DionatanLM.png" alt="Dionatan LM" />
          <label htmlFor="avatar">
            <FiCamera />
            <input id="avatar" type="file" />
          </label>
        </Avatar>
        <Input placeholder="Nome" icon={FiUser} type="text" />
        <Input placeholder="Email" icon={FiMail} type="text" />
        <Input placeholder="Senha atual" icon={FiLock} type="password" />
        <Input placeholder="Nova senha" icon={FiLock} type="password" />
        <Button name="Salvar" />
      </Form>
    </Container>
  );
}
