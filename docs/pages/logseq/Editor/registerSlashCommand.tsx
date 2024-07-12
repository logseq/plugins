import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const registerSlashCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="Editor"
          name="registerSlashCommand"
         />

        <Description
          ns="Editor"
          name="registerSlashCommand"
          comment=""
        />

       <Discuss
          ns="Editor"
          name="registerSlashCommand"
       />
      </div>
  )
}

export default registerSlashCommand