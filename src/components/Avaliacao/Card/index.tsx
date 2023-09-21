import { Rating } from "@mui/material";
import IProfissional from "../../../types/IProfissional";
import styled from "styled-components";

const ContainerEstilizado = styled.div`
    flex: 40%;
    max-width: 100%;
    background-color: #ffffff;
    box-shadow: 2px 2px 8px rgba(0,0,0,0.15);
    border-radius: 8px;
    color: var(--cinza);
    margin: 0px 30px 30px 0px;
`;

const ListaEstilizada = styled.ul`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: space-between;
    padding: 0;
`;

const ItemEstilizado = styled.li`
    list-style: none;
    margin-right: 1em;
`;

const ItemInformacoesEstilizado = styled(ItemEstilizado)`
    flex-grow: 1;
`;

const ImagemEstilizada = styled.img`
    width: 64px;
    height: 64px;
    border-radius: 100%;
    margin-left: 1em;
    object-fit: cover;
    border: 2px solid var(--azul-claro);
`;

const ParagrafoNomeEstilizado = styled.p`
    font-weight: 700;
    margin-bottom: -2px;
`;

const ParagrafoEstilizado = styled.p`
    margin: .5em 0;
    font-size: 14px;
`;


function Card({ profissional }: { profissional: IProfissional }) {
  return (
    <ContainerEstilizado>
      <ListaEstilizada>
        <ItemEstilizado>
          <ImagemEstilizada
            src={profissional.imagem}
            alt={`Foto de perfil do profissional ${profissional.nome}`}
          />
        </ItemEstilizado>
        <ItemInformacoesEstilizado>
          <ParagrafoNomeEstilizado>{profissional.nome}</ParagrafoNomeEstilizado>
          <ParagrafoEstilizado>{profissional.especialidade}</ParagrafoEstilizado>
        </ItemInformacoesEstilizado>
        <ItemEstilizado>
          <Rating name="simple-controled" value={profissional.nota} readOnly={true} />
        </ItemEstilizado>
      </ListaEstilizada>
    </ContainerEstilizado>
  );
}

export default Card;
