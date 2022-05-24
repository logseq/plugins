import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getCurrentGraph: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getCurrentGraph"
          comment=""
        />
      </div>
  )
}

export default getCurrentGraph