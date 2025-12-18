import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setCurrentGraphConfigs: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setCurrentGraphConfigs"
         />

        <Description
          ns="App"
          name="setCurrentGraphConfigs"
          comment=""
        />

       <Discuss
          ns="App"
          name="setCurrentGraphConfigs"
       />
      </div>
  )
}

export default setCurrentGraphConfigs