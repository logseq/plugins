import { NextPage } from 'next'
import { Description } from '@/components/Description'

const getStateFromStore: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="getStateFromStore"
          comment="
"
        />
      </div>
  )
}

export default getStateFromStore