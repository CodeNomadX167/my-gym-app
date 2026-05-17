
export const workoutPlan = {
  1: { // Monday
    title: "Monday",
    morning: {
      title: "Lower Abs & Cardio",
      restDay: false,
      exercises: [
        { id: 'mon-m-w1', category: 'Warm-up', name: "Neck Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",},
        { id: 'mon-m-w2', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",  },
        { id: 'mon-m-w3', category: 'Warm-up', name: "Hip Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",  },
        { id: 'mon-m-w4', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min",},

        { id: 'mon-m-1', category: 'Abs', name: "Leg Raises", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'mon-m-2', category: 'Abs', name: "Reverse Crunch", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'mon-m-3', category: 'Abs', name: "Flutter Kicks", targetMuscle: "Lower Abs", sets: 3, reps: "30 sec" },
        { id: 'mon-m-4', category: 'Abs', name: "Toe Touch Crunch", targetMuscle: "Lower Abs", sets: 3, reps: 15 },

        { id: 'mon-m-c1', category: 'Cardio', name: "Jumping Jacks", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'mon-m-c2', category: 'Cardio', name: "High Knees", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'mon-m-c3', category: 'Cardio', name: "Fast Spot Run", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        
        { id: 'mon-m-c5', category: 'Cardio', name: "Shadow Box", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'mon-m-c6', category: 'Cardio', name: "Toe Touch Crunch", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" }
      ]
    },

    afternoon: {
      title: "Gym: Back + Biceps",
      restDay: false,
      exercises: [
        { id: 'mon-a-w1', category: 'Warm-up', name: "Jumping Jacks", targetMuscle: "Warmup", sets: 1, reps: "1 min", },

        { id: 'mon-a-w2', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'mon-a-w3', category: 'Warm-up', name: "Cat-Cow", targetMuscle: "Warmup", sets: 1, reps: "15 reps",  },

        { id: 'mon-a-w4', category: 'Warm-up', name: "Superman", targetMuscle: "Warmup", sets: 1, reps: "20 sec",  },
        { id: 'mon-a-w5', category: 'Warm-up', name: "Scapular Push-ups", targetMuscle: "Warmup", sets: 1, reps: "12 reps", },

        { id: 'mon-a-w6', category: 'Warm-up', name: "Push-ups", targetMuscle: "Warmup", sets: 1, reps: "10 reps",},

        { id: 'mon-a-1', category: 'Gym Workout', name: "Wide Lat Pulldown", targetMuscle: "Back", sets: 4, reps: 10 },
        { id: 'mon-a-2', category: 'Gym Workout', name: "Chest Supported Row", targetMuscle: "Back", sets: 4, reps: 10 },
        { id: 'mon-a-3', category: 'Gym Workout', name: "One Arm DB Row", targetMuscle: "Back", sets: 3, reps: 12 },
        { id: 'mon-a-4', category: 'Gym Workout', name: "Seated Cable Row", targetMuscle: "Back", sets: 3, reps: 12 },
        { id: 'mon-a-5', category: 'Gym Workout', name: "Back Extension", targetMuscle: "Lower Back", sets: 3, reps: 15 },
        { id: 'mon-a-6', category: 'Gym Workout', name: "Incline DB Curl", targetMuscle: "Biceps", sets: 3, reps: "10-12" },
        { id: 'mon-a-7', category: 'Gym Workout', name: "Hammer Curl", targetMuscle: "Biceps", sets: 3, reps: "10-12" }
      ]
    }
  },

  2: { // Tuesday
    title: "Tuesday",

    morning: {
      title: "Upper Abs & Cardio",
      restDay: false,

      exercises: [
        { id: 'tue-m-w1', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min",  },

        { id: 'tue-m-w2', category: 'Warm-up', name: "Torso Twists", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'tue-m-w3', category: 'Warm-up', name: "Shoulder Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'tue-m-1', category: 'Abs', name: "Crunches", targetMuscle: "Upper Abs", sets: 3, reps: 20 },
        { id: 'tue-m-2', category: 'Abs', name: "Bicycle Crunch", targetMuscle: "Upper Abs", sets: 3, reps: 20 },
        { id: 'tue-m-3', category: 'Abs', name: "Toe Touch Crunch", targetMuscle: "Upper Abs", sets: 3, reps: 15 },
        { id: 'tue-m-4', category: 'Abs', name: "Heel Touches", targetMuscle: "Obliques", sets: 3, reps: 20 },

        { id: 'tue-m-c1', category: 'Cardio', name: "High Knees", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest"},
        { id: 'tue-m-c2', category: 'Cardio', name: "Mountain Climbers", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest"},
        { id: 'tue-m-c3', category: 'Cardio', name: "Jumping Jacks", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest"},
        { id: 'tue-m-c4', category: 'Cardio', name: "Fast Spot Run", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest"},
        { id: 'tue-m-c5', category: 'Cardio', name: "Shadow Box", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest"}
      ]
    },
  
    afternoon: {
      title: "Gym: Chest + Triceps",
      restDay: false,
      exercises: [
        { id: 'tue-a-w1', category: 'Warm-up', name: "Fast Walk", targetMuscle: "Warmup", sets: 1, reps: "2 mins",  },

        { id: 'tue-a-w2', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'tue-a-w3', category: 'Warm-up', name: "Shoulder Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps",  },

        { id: 'tue-a-w4', category: 'Warm-up', name: "Wall Push-ups", targetMuscle: "Warmup", sets: 1, reps: "15 reps", },

        { id: 'tue-a-w5', category: 'Warm-up', name: "Push-ups", targetMuscle: "Warmup", sets: 1, reps: "10 reps", },

        { id: 'tue-a-1', category: 'Gym Workout', name: "Incline DB Press", targetMuscle: "Upper Chest", sets: 4, reps: "8-10" },
        { id: 'tue-a-2', category: 'Gym Workout', name: "Flat DB Press", targetMuscle: "Mid Chest", sets: 4, reps: 10 },
        { id: 'tue-a-3', category: 'Gym Workout', name: "Incline Smith Press", targetMuscle: "Chest", sets: 3, reps: 10 },
        { id: 'tue-a-4', category: 'Gym Workout', name: "Cable Fly", targetMuscle: "Chest", sets: 3, reps: 15 },
        { id: 'tue-a-5', category: 'Gym Workout', name: "OH DB Ext", targetMuscle: "Triceps", sets: 3, reps: 12 },
        { id: 'tue-a-6', category: 'Gym Workout', name: "Rope Pushdown", targetMuscle: "Triceps", sets: 3, reps: 12 }
      ]
    }
  },

  3: { // Wednesday
    title: "Wednesday",

    morning: {
      title: "Core, Plank & Light Cardio",
      restDay: false,

      exercises: [
        { id: 'wed-m-w1', category: 'Warm-up', name: "Hip Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps",  },

        { id: 'wed-m-w2', category: 'Warm-up', name: "Cat-Cow", targetMuscle: "Warmup", sets: 1, reps: "15 reps", },

        { id: 'wed-m-w3', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min", },

        { id: 'wed-m-1', category: 'Abs', name: "Forearm Plank", targetMuscle: "Core", sets: 3, reps: "45 sec" },
        { id: 'wed-m-2', category: 'Abs', name: "Side Plank", targetMuscle: "Obliques", sets: 3, reps: "30 sec" },
        { id: 'wed-m-3', category: 'Abs', name: "Dead Bug", targetMuscle: "Core", sets: 3, reps: 15 },
        { id: 'wed-m-4', category: 'Abs', name: "Bird Dog", targetMuscle: "Core", sets: 3, reps: 15 },
        { id: 'wed-m-5', category: 'Abs', name: "Russian Twist", targetMuscle: "Obliques", sets: 3, reps: 20 },

        { id: 'wed-m-c1', category: 'Cardio', name: "Walking", targetMuscle: "Cardio", sets: 1, reps: "Continuous"},
        { id: 'wed-m-c2', category: 'Cardio', name: "Slow Jogging", targetMuscle: "Cardio", sets: 1, reps: "Continuous"},
        { id: 'wed-m-c3', category: 'Cardio', name: "Shadow Boxing", targetMuscle: "Cardio", sets: 1, reps: "Continuous"}
      ]
    },

    afternoon: {
      title: "Gym: Shoulders + Abs",
      restDay: false,

      exercises: [
        { id: 'wed-a-w1', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps"},

        { id: 'wed-a-w2', category: 'Warm-up', name: "Shoulder Taps", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'wed-a-w3', category: 'Warm-up', name: "Pike Press Light", targetMuscle: "Warmup", sets: 1, reps: "8 reps", },

        { id: 'wed-a-w4', category: 'Warm-up', name: "Torso Twists", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'wed-a-w5', category: 'Warm-up', name: "High Knees", targetMuscle: "Warmup", sets: 1, reps: "30 sec", },

        { id: 'wed-a-1', category: 'Gym Workout', name: "Seated DB Press", targetMuscle: "Front Delts", sets: 4, reps: 10 },
        { id: 'wed-a-2', category: 'Gym Workout', name: "Cable Lateral Raise", targetMuscle: "Side Delts", sets: 4, reps: "12-15" },
        { id: 'wed-a-3', category: 'Gym Workout', name: "Rev Pec Deck", targetMuscle: "Rear Delts", sets: 4, reps: 12 },
        { id: 'wed-a-4', category: 'Gym Workout', name: "Face Pull", targetMuscle: "Rear Delts", sets: 3, reps: 15 },
        { id: 'wed-a-5', category: 'Gym Workout', name: "Crunches", targetMuscle: "Abs", sets: 3, reps: 15 },
        { id: 'wed-a-6', category: 'Gym Workout', name: "Toe Touch Crunch", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'wed-a-7', category: 'Gym Workout', name: "Plank", targetMuscle: "Core", sets: 3, reps: "45-60 sec" }
      ]
    }
  },


  4: { // Thursday
    title: "Thursday",

    morning: {
      title: "Lower Abs & Cardio",
      restDay: false,

      exercises: [
        { id: 'thu-m-w1', category: 'Warm-up', name: "Neck Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",  },

        { id: 'thu-m-w2', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",  },

        { id: 'thu-m-w3', category: 'Warm-up', name: "Hip Rotations", targetMuscle: "Warmup", sets: 1, reps: "10-20 reps",  },

        { id: 'thu-m-w4', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min", },

        { id: 'thu-m-1', category: 'Abs', name: "Leg Raises", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'thu-m-2', category: 'Abs', name: "Reverse Crunch", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'thu-m-3', category: 'Abs', name: "Flutter Kicks", targetMuscle: "Lower Abs", sets: 3, reps: "30 sec" },
        { id: 'thu-m-4', category: 'Abs', name: "Toe Touch Crunch", targetMuscle: "Lower Abs", sets: 3, reps: 15 },

        { id: 'thu-m-c1', category: 'Cardio', name: "Jumping Jacks", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'thu-m-c2', category: 'Cardio', name: "High Knees", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'thu-m-c3', category: 'Cardio', name: "Fast Spot Run", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'thu-m-c4', category: 'Cardio', name: "Skaters", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'thu-m-c5', category: 'Cardio', name: "Shadow Box", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'thu-m-c6', category: 'Cardio', name: "Toe Touch Crunch", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" }
      ]
    },

    afternoon: {
      title: "Gym: Legs + Forearms",
      restDay: false,

      exercises: [
        { id: 'thu-a-w1', category: 'Warm-up', name: "Squat", targetMuscle: "Warmup", sets: 1, reps: "15 reps",  },

        { id: 'thu-a-w2', category: 'Warm-up', name: "Leg Swings", targetMuscle: "Warmup", sets: 1, reps: "10 reps",  },

        { id: 'thu-a-1', category: 'Gym Workout', name: "Squat", targetMuscle: "Quads/Glutes", sets: 4, reps: "8-10" },
        { id: 'thu-a-2', category: 'Gym Workout', name: "RDL", targetMuscle: "Hamstrings", sets: 4, reps: 10 },
        { id: 'thu-a-3', category: 'Gym Workout', name: "Leg Press", targetMuscle: "Quads", sets: 3, reps: 12 },
        { id: 'thu-a-4', category: 'Gym Workout', name: "Leg Ext", targetMuscle: "Quads", sets: 3, reps: 15 },
        { id: 'thu-a-5', category: 'Gym Workout', name: "Leg Curl", targetMuscle: "Hamstrings", sets: 3, reps: 15 },
        { id: 'thu-a-6', category: 'Gym Workout', name: "Lunges", targetMuscle: "Legs", sets: 2, reps: 20 },
        { id: 'thu-a-7', category: 'Gym Workout', name: "Calf Raises", targetMuscle: "Calves", sets: 3, reps: "Failure" },
        { id: 'thu-a-8', category: 'Gym Workout', name: "Wrist Curl", targetMuscle: "Forearms", sets: 3, reps: 15 },
        { id: 'thu-a-9', category: 'Gym Workout', name: "Rev Wrist Curl", targetMuscle: "Brachioradialis", sets: 3, reps: 12 }
      ]
    }
  },

  5: { // Friday
    title: "Friday",

    morning: {
      title: "Upper Abs & Cardio",
      restDay: false,

      exercises: [
        { id: 'fri-m-w1', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min", },

        { id: 'fri-m-w2', category: 'Warm-up', name: "Torso Twists", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'fri-m-w3', category: 'Warm-up', name: "Shoulder Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps",  },

        { id: 'fri-m-1', category: 'Abs', name: "Crunches", targetMuscle: "Upper Abs", sets: 3, reps: 20 },
        { id: 'fri-m-2', category: 'Abs', name: "Bicycle Crunch", targetMuscle: "Upper Abs", sets: 3, reps: 20 },
        { id: 'fri-m-3', category: 'Abs', name: "Toe Touch Crunch", targetMuscle: "Upper Abs", sets: 3, reps: 15 },
        { id: 'fri-m-4', category: 'Abs', name: "Heel Touches", targetMuscle: "Obliques", sets: 3, reps: 20 },

        { id: 'fri-m-c1', category: 'Cardio', name: "High Knees", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'fri-m-c2', category: 'Cardio', name: "Mountain Climbers", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'fri-m-c3', category: 'Cardio', name: "Jumping Jacks", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'fri-m-c4', category: 'Cardio', name: "Fast Spot Run", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" },
        { id: 'fri-m-c5', category: 'Cardio', name: "Shadow Box", targetMuscle: "Cardio", sets: 1, reps: "40s work / 20s rest" }
      ]
    },

    afternoon: {
      title: "Gym: Upper Focus",
      restDay: false,

      exercises: [
        { id: 'fri-a-w1', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "15 reps",  },

        { id: 'fri-a-w2', category: 'Warm-up', name: "Push-ups", targetMuscle: "Warmup", sets: 1, reps: "10 reps",  },

        { id: 'fri-a-1', category: 'Gym Workout', name: "Incline DB Press", targetMuscle: "Upper Chest", sets: 3, reps: 10 },
        { id: 'fri-a-2', category: 'Gym Workout', name: "Wide Lat Pulldown", targetMuscle: "Back", sets: 3, reps: 10 },
        { id: 'fri-a-3', category: 'Gym Workout', name: "Chest Supported Row", targetMuscle: "Back", sets: 3, reps: 12 },
        { id: 'fri-a-4', category: 'Gym Workout', name: "Cable Lateral Raise", targetMuscle: "Side Delts", sets: 3, reps: 15 },
        { id: 'fri-a-5', category: 'Gym Workout', name: "Rev Pec Deck", targetMuscle: "Rear Delts", sets: 3, reps: 15 },
        { id: 'fri-a-6', category: 'Gym Workout', name: "Face Pull", targetMuscle: "Rear Delts", sets: 3, reps: 15 }
      ]
    }
  },

  6: { // Saturday
    title: "Saturday",

    morning: {
      title: "Core, Plank & Light Cardio",
      restDay: false,

      exercises: [
        { id: 'sat-m-w1', category: 'Warm-up', name: "Hip Rotations", targetMuscle: "Warmup", sets: 1, reps: "20 reps", },

        { id: 'sat-m-w2', category: 'Warm-up', name: "Cat-Cow", targetMuscle: "Warmup", sets: 1, reps: "15 reps",  },

        { id: 'sat-m-w3', category: 'Warm-up', name: "March in Place", targetMuscle: "Warmup", sets: 1, reps: "1 min", },

        { id: 'sat-m-1', category: 'Abs', name: "Forearm Plank", targetMuscle: "Core", sets: 3, reps: "45 sec" },
        { id: 'sat-m-2', category: 'Abs', name: "Side Plank", targetMuscle: "Obliques", sets: 3, reps: "30 sec" },
        { id: 'sat-m-3', category: 'Abs', name: "Dead Bug", targetMuscle: "Core", sets: 3, reps: 15 },
        { id: 'sat-m-4', category: 'Abs', name: "Bird Dog", targetMuscle: "Core", sets: 3, reps: 15 },
        { id: 'sat-m-5', category: 'Abs', name: "Russian Twist", targetMuscle: "Obliques", sets: 3, reps: 20 },

        { id: 'sat-m-c1', category: 'Cardio', name: "Walking", targetMuscle: "Cardio", sets: 1, reps: "Continuous" },
        { id: 'sat-m-c2', category: 'Cardio', name: "Slow Jogging", targetMuscle: "Cardio", sets: 1, reps: "Continuous" },
        { id: 'sat-m-c3', category: 'Cardio', name: "Shadow Boxing", targetMuscle: "Cardio", sets: 1, reps: "Continuous" }
      ]
    },

    afternoon: {
      title: "Gym: Arms + Abs",
      restDay: false,

      exercises: [
        { id: 'sat-a-w1', category: 'Warm-up', name: "Arm Rotations", targetMuscle: "Warmup", sets: 1, reps: "15 reps", },

        { id: 'sat-a-w2', category: 'Warm-up', name: "Torso Twists", targetMuscle: "Warmup", sets: 1, reps: "15 reps",  },

        { id: 'sat-a-1', category: 'Gym Workout', name: "Incline DB Curl", targetMuscle: "Biceps", sets: 3, reps: 12 },
        { id: 'sat-a-2', category: 'Gym Workout', name: "Hammer Curl", targetMuscle: "Biceps", sets: 3, reps: 12 },
        { id: 'sat-a-3', category: 'Gym Workout', name: "OH DB Ext", targetMuscle: "Triceps", sets: 3, reps: 12 },
        { id: 'sat-a-4', category: 'Gym Workout', name: "Rope Pushdown", targetMuscle: "Triceps", sets: 3, reps: 12 },
        { id: 'sat-a-5', category: 'Gym Workout', name: "Lat Raise", targetMuscle: "Side Delts", sets: 4, reps: 15 },
        { id: 'sat-a-6', category: 'Gym Workout', name: "Rev Wrist Curl", targetMuscle: "Forearms", sets: 3, reps: 15 },
        { id: 'sat-a-7', category: 'Gym Workout', name: "Leg Raises", targetMuscle: "Lower Abs", sets: 3, reps: 15 },
        { id: 'sat-a-8', category: 'Gym Workout', name: "Plank", targetMuscle: "Core", sets: 3, reps: "60 sec" }
      ]
    }
  },

  0: { // Sunday
    title: "Sunday",

    morning: {
      title: "Active Recovery",
      restDay: true,
      quote: "Rest, Recover, Rebuild. Muscles are torn in the gym, fed in the kitchen, and built in bed. Do some light stretching and deep breathing."
    },

    afternoon: {
      title: "Full Rest",
      restDay: true,
      quote: "Take today to reflect on your hard work. You've earned it."
    }
  }
};

