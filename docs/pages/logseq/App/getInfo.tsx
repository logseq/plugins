import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getInfo"
          comment=""
        />
      </div>
  )
}

export default getInfo