import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerCommandShortcut: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="registerCommandShortcut"
         />

        <Description
          ns="App"
          name="registerCommandShortcut"
          comment=""
        />

       <Discuss
          ns="App"
          name="registerCommandShortcut"
       />
      </div>
  )
}

export default registerCommandShortcut