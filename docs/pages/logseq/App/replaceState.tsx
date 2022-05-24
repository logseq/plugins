import { NextPage } from 'next'
import { Description } from '@/components/Description'

const replaceState: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="replaceState"
          comment=""
        />
      </div>
  )
}

export default replaceState