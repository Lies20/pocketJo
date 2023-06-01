import Cards from '../components/cards/Cards'
import Header from '../components/header/Header'

function Athletes() {

  const itemsData = [
    {
      title: 'toto',
      id: "test"
    },
    {
      title: 'toto',
      id: "test"
    },
    {
      title: 'toto',
      id: "test"
    },
  ]
  return (
    <>
    <Header/>
    {itemsData.slice(0, 3).map((item, index) => (
      <Cards 
      item={item}
      key={index}
      />
      ))};
      </>
  )
}

export default Athletes