import { NextPage } from 'next'
import { Description } from '@/components/Description'

const pushState: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="pushState"
          comment=""
        />
      </div>
  )
}

export default pushState