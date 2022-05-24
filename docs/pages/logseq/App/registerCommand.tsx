import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommand"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerCommand"
       />
      </div>
  )
}

export default registerCommand