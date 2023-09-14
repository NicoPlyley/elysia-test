import { Elysia } from 'elysia';
import users from "./blueprints/users/routes";

const app = new Elysia();
app.get('/:id', ({params: {id}}) => id)
app.use(users)
app.get('/', (context) => context)

export default app;
