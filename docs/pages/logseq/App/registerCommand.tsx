import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommand"
          comment=""
        />
      </div>
  )
}

export default registerCommand