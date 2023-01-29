import React from "react";
import { Container, H1, Image, ContainerItens, Label, Input, Button } from "./styles"
import People from "./assets/people.svg"
import Arrow from "./assets/Arrow.svg"

const App = () => {
  return (

    <Container>
      <Image alt="image-logo" src={People}/>
      <ContainerItens>
        <H1>Olá!</H1>

        <Label>Nome</Label>
        <Input placeholder ="Nome"/>

        <Label>Idade</Label>
        <Input placeholder ="Idade"/>

        <Button >Cadastrar <img alt="seta" src={Arrow}></img></Button>

      </ContainerItens>

    </Container>

  )

}

export default App