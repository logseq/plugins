import { NextPage } from 'next'
import { Description } from '@/components/Description'

const registerCommandShortcut: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="registerCommandShortcut"
          comment="
"
        />
      </div>
  )
}

export default registerCommandShortcut