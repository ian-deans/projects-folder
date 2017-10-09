
const statNames = 'Team,teamId,primaryKey,Last Name,First Name,Position,Dev Traits,Jersey Number,Overall,Speed,Acceleration,Strength,Agility,Awareness,Catching,Carrying,Throw Power,Throw Accuracy,Kick Power,Kick Accuracy,Run Block,Pass Block,Tackle,Jumping,Kick Return,Injury,Stamina,Toughness,Trucking,Elusiveness,Ball Carrier Vision,Stiff Arm,Spin Move,Juke Move,Impact Blocking,Run Block Strength,Run Block Footwork,Pass Block Strength,Pass Block Footwork,Power Moves,Finesse Moves,Block Shedding,Pursuit,Play Recognition,Man Coverage,Zone Coverage,Spectacular Catch,Catch In Traffic,Route Running,Hit Power,Press,Release,Throw Accuracy Short,Throw Accuracy Mid,Throw Accuracy Deep,Play Action,Throw on the Run,Height,Weight,Age,Birthdate,Years Pro,College,Total Salary,Signing Bonus,Handedness,portraitId'


const nonNumericalStats = [
  'Team',
  '',
  '',
  '',
  '',
  '',
]

const statArray = statNames.split(',')

statArray.forEach(stat => console.log(stat))

console.log(statArray.length)


