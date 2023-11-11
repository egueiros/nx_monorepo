# Workspace

<a alt="Nx logo" href="https://reactnative.dev" target="_blank" rel="noreferrer"><img src="https://raw.githubusercontent.com/nrwl/nx/master/images/nx-logo.png" width="45"></a> 👋 <a alt="RN logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://reactnative.dev/img/header_logo.svg" width="40"></a> 🙌 <a alt="RN logo" href="https://nx.dev" target="_blank" rel="noreferrer"><img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/2560px-Nextjs-logo.svg.png" height="25"></a> 👌

✨ **This us a boilerplate workspace that uses [Nx](https://nx.dev) and includes a [React Native](https://reactnative.dev) and a [Next.js](https://nextjs.org) that has been setup to be used with [RN Web](https://necolas.github.io/react-native-web)**   ✨

This repo is meant to be instructional as well, therefore the work has been broken down in branches so you can see incremental updates.

## Branches

Checkout the `step3` branch for the final result.

 - The `main` branch is the starting point. It contains both apps but they don't share any resource.
 - The `step2` branch contains the work done for RN Web to work in the Next.js app.
 - The `step3` branch contains a *home feature* and a *button component* in a shared library used by both apps.


## Start the app

- To start the development server run `yarn nx serve web`. Open your browser and navigate to http://localhost:4200/.
- To start the mobile app run `yarn nx run mobile`, this will start the metro bundler.

## Generate code

If you happen to use Nx plugins, you can leverage code generators that might come with it.

Run `nx list` to get a list of available plugins and whether they have generators. Then run `nx list <plugin-name>` to see what generators are available.

Learn more about [Nx generators on the docs](https://nx.dev/plugin-features/use-code-generators).

## Running tasks

To execute tasks with Nx use the following syntax:

```
nx <target> <project> <...options>
```

You can also run multiple targets:

```
nx run-many -t <target1> <target2>
```

..or add `-p` to filter specific projects

```
nx run-many -t <target1> <target2> -p <proj1> <proj2>
```

Targets can be defined in the `package.json` or `projects.json`. Learn more [in the docs](https://nx.dev/core-features/run-tasks).

## Want better Editor Integration?

Have a look at the [Nx Console extensions](https://nx.dev/nx-console). It provides autocomplete support, a UI for exploring and running tasks & generators, and more! Available for VSCode, IntelliJ and comes with a LSP for Vim users.

## Ready to deploy?

Just run `nx build demoapp` to build the application. The build artifacts will be stored in the `dist/` directory, ready to be deployed.

## Set up CI!

Nx comes with local caching already built-in (check your `nx.json`). On CI you might want to go a step further.

- [Set up remote caching](https://nx.dev/core-features/share-your-cache)
- [Set up task distribution across multiple machines](https://nx.dev/core-features/distribute-task-execution)
- [Learn more how to setup CI](https://nx.dev/recipes/ci)

## Connect with us!

- [Join the community](https://nx.dev/community)
- [Subscribe to the Nx Youtube Channel](https://www.youtube.com/@nxdevtools)
- [Follow us on Twitter](https://twitter.com/nxdevtools)
