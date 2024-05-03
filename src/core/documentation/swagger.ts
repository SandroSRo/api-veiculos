import swaggerJsdoc from 'swagger-jsdoc';


const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'API of vehicles',
      version: '1.0.0',
      description: 'Documentation API vehicles',
    },
    servers: [
      {
        url: 'http://localhost:3000',
        description: 'Server of development',
      },
    ],
  },
  apis: ['./src/interfaces/routes/*.ts'],
};

const specs = swaggerJsdoc(options);

export default specs
