import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerUIItem: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerUIItem"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerUIItem"
       />
      </div>
  )
}

export default registerUIItem