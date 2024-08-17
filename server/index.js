const config = require('./config');
// const { connectDB } = require('./services/mongoose');
const app = require('./app');
const userModel = require('./models/userModel');
const eventModel = require('./models/eventModel');
const { connectDB } = require('./services/mongooseDb');
const PORT = process.env.PORT || config.port;

const start = async () => {

  // Dynamically import AdminJS and @adminjs/mongoose
  const { default: AdminJS } = await import('adminjs');
  const AdminJSMongoose = await import('@adminjs/mongoose');
  const { buildRouter } = await import('@adminjs/express');

  // Register AdminJS Mongoose adapter
  AdminJS.registerAdapter({
    Resource: AdminJSMongoose.Resource,
    Database: AdminJSMongoose.Database,
  });

  // Configure AdminJS
  const adminOptions = {
    resources: [
      { resource: userModel, options: { parent: { name: 'User Management' } } },
      { resource: eventModel, options: { parent: { name: 'Event Management' } } },
    ],
    rootPath: '/admin',
  };

  const admin = new AdminJS(adminOptions);
  const adminRouter = buildRouter(admin);
  app.use(admin.options.rootPath, adminRouter);

  app.listen(PORT, () => {
    console.log(`AdminJS started on http://localhost:${PORT}${admin.options.rootPath}`);
  });
  connectDB();
};

start();
