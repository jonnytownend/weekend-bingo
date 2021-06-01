const entries = [
  "Avian encounter!",
  "Watched a film / binge-watched a series",
  "Went for a drink / meal",
  "Took photos",
  "Played games",
  "Pirate ships",
  "Went for a walk",
  "A blast from the past!",
  "Met with friends",
  "Beach or park",
  "DIY / Made something",
  "Horses / pets",
  "Baked / prepared a meal",
  "Music",
  "Epic fail!",
]

export const initialState = entries.map((entry, index) => (
  {
    title: entry,
    isChecked: false,
    isStarred: false,
    id: index,
  }
))