import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get('https://group-bse24-2.onrender.com/api/team-members/', (req, res, ctx) => {
    return res(
      ctx.delay(100), // Simulate network delay to ensure loading state is captured
      ctx.json([
        { id: 1, name: 'John Doe', role: 'Developer', bio: 'Bio', avatar: '' },
      ])
    );
  }),
  rest.get('https://group-bse24-2.onrender.com/api/blog-posts/', (req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json([
        {
          id: 1,
          title: 'Test Post',
          author: { name: 'John Doe' },
          date: '2025-10-18',
          excerpt: 'Excerpt',
          content: 'Content',
        },
      ])
    );
  }),
  rest.get('https://group-bse24-2.onrender.com/api/about/', (req, res, ctx) => {
    return res(
      ctx.delay(100),
      ctx.json([{ content: 'Mocked about content' }])
    );
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

export default server;