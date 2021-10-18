import { Div } from './styles';
import favicon from '../../assets/favicon.png'

const Sidebar = () => {
  return (
    <>
      <Div>
        <img className="ColabImage" src={favicon} alt="colab" />
      </Div>
    </>
  )
}

export default Sidebar;