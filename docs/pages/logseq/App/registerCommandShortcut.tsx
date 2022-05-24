import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerCommandShortcut: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommandShortcut"
          comment="
"
        />

       <Discuss
          ns="App"
          name="registerCommandShortcut"
       />
      </div>
  )
}

export default registerCommandShortcut