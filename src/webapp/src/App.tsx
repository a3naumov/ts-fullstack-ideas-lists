export const App = () => {
  const ideas = [
    {
      nick: 'cool-idea-nick-1',
      name: 'Idea 1',
      description: 'Idea 1 description..',
    },
    {
      nick: 'cool-idea-nick-2',
      name: 'Idea 2',
      description: 'Idea 2 description..',
    },
    {
      nick: 'cool-idea-nick-3',
      name: 'Idea 3',
      description: 'Idea 3 description..',
    },
    {
      nick: 'cool-idea-nick-4',
      name: 'Idea 4',
      description: 'Idea 4 description..',
    },
    {
      nick: 'cool-idea-nick-5',
      name: 'Idea 5',
      description: 'Idea 5 description..',
    },
  ]
  return (
    <div>
      <h1>Ideanick</h1>
      {ideas.map((idea) => {
        return (
          <div>
            <h2>{idea.name}</h2>
            <p>{idea.description}</p>
          </div>
        )
      })}
    </div>
  )
}
