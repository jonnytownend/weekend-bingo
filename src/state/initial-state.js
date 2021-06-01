const entries = ["Black Backed Seagull", "Went for a dinner", "Built a pirate ship", "DIY", "Horses", "Went for coffee", "Beach", "Park", "Took photos", "Baked", "Car trouble", "Lord of the Rings", "Walked", "Lego", "Played an instrument", "Watched a film", "Watched a series", "Played a board game", "Saw friends", "Played a video game", "Dogs", "Epic fail", "Played football", "Played cricket", "Played frisbee", "Played tennis", "Played sport", "Saw someone else from Brightec", "Bitcoin", "BBQ", "Hungover", "Watched a sport", "Weekend trip away", "Mario", "Birthday party", "Went to a castle", "Painted", "Made balloon animals", "Got a haircut", "Went on a roadtrip", "Coded", "Side projects", "Drew", "Gartic Phone", "Sailed on a boat", "Kayaked", "Went on a train", "Flew on a plane", "Bought a new plant", "Did some gardening", "Dug a hole", "Saw family", "Went to Cornwall", "Moved house", "Bought a car", "Bought a train ticket through one of the apps we produce", "Not much happened", "Snowed in", "Bought a print on rhys.photos", "Changed a lightbulb", "Read a book", "Listened to a podcast", "Watched a documentary", "Watched Chelsea not win the league (again)", "Went skating", "Went on a bike ride", "Went to a museum", "Went to band practise", "Went to the gym", "Did some yoga", "Went on a run", "Saw a long lost friend", "Went on a treasure hunt", "Swam in the sea", "Visited an island", "Had an ice cream", "Went away for the weekend", "Played mini golf", "Cut the grass", "Quiet weekend", "Felt under the weather", "Went to the pub", "Planted a tree", "Went swimming", "Among us", "Got a new phone", "Went to the big Tescos just to feel something", "Fishing", "Camping", "Ice skated", "Roller skated", "Had a snow ball fight", "Built a snowman", "Went to a protest", "Went to a dance class", "Built a sandcastle", "Bird watching", "Rock climbing", "New shoes", "Having a baby"]

export const initialState = () => {
    const randomEntries = shuffle(entries)
    return randomEntries.map((entry, index) => (
        {
            title: entry,
            isChecked: false,
            isStarred: false,
            id: index,
        }
    ))
}

function shuffle(array) {
    var currentIndex = array.length,  randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }

    return array.slice(0,15);
}