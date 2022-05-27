import { NextPage } from 'next'
import { Description, DescriptionHeader } from '@/components/Description'
import { Discuss } from '@/components/Discuss'

const execGitCommand: NextPage = () => {
  return (
      <div className="main-page-content">
        <DescriptionHeader
          ns="App"
          name="execGitCommand"
         />

        <Description
          ns="App"
          name="execGitCommand"
          comment=""
        />

       <Discuss
          ns="App"
          name="execGitCommand"
       />
      </div>
  )
}

export default execGitCommand