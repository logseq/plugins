import { NextPage } from 'next'
import { Description } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerSlashCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="registerSlashCommand"
          comment="
"
        />

       <Discuss
          ns="Editor"
          name="registerSlashCommand"
       />
      </div>
  )
}

export default registerSlashCommand