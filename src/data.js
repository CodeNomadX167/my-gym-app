export const workoutPlan = {
  1: { // Monday
    title: "Monday – Push A (Heavy)",
    restDay: false,
    exercises: [
  
      { id: 'pushA-1', category: 'Workout', name: "Incline Dumbbell Press", targetMuscle: "Upper Chest", sets: 4, reps: "6-8" },
      { id: 'pushA-2', category: 'Workout', name: "Flat Barbell Bench Press", targetMuscle: "Chest", sets: 3, reps: "6-8" },
      { id: 'pushA-3', category: 'Workout', name: "Dumbbell Shoulder Press", targetMuscle: "Front Delts", sets: 3, reps: "8-10" },
      { id: 'pushA-4', category: 'Workout', name: "Cable Lateral Raise", targetMuscle: "Side Delts", sets: 5, reps: "12-15" },
      { id: 'pushA-5', category: 'Workout', name: "Overhead Cable Extension", targetMuscle: "Triceps", sets: 3, reps: "10-12" },
      { id: 'pushA-6', category: 'Workout', name: "Rope Pushdown", targetMuscle: "Triceps", sets: 2, reps: "12-15" }

    ]
  },
  2: { // Tuesday
    title: "Tuesday – Pull A (Heavy)",
    restDay: false,
    exercises: [

      { id: 'pullA-1', category: 'Workout', name: "Lat Pulldown", targetMuscle: "Lats", sets: 4, reps: "8-10" },
      { id: 'pullA-2', category: 'Workout', name: "One Arm Cable Lat Pulldown", targetMuscle: "Lats", sets: 4, reps: "10-12" },
      { id: 'pullA-3', category: 'Workout', name: "Chest Supported Row", targetMuscle: "Upper Back", sets: 4, reps: "8-10" },
      { id: 'pullA-4', category: 'Workout', name: "Dumbbell Shrugs", targetMuscle: "Traps", sets: 3, reps: "10-12" },
      { id: 'pullA-5', category: 'Workout', name: "Close Grip Barbell Curl", targetMuscle: "Biceps", sets: 3, reps: "8-10" },
      { id: 'pullA-6', category: 'Workout', name: "Hammer Curl", targetMuscle: "Brachialis", sets: 3, reps: "10-12" }

    ]
  },
  3: { // Wednesday
    title: "Wednesday – Legs A (Heavy) ",
    restDay: false,
    exercises: [

      { id: 'legsA-1', category: 'Workout', name: "Back Squat", targetMuscle: "Quads", sets: 4, reps: "6-8" },
      { id: 'legsA-2', category: 'Workout', name: "Leg Extension", targetMuscle: "Quads", sets: 4, reps: "12-15" },
      { id: 'legsA-3', category: 'Workout', name: "Seated Leg Curl", targetMuscle: "Hamstrings", sets: 5, reps: "10-12" },
      { id: 'legsA-4', category: 'Workout', name: "Standing Calf Raise", targetMuscle: "Calves", sets: 5, reps: "12-15" },
      { id: 'legsA-5', category: 'Workout', name: "Adductor Machine", targetMuscle: "Adductors", sets: 3, reps: "12-15" },
      { id: 'legsA-6', category: 'Workout', name: "Cable Crunch", targetMuscle: "Abs", sets: 3, reps: "12-15" }
]

  },
  4: { // Thursday
    title: "Thursday – Push B (Medium)",
    restDay: false,
    exercises: [
    
      { id: 'pushB-1', category: 'Workout', name: "Incline Barbell Bench Press", targetMuscle: "Upper Chest", sets: 4, reps: "8-10" },
      { id: 'pushB-2', category: 'Workout', name: "High to Low Cable Fly", targetMuscle: "Chest", sets: 3, reps: "12-15" },
      { id: 'pushB-3', category: 'Workout', name: "Dumbbell Lateral Raise", targetMuscle: "Side Delts", sets: 5, reps: "12-15" },
      { id: 'pushB-4', category: 'Workout', name: "Reverse Pec Deck", targetMuscle: "Rear Delts", sets: 4, reps: "12-15" },
      { id: 'pushB-5', category: 'Workout', name: "Overhead Cable Extension", targetMuscle: "Triceps", sets: 2, reps: "12-15" },
      { id: 'pushB-6', category: 'Workout', name: "Rope Pushdown", targetMuscle: "Triceps", sets: 3, reps: "12-15" }
]
  },
  5: { // Friday
    title: "Friday – Pull B (Medium)",
    restDay: false,
    exercises: [
    
      { id: 'pullB-1', category: 'Workout', name: "Lat Pulldown", targetMuscle: "Lats", sets: 4, reps: "10-12" },
      { id: 'pullB-2', category: 'Workout', name: "Chest Supported Row", targetMuscle: "Upper Back", sets: 4, reps: "10-12" },
      { id: 'pullB-3', category: 'Workout', name: "Back Extension", targetMuscle: "Lower Back", sets: 3, reps: "12-15" },
      { id: 'pullB-4', category: 'Workout', name: "Dumbbell Shrugs", targetMuscle: "Traps", sets: 3, reps: "12-15" },
      { id: 'pullB-5', category: 'Workout', name: "Preacher Curl", targetMuscle: "Biceps", sets: 4, reps: "10-12" },
      { id: 'pullB-6', category: 'Workout', name: "Wrist Curl", targetMuscle: "Forearms", sets: 3, reps: "15-20" },
      { id: 'pullB-7', category: 'Workout', name: "Reverse Wrist Curl", targetMuscle: "Forearms", sets: 3, reps: "15-20" }
]

  },
  6: { // Saturday
    title: "Saturday – Legs B (Medium)",
    restDay: false,
    exercises: [
    
      { id: 'legsB-1', category: 'Workout', name: "Back Squat", targetMuscle: "Quads", sets: 3, reps: "8-10" },
      { id: 'legsB-2', category: 'Workout', name: "Leg Extension", targetMuscle: "Quads", sets: 4, reps: "12-15" },
      { id: 'legsB-3', category: 'Workout', name: "Seated Leg Curl", targetMuscle: "Hamstrings", sets: 5, reps: "12-15" },
      { id: 'legsB-4', category: 'Workout', name: "Standing Calf Raise", targetMuscle: "Calves", sets: 5, reps: "15-20" },
      { id: 'legsB-5', category: 'Workout', name: "Adductor Machine", targetMuscle: "Adductors", sets: 2, reps: "12-15" },
      { id: 'legsB-6', category: 'Workout', name: "Hanging Leg Raise", targetMuscle: "Lower Abs", sets: 3, reps: "12-15" },
      
]
  },
  0: { // Sunday
    title: "Sunday – Rest Day",
    restDay: true,
    quote: "Rest & Recovery Day. Muscles are torn in the gym, fed in the kitchen, and built in bed. Focus on light stretching, mobility work, and deep breathing to prepare for the week ahead."
  }
};
