import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const replaceState: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="replaceState"
         />

        <Description
          ns="App"
          name="replaceState"
          comment=""
        />

       <Discuss
          ns="App"
          name="replaceState"
       />
      </div>
  )
}

export default replaceState