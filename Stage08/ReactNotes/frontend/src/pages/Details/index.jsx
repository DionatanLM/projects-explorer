import { Container, Links, Content } from "./styles";
import { Button } from "../../components/Button";
import { ButtonText } from "../../components/ButtonText";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";

export function Details() {
  return (
    <Container>
      <Header />
      <main>
        <Content>
          <ButtonText name="Excluir nota" />

          <h1>Introdução ao React</h1>

          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Culpa,
            officiis. Numquam enim sint recusandae dolorum. Repudiandae beatae
            aut consectetur velit, iure repellendus. Minima enim voluptate
            ducimus a reiciendis, quis eos!
          </p>
          <Section title="Links úteis">
            <Links>
              <li>
                <a href="https://www.google.com.br" target="_blank">
                  Google
                </a>
              </li>
              <li>
                <a href="https://www.github.com" target="_blank">
                  GitHub
                </a>
              </li>
            </Links>
          </Section>

          <Section title="Marcadores">
            <Tag title="Express" />
            <Tag title="NodeJS" />
          </Section>
          <Button name="Salvar" />
        </Content>
      </main>
    </Container>
  );
}
