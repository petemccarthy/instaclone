export const standard = defineScenario({
  post: {
    one: {
      data: {
        user: {
          create: {
            email: 'String2818730',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },

    two: {
      data: {
        user: {
          create: {
            email: 'String3400806',
            hashedPassword: 'String',
            salt: 'String',
          },
        },
      },
    },
  },
})
