import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerPageMenuItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerPageMenuItem"
          comment=""
        />
      </div>
  )
}

export default registerPageMenuItem