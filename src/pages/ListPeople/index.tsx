import { Container, Image } from './styles';
import Sidebar from "../../components/sidebar";
import ViewPeople from '../../components/itens'
import colab from '../../assets/colab.png'

const ListPeople = () => {
  return (
    <>
      <Container>
        <Sidebar />
        <Image><img className="ColabName" src={colab} alt="colab" /></Image>
        <ViewPeople />
      </Container>
    </>
  )
}

export default ListPeople;
