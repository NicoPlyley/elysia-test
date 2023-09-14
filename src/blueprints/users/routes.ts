import { Elysia } from 'elysia';

const users = new Elysia({ prefix: '/users' });

users.get('/me', () => 'Hello me!');
users.get('/:name', ({params: {name}}) => name);
export default users;
