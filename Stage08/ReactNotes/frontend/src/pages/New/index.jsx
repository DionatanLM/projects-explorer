import { Link } from "react-router-dom";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { Textarea } from "../../components/Textarea";
import { NoteItem } from "../../components/NoteItem";
import { Section } from "../../components/Section";
import { Button } from "../../components/Button";

export function New() {
  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar nota</h1>
            <Link to="/">Voltar</Link>
          </header>
          <Input placeholder="Titulo" />
          <Textarea placeholder="Observações" />
          <Section title="Links úteis">
            <NoteItem value={"https://rocketseat.com.br"} />
            <NoteItem isNew placeholder="Adicionar novo link" />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="react" />
              <NoteItem isNew placeholder="Adicionar novo tag" />
            </div>
          </Section>
          <Button name="Salvar" />
        </Form>
      </main>
    </Container>
  );
}
