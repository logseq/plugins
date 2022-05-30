import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getUserInfo: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getUserInfo"
         />

        <Description
          ns="App"
          name="getUserInfo"
          comment=""
        />

       <Discuss
          ns="App"
          name="getUserInfo"
       />
      </div>
  )
}

export default getUserInfo