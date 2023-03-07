# React test for SMART-TRIBUNE

## Presentation

Here is a bootstrapped project oriented to test you frontend developer skills.

> :warning: You will not find ~~TypeScript~~ as static type checker but <b>[FlowType](https://flow.org/)</b>.
> Make sure to **disable typescript checker** in your IDE.

### Launch project

#### In your IDE

Try to intall flow language support.

* VSCode: https://marketplace.visualstudio.com/items?itemName=flowtype.flow-for-vscode

#### Install

This project is **dockerized**, and helped with a [Makefile](./Makefile).

* [Docker](https://docs.docker.com/)
* [Docker compose plugin](https://docs.docker.com/compose/)

#### Launch

1. Clone your repository
2. Launch project when on project root folder

``` sh
make launch
```

3. If you want to open a new shell to run tests, you can open a new terminal on project root folder and run

``` sh
make shell
```

#### Level 1 : To test is to doubt... but it's better than not to test

For this first level, you'll have to use Jest to test 1 react component, and 1 JS class.

The component is located in <code>src/App/Level1/Component.js</code> and the class in <code>src/App/Level1/MathView.js</code>
So please complete the test files <code>src/App/Level1/Component.spec.js</code> and <code>src/App/Level1/MathView.spec.js</code>
You can run the tests by running <code>yarn test</code> in your container
(accessible by running <code>make shell</code> in your terminal).

#### Level 2 : Bigger, Smaller, Greater, Stronger

Modify the code in <code>src/App/Level2/Component.js</code> to make the
code responsive. The code should display 2 buttons. These buttons needs to
have rounded corners, a centered icon and a label, and be displayed as column
for mobile and row in desktop.

#### Level 3 : Pagination

In this stage, a user list has been implemented. But as you can see, the pagination is not working.
You have to implement the 2 buttons to go to the next page and the previous page.

#### Level 4 : Typing

For this last level, you'll have to use Flow to type the code in the Level4 folder.
You'll have to type the <code>src/App/Level4/PictureView.js</code> file and the <code>src/App/Level4/PictureListView.js</code> files.
In order to test your code, run <code>yarn flow</code> in your container.

#### THE END

This is it, well done. Send us your code on github, and we'll review it.

