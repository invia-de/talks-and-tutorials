# Invia - Talks and Tutorials

We love conference talks and online learning materials. That's why we made this
little and lovely front-end to collect videos that we find useful for us as
developers.

## Get it up and running

First you need Node.js and Git installed on your machine.
After that run:

```sh
git clone
cd talks-and-tutorials
npm i
npm run start
```

This should also work when using _yarn_ instead of _npm_.

For further information you can check out the [most recent guide of create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).

On top of the standard CRA scripts we also included a custom `analyze` script
which can be run with `npm run analyze`. This will use the `webpack-bundle-analyzer`
package to visualize the package size of the final bundle.

## I want to add a talk/tutorial

Awesome! You can open up a issue and let us know about the talk you want to see
added to our curated list. We will watch it at some point and will consider
adding them to our list.

## I would love to see feature X

If you have something in mind that would make our video list even better open
up a issue for your idea. We would love to hear and talk about it.

## But there are no tutorials!

Sorry for that. We will add some tutorials later on.

## What technology did you use to make this?

The website was made with Create-React-App, with a simple JSON file used as
video database and is hosted on GitHub pages. On top we added prettier to make
the code style consistent across contributers but all in all that's it. Quite
easy and straightforward.

## Can I use this to host my own curated list of talks?

Sure! This project is licensed under the MIT license. So you can also use it for
your own curated list of talks and tutorials. Just fork the project and get
started.

## Where do the components orignate from?

The components we use inside `talks-and-tutorials` are simply copied from a
private internal project. That's why some of the components have more options
available then we actually use here. We may consider to put them in the wild as
a standalone open-source repository at some point. But at the moment we lack
some confidence, time and permission to do so.

## Contribution

See the CONTRIBUTING.md to get a glimpse at how you can contribute to this
project.

## Code of Conduct

See the CODE_OF_CONDUCT.md.

## Disclaimer

This was roughly put together and there may occur bugs, probably layout related
ones since we mainly used CSS Grid and CSS Custom Properties (aka CSS Variables)
to built this little thingy. But nontheless it was and is fun. And that should
be one of the main reasons for you to contribute - having fun. Cheers!
