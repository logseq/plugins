import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const setStateFromStore: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="setStateFromStore"
         />

        <Description
          ns="App"
          name="setStateFromStore"
          comment=""
        />

       <Discuss
          ns="App"
          name="setStateFromStore"
       />
      </div>
  )
}

export default setStateFromStore