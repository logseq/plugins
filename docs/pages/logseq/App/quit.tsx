import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const quit: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="quit"
         />

        <Description
          ns="App"
          name="quit"
          comment=""
        />

       <Discuss
          ns="App"
          name="quit"
       />
      </div>
  )
}

export default quit