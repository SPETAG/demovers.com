// home/landing page...
import Homelay from '../components/layouts/home'
export default function Home() {
  return (
    <>
    </>
  )
}

// rendering the hoem function to it layout...
Home.getLayout = function getLayout(page) {
  return (
    <Homelay>
      {page}
    </Homelay>
  )
}