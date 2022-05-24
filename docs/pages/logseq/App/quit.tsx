import { NextPage } from 'next'
import { Description } from '@/components/Description'

const quit: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="quit"
          comment=""
        />
      </div>
  )
}

export default quit