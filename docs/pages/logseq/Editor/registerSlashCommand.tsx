import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerSlashCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="Editor"
          name="registerSlashCommand"
          comment="
"
        />
      </div>
  )
}

export default registerSlashCommand