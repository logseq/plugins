import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraphConfigs: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getCurrentGraphConfigs"
         />

        <Description
          ns="App"
          name="getCurrentGraphConfigs"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraphConfigs"
       />
      </div>
  )
}

export default getCurrentGraphConfigs