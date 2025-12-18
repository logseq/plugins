import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const getCurrentGraphRecent: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="getCurrentGraphRecent"
         />

        <Description
          ns="App"
          name="getCurrentGraphRecent"
          comment=""
        />

       <Discuss
          ns="App"
          name="getCurrentGraphRecent"
       />
      </div>
  )
}

export default getCurrentGraphRecent