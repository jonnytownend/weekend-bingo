const entries = [
  "Black Backed Seagul",
  "Lord of the Rings",
  "Watched a film / binge-watched a series",
  "Went for a drink / meal",
  "Took photos",
  "Played games",
  "Pirate ships",
  "Went for a walk",
  "Met with friends",
  "Beach or park",
  "DIY / Made something",
  "Horses / pets",
  "Baked",
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