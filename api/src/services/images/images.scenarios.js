export const standard = defineScenario({
  image: {
    one: {
      data: {
        url: 'String',
        post: {
          create: {
            user: {
              create: {
                email: 'String3357755',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },

    two: {
      data: {
        url: 'String',
        post: {
          create: {
            user: {
              create: {
                email: 'String88445',
                hashedPassword: 'String',
                salt: 'String',
              },
            },
          },
        },
      },
    },
  },
})
