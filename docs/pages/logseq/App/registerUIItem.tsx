import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerUIItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerUIItem"
          comment=""
        />
      </div>
  )
}

export default registerUIItem