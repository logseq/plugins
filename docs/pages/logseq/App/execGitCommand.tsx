import { NextPage } from 'next'
import { Description } from '@/components/Description'

const execGitCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <Description
          ns="App"
          name="execGitCommand"
          comment=""
        />
      </div>
  )
}

export default execGitCommand