import { NextPage } from 'next'
import { Description } from '@/components/Description'

const queryElementById: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="queryElementById"
          comment=""
        />
      </div>
  )
}

export default queryElementById